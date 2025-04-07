<script>
	import { loadStripe } from '@stripe/stripe-js';
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';

	let { children, ...props } = $props();

	async function onclick() {
		const stripe = await loadStripe(PUBLIC_STRIPE_KEY);
		const response = fetch('/api/checkout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
</script>

<button
	{...props}
	{onclick}
	class="rounded-xl border-4 border-amber-400 px-6 py-2 font-extrabold uppercase duration-300 ease-in-out hover:cursor-pointer hover:bg-amber-400 hover:text-black"
	>BUY NOW</button
>
