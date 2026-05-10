import { useState } from 'react';

/**
 * useFormSubmit — hook כללי לשליחת טפסים ל-API הפנימי (Vercel Serverless + Resend)
 * @param {string} endpoint — נתיב ה-API, לדוגמה: '/api/contact' או '/api/quote'
 */
export function useFormSubmit(endpoint) {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  async function submit(e) {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.target);
    const body = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return { status, submit };
}

// Backward compat alias (במקרה שנשתמש בשם הישן)
export const useFormspree = useFormSubmit;
