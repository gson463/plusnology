import express from 'express';
import twilio from 'twilio';

const router = express.Router();

router.post('/whatsapp', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'Missing required fields: name, email, phone, message' });
  }

  const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

  const formattedMessage = `Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`;

  const result = await client.messages.create({
    from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
    to: 'whatsapp:+255765715794',
    body: formattedMessage,
  });

  res.json({ success: true, messageId: result.sid });
});

export default router;