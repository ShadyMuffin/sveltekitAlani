import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { EMAIL_USER, EMAIL_PASS } from '$env/static/private';

// @ts-ignore
export async function POST({ request }) {
	try {
		const { email, message } = await request.json();
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: EMAIL_USER, // Your email
				pass: EMAIL_PASS // Your app password
			}
		});
		await transporter.sendMail({
			from: EMAIL_USER,
			to: EMAIL_USER,
			subject: `New Message from ${email}`,
			text: `From: ${email}\n\n${message}`
		});
		return json({ success: true }, { status: 200 });
	} catch (error) {
		console.error('Email error:', error);
		return json({ success: false, error: 'Failed to send email' }, { status: 500 });
	}
}
