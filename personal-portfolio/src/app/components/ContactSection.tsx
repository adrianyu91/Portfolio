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
      className={`min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 transition-colors duration-500 ${
        theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'
      }`}
    >
      <h2 className={`text-3xl sm:text-4xl font-semibold mb-8 ${textColor} text-center`}>
        Contact Me
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className={`w-full max-w-xl space-y-4 sm:space-y-6 p-6 sm:p-8 rounded-xl shadow-md transition-colors duration-500 ${
          theme === 'dark' ? 'bg-gray-900' : 'bg-white'
        }`}
      >
        {['Name', 'Email', 'Subject'].map((field) => (
          <div key={field} className="flex flex-col">
            <label htmlFor={field.toLowerCase()} className={`mb-1 sm:mb-2 font-medium ${textColor} text-sm sm:text-base`}>
              {field}
            </label>
            <input
              type={field === 'Email' ? 'email' : 'text'}
              name={field === 'Email' ? 'user_email' : `user_${field.toLowerCase()}`}
              id={field.toLowerCase()}
              required
              className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg border ${borderColor} ${inputBg} ${textColor}`}
            />
          </div>
        ))}

        <div className="flex flex-col">
          <label htmlFor="message" className={`mb-1 sm:mb-2 font-medium ${textColor} text-sm sm:text-base`}>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg border ${borderColor} ${inputBg} ${textColor}`}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`text-white px-6 py-2 sm:py-3 w-full sm:w-auto rounded-lg transition ${buttonBg}`}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {success && <p className="text-green-500 mt-2 transition-opacity duration-500 text-center">Message sent successfully!</p>}
        {error && <p className="text-red-500 mt-2 transition-opacity duration-500 text-center">Something went wrong. Please try again.</p>}
      </form>
    </section>
  );
}
