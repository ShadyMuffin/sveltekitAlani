// import { json } from '@sveltejs/kit';
// import EmailJS from '@emailjs/nodejs';
// import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '$env/static/private';

// // @ts-ignore
// export async function POST({ request }) {
// 	try {
// 		const { email, message } = await request.json();

// 		// @ts-ignore
// 		await EmailJS.init(EMAILJS_PUBLIC_KEY);

// 		const result = await EmailJS.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { email, message });
// 		console.log('Email sent:', result); // Debug
// 		return json({ success: true }, { status: 200 });
// 	} catch (error) {
// 		console.error('Email failed:', error); // Debug
// 		return json({ success: false, error: 'Failed to send email' }, { status: 500 });
// 	}
// }

import { json } from '@sveltejs/kit';
import EmailJS from '@emailjs/nodejs';
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '$env/static/private';

// @ts-ignore
export async function POST({ request }) {
	try {
		// Log environment variables to verify they're loaded
		console.log('Env vars:', {
			publicKey: EMAILJS_PUBLIC_KEY,
			serviceID: EMAILJS_SERVICE_ID,
			templateID: EMAILJS_TEMPLATE_ID
		});

		if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
			throw new Error('Missing EmailJS environment variables');
		}

		const { email, message } = await request.json();
		console.log('Request data:', { email, message });

		// Initialize EmailJS
		await EmailJS.init({ publicKey: EMAILJS_PUBLIC_KEY });

		// Send email
		const result = await EmailJS.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { email, message });
		console.log('Email sent successfully:', result);
		return json({ success: true }, { status: 200 });
	} catch (error) {
		// Log detailed error info
		console.error('Email failed:', {
			// @ts-ignore
			message: error.message,
			// @ts-ignore
			stack: error.stack,
			// @ts-ignore
			details: error.response ? error.response.data : 'No response data'
		});
		// Return more specific error to client
		return json(
			// @ts-ignore
			{ success: false, error: error.message || 'Failed to send email' },
			{ status: 500 }
		);
	}
}
