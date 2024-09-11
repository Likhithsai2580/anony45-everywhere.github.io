import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

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
      return NextResponse.json({ message: 'Message sent successfully' });
    } else {
      return NextResponse.json({ message: 'Failed to send message' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}
