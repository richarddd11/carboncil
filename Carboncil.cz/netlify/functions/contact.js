// netlify/functions/contact.js
import nodemailer from 'nodemailer';

export const handler = async (event) => {
  const { name, email, phone, product, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },

    greetingTimeout: 30000,      // ak server neodpovie, zruší sa spojenie po 5 sekundách
  connectionTimeout: 30000,
  });

  console.log('About to send email:', { name, email, phone, product });

  try {
    await transporter.sendMail({
      from: `"Web Kontakt" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `Nová zpráva od ${name}`,
      html: `
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Produkt:</strong> ${product}</p>
        <p><strong>Zpráva:</strong><br/>${message}</p>
      `,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ status: 'ok' }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ status: 'error', error: err.message }),
    };
  }
};
