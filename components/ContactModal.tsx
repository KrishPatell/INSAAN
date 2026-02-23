import React from 'react';

// Same-origin API: /api/contact (Vercel). Override with VITE_CONTACT_API_URL (e.g. Google Apps Script URL) for a different backend.
const CONTACT_API_BASE = (import.meta as unknown as { env?: { VITE_CONTACT_API_URL?: string } }).env?.VITE_CONTACT_API_URL ?? '';
const CONTACT_ENDPOINT = CONTACT_API_BASE ? CONTACT_API_BASE.replace(/\/$/, '') : '/api/contact';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    type: '',
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          type: formData.type,
        }),
      });
      const data = (await res.json()) as { success?: boolean; error?: string };
      if (!res.ok) {
        throw new Error(data?.error || 'Something went wrong');
      }
      if (data.success !== true) {
        throw new Error(data?.error || 'Something went wrong');
      }
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', type: '' });
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send. Try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-[scaleIn_0.3s_ease-out] max-h-[80vh] md:max-h-[90vh] overflow-y-auto my-2 md:my-4 mx-2">
        <div className="bg-insaan-black px-4 md:px-8 py-3 md:py-6 sticky top-0 z-10">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg md:text-2xl font-bold text-white shrink-0">Get in Touch</h3>
            <button
              onClick={onClose}
              className="w-14 h-14 md:w-9 md:h-9 rounded-full bg-white flex items-center justify-center shrink-0"
            >
              <svg className="w-6 h-6 md:w-5 md:h-5 text-insaan-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-gray-400 mt-2 text-sm">Fill out the form below and we'll get back to you</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 p-4 md:p-8">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-insaan-black focus:ring-2 focus:ring-insaan-black/20 outline-none transition-all text-base md:text-lg"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">Phone Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-insaan-black focus:ring-2 focus:ring-insaan-black/20 outline-none transition-all text-base md:text-lg"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-insaan-black focus:ring-2 focus:ring-insaan-black/20 outline-none transition-all text-base md:text-lg"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">I am an...</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-insaan-black focus:ring-2 focus:ring-insaan-black/20 outline-none transition-all text-base md:text-lg bg-white"
            >
              <option value="">Select an option</option>
              <option value="employer">I'm an Employer</option>
              <option value="jobseeker">I'm a Job Seeker</option>
            </select>
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 md:py-4 bg-insaan-black text-white text-base md:text-lg font-bold rounded-xl hover:bg-insaan-black/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70"
          >
            {submitting ? 'Sending...' : isSubmitted ? 'Sent!' : 'Send Message'}
          </button>
        </form>

        {isSubmitted && (
          <div className="absolute inset-0 bg-white/95 flex items-center justify-center p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
              <p className="text-gray-600">We'll get back to you soon.</p>
            </div>
          </div>
        )}
      </div>
      <style>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};
