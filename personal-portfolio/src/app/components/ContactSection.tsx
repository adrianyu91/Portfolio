'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
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

        // Hide success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setError(true);
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-100"
    >
      <h2 className="text-4xl font-semibold mb-8">Contact Me</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-xl space-y-6 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md"
      >
        <div className="flex flex-col">
          <label htmlFor="user_name" className="mb-2 font-medium">Name</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            required
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="user_email" className="mb-2 font-medium">Email</label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            required
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="subject" className="mb-2 font-medium">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 font-medium">Message</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {success && (
          <p className="text-green-600 mt-2 transition-opacity duration-500">
            Message sent successfully!
          </p>
        )}

        {error && (
          <p className="text-red-600 mt-2 transition-opacity duration-500">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  );
}
