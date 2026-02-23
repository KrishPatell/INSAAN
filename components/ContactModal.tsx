import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit?access_key=8976db2b-e88a-44ca-9cb9-924dd30b7720&email_to=Info@insaanglobal.com,hi@kpatel.xyz&subject=Insaan Global Form Submission&from_name=Insaan Global', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          type: formData.type,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', phone: '', email: '', type: '' });
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-[scaleIn_0.3s_ease-out] max-h-[80vh] md:max-h-[90vh] overflow-y-auto my-2 md:my-4 mx-2">
        {/* Header */}
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

        {/* Form */}
        <div className="p-6 md:p-8">
          {isSubmitted ? (
            <div className="text-center py-6 md:py-8">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Thank You!</h4>
              <p className="text-gray-600 text-sm md:text-base">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-insaan-black focus:ring-2 focus:ring-insaan-black/10 transition-all outline-none text-gray-800"
                  placeholder="John Doe"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-insaan-black focus:ring-2 focus:ring-insaan-black/10 transition-all outline-none text-gray-800"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-insaan-black focus:ring-2 focus:ring-insaan-black/10 transition-all outline-none text-gray-800"
                  placeholder="john@example.com"
                />
              </div>

              {/* Dropdown */}
              <div>
                <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">
                  I am an...
                </label>
                <div className="relative">
                  <select
                    id="type"
                    required
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-insaan-black focus:ring-2 focus:ring-insaan-black/10 transition-all outline-none text-gray-800 bg-white appearance-none cursor-pointer pr-10"
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="employer">I'm an Employer</option>
                    <option value="jobseeker">I'm a Job Seeker</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-insaan-black text-white py-3.5 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Submit'}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};
