# Contact form – where emails are sent

The contact form sends submissions to **your own API** at `POST /api/contact`. You control recipients via environment variables (one or many).

---

## Option A: Resend + Vercel (recommended, robust)

- **Multiple recipients:** set `CONTACT_EMAILS=one@company.com,two@company.com` (comma-separated).
- **Single recipient:** set `CONTACT_EMAIL=you@company.com`.
- Free tier: 3,000 emails/month. No “form service” lock-in.

### 1. Resend

1. Sign up at [resend.com](https://resend.com).
2. Create an **API key** (Dashboard → API Keys).
3. (Optional) Add and verify your domain so “From” can be `contact@yourdomain.com`. Otherwise you can use `onboarding@resend.dev` for testing.

### 2. Deploy on Vercel

1. Push your repo and import the project in [Vercel](https://vercel.com).
2. In Project → Settings → Environment Variables, add:

   | Name | Value |
   |------|--------|
   | `RESEND_API_KEY` | your Resend API key |
   | `CONTACT_EMAILS` | `Info@insaanglobal.com` or `a@x.com,b@y.com` for multiple |
   | `RESEND_FROM_EMAIL` | (optional) e.g. `contact@yourdomain.com` or leave blank to use `onboarding@resend.dev` |

3. Redeploy. Submissions will go to the email(s) in `CONTACT_EMAILS` (or `CONTACT_EMAIL` if you set that instead).

### 3. Local development

The app calls `/api/contact` on the same origin. When you run `npm run dev`, there is no API server unless you use Vercel’s dev server:

- Run **`npx vercel dev`** so `/api/contact` runs locally and uses your env (e.g. from `.env.local`), or  
- Set **`VITE_CONTACT_API_URL=https://your-app.vercel.app`** so the form posts to your deployed API while you develop locally.

---

## Option B: Google Apps Script (free, no Resend)

No backend in the repo. One script receives the form and emails one or more addresses.

1. Go to [script.google.com](https://script.google.com) → New project.
2. Replace the code with:

```javascript
function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);
    var name = body.name || '';
    var email = body.email || '';
    var phone = body.phone || '';
    var type = body.type || '';
    var to = 'Info@insaanglobal.com'; // or 'a@x.com,b@y.com' for multiple
    var subject = 'Contact form – Insaan Global – ' + name;
    var html = '<p><b>Name:</b> ' + name + '</p><p><b>Email:</b> ' + email + '</p><p><b>Phone:</b> ' + phone + '</p><p><b>I am:</b> ' + type + '</p>';
    MailApp.sendEmail({ to: to, subject: subject, htmlBody: html, replyTo: email });
    return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ error: String(err) })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Deploy → New deployment → Type: Web app → Execute as: Me, Who has access: Anyone. Copy the **Web app URL**.
4. In your app, set **`VITE_CONTACT_API_URL`** to that URL (no trailing slash). The form will POST to the script instead of `/api/contact`.
