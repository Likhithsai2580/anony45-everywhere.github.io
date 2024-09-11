import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    const data = {
      content: `New contact form submission:`,
      embeds: [{
        title: 'Contact Form Details',
        fields: [
          { name: 'Name', value: name },
          { name: 'Email', value: email },
          { name: 'Message', value: message }
        ]
      }]
    };
    try {
      if (!webhookUrl) {
        throw new Error('Discord webhook URL is not defined');
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        res.status(200).json({ message: 'Message sent successfully' });
      } else {
        res.status(500).json({ message: 'Failed to send message' });
      }
    } catch (error) {
      res.status(500).json({ message: 'An error occurred' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
