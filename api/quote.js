import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.NOTIFY_EMAIL || 'info@hazan-fences.co.il';
// כתובת השליחה של Resend — עובדת בלי אימות דומיין
const FROM_EMAIL = 'onboarding@resend.dev';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    name, phone, email,
    project_type, length, start_date, duration, location,
    notes, form_source
  } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: 'שם וטלפון הם שדות חובה' });
  }

  const isRental = form_source === 'rental';
  const subject = isRental
    ? `🏗️ בקשת השכרה — ${name} | ${length ? length + ' מ׳' : ''}`
    : `📋 בקשה להצעת מחיר — ${name}`;

  try {
    await resend.emails.send({
      from: `חזן גדרות <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email || undefined,
      subject,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #0b0d10; border-bottom: 3px solid #f39c12; padding-bottom: 12px;">
            ${isRental ? '🏗️ בקשת השכרת גדרות' : '📋 בקשה להצעת מחיר'} — ${name}
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px 14px; font-weight: bold; width: 35%;">שם מלא</td>
              <td style="padding: 10px 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: bold;">טלפון</td>
              <td style="padding: 10px 14px;"><a href="tel:${phone}" style="color: #1f4e79;">${phone}</a></td>
            </tr>
            ${email ? `
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px 14px; font-weight: bold;">דוא"ל</td>
              <td style="padding: 10px 14px;"><a href="mailto:${email}" style="color: #1f4e79;">${email}</a></td>
            </tr>` : ''}
            ${project_type ? `
            <tr>
              <td style="padding: 10px 14px; font-weight: bold;">סוג פרויקט</td>
              <td style="padding: 10px 14px;">${project_type}</td>
            </tr>` : ''}
            ${length ? `
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px 14px; font-weight: bold;">אורך מוערך</td>
              <td style="padding: 10px 14px;">${length} מ׳</td>
            </tr>` : ''}
            ${start_date ? `
            <tr>
              <td style="padding: 10px 14px; font-weight: bold;">תאריך התחלה</td>
              <td style="padding: 10px 14px;">${start_date}</td>
            </tr>` : ''}
            ${duration ? `
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px 14px; font-weight: bold;">משך ההשכרה</td>
              <td style="padding: 10px 14px;">${duration}</td>
            </tr>` : ''}
            ${location ? `
            <tr>
              <td style="padding: 10px 14px; font-weight: bold;">מיקום הפרויקט</td>
              <td style="padding: 10px 14px;">${location}</td>
            </tr>` : ''}
            ${notes ? `
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px 14px; font-weight: bold;">הערות</td>
              <td style="padding: 10px 14px;">${notes}</td>
            </tr>` : ''}
          </table>

          <div style="margin-top: 24px; padding: 14px; background: #fff8e1; border-right: 4px solid #f39c12; border-radius: 4px;">
            <strong>⚡ יעד: מענה תוך שעה בשעות העבודה</strong>
          </div>

          <p style="margin-top: 20px; font-size: 12px; color: #999;">
            הודעה זו נשלחה מאתר <a href="https://hazan-fences.co.il">hazan-fences.co.il</a>
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'שגיאת שרת, נסה שוב' });
  }
}
