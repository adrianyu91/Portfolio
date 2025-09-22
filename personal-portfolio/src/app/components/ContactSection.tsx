'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTheme } from 'next-themes';

export default function ContactSection() {
  const { theme } = useTheme();
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
        form.current?.reset();
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setError(true);
        setLoading(false);
      });
  };

  const inputBg = theme === 'dark' ? 'bg-white/5' : 'bg-black/5';
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-300';
  const buttonBg = theme === 'dark' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700';

  return (
    <section
      id="contact"
      className={`min-h-screen flex flex-col items-center justify-center px-4 transition-colors duration-500 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'}`}
    >
      <h2 className={`text-4xl font-semibold mb-8 ${textColor}`}>Contact Me</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className={`w-full max-w-xl space-y-6 p-8 rounded-xl shadow-md transition-colors duration-500 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
      >
        <div className="flex flex-col">
          <label htmlFor="user_name" className={`mb-2 font-medium ${textColor}`}>Name</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            required
            className={`px-4 py-2 rounded-md border ${borderColor} ${inputBg} ${textColor}`}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="user_email" className={`mb-2 font-medium ${textColor}`}>Email</label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            required
            className={`px-4 py-2 rounded-md border ${borderColor} ${inputBg} ${textColor}`}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="subject" className={`mb-2 font-medium ${textColor}`}>Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            className={`px-4 py-2 rounded-md border ${borderColor} ${inputBg} ${textColor}`}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className={`mb-2 font-medium ${textColor}`}>Message</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            className={`px-4 py-2 rounded-md border ${borderColor} ${inputBg} ${textColor}`}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`text-white px-6 py-2 rounded-md transition ${buttonBg}`}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {success && (
          <p className="text-green-500 mt-2 transition-opacity duration-500">Message sent successfully!</p>
        )}

        {error && (
          <p className="text-red-500 mt-2 transition-opacity duration-500">Something went wrong. Please try again.</p>
        )}
      </form>
    </section>
  );
}
