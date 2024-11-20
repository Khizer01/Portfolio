import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  pool: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    try {
      const res = await fetch(`http://api.zerobounce.net/v2/validate?api_key=${process.env.ZERO_BOUNCE}&email=${email}&ip_address=`);
      const data = await res.json();
      
      if (data.status !== 'valid') {
        return NextResponse.json({ success: false, error: 'Enter a valid email address' }, { status: 404 });
      }
    } catch (error) {
      return NextResponse.json({ success: false, error: 'Error validating email:' + error }, { status: 500 });
    }
    // Read the HTML template
    const templatePath = path.join(process.cwd(), 'app', 'Email-Temp', 'index.html');
    let htmlTemplate = fs.readFileSync(templatePath, 'utf-8');

    // Replace placeholders in your template
    htmlTemplate = htmlTemplate.replace('{{name}}', name).replace('{{message}}', message);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Contact form submission from ${name}`,
      text: message,
    };

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank You ${name} for contacting.`,
      html: htmlTemplate,
      attachments: [
        {
          filename: 'image-1.png',
          path: path.join(process.cwd(), 'app', 'Email-Temp', 'images', 'image-1.png'),
          cid: 'unique@image1.cid'
        },
        {
          filename: 'image-2.png',
          path: path.join(process.cwd(), 'app', 'Email-Temp', 'images', 'image-2.png'),
          cid: 'unique@image2.cid'
        },
        {
          filename: 'image-4.png',
          path: path.join(process.cwd(), 'app', 'Email-Temp', 'images', 'image-4.png'),
          cid: 'unique@image4.cid'
        },
      ],
    };

    // Send emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send message. ' + error }, { status: 500 });
  }
}
