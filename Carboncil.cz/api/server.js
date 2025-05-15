import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config(); 

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,                         
  port: Number(process.env.SMTP_PORT),               
  secure: process.env.SMTP_SECURE === 'true',         
  auth: {
    user: process.env.SMTP_USER,                  
    pass: process.env.SMTP_PASS,                       
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, product, message } = req.body;
  try {
    await transporter.sendMail({
      from: `"Web Kontakt" <${process.env.SMTP_USER}>`,
      to:   process.env.MY_RECEIVER_EMAIL,              
      subject: `Nová zpráva od ${name}`,
      html: `
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Produkt:</strong> ${product}</p>
        <p><strong>Zpráva:</strong><br/>${message}</p>
      `
    });
    res.status(200).json({ status: 'ok' });
  } catch(err) {
    console.error('Chyba při odesílání mailu:', err);
    res.status(500).json({ status: 'error', error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server běží na portu ${PORT}`);
});
