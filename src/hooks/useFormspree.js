import { useState } from 'react';

/**
 * useFormspree — hook כללי לשליחת טפסים ל-Formspree
 * @param {string} formId — מזהה הטופס מ-Formspree (לקבל ב-formspree.io)
 */
export function useFormspree(formId) {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  async function submit(e) {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.target);

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
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
