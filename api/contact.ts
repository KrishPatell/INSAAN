import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// One or more recipients: set CONTACT_EMAILS (comma-separated) or single CONTACT_EMAIL
const getToEmails = (): string[] => {
  const list = process.env.CONTACT_EMAILS || process.env.CONTACT_EMAIL || '';
  if (!list.trim()) return [];
  return list.split(',').map((e) => e.trim()).filter(Boolean);
};

export default async function handler(req: { method?: string; body?: string }, res: { status: (n: number) => { json: (o: object) => void }; setHeader: (a: string, b: string) => void }) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).json({});
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const to = getToEmails();
  if (!to.length) {
    return res.status(500).json({ error: 'No CONTACT_EMAIL or CONTACT_EMAILS configured' });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'RESEND_API_KEY not set' });
  }

  let body: { name?: string; phone?: string; email?: string; type?: string };
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
  } catch {
    return res.status(400).json({ error: 'Invalid JSON body' });
  }

  const { name = '', phone = '', email = '', type = '' } = body;
  const from = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  const subject = `Contact form – Insaan Global${name ? ` – ${name}` : ''}`;
  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>I am:</strong> ${escapeHtml(type || '—')}</p>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: from.includes('<') ? from : `Insaan Global <${from}>`,
      to,
      replyTo: email || undefined,
      subject,
      html,
    });
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to send';
    return res.status(500).json({ error: message });
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
