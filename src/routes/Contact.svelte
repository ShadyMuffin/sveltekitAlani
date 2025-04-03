<script>
	let email = $state('');
	let message = $state('');
	let status = $state('');

	//@ts-ignore
	async function handleSubmit(e) {
		e.preventDefault();

		const response = await fetch('/api/send-email', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, message })
		});
		const data = await response.json();
		if (response.ok && data.success) {
			status = "Message sent! I'll get back to you soon.";
			email = '';
			message = '';
			setTimeout(() => {
				status = '';
			}, 3000);
		} else {
			status = data.error || 'Oops, something went wrong. Try again!';
			setTimeout(() => {
				status = '';
			}, 4000);
		}
	}
</script>

<div class="h-screen p-8 text-center">
	<h1 class="py-20 text-4xl underline">Contact</h1>
	<div class="align-content-center flex flex-col place-content-center items-center gap-14">
		<form
			method="POST"
			onsubmit={handleSubmit}
			class="grid w-auto place-items-center justify-items-center gap-12 rounded-2xl border-2 bg-slate-800 p-7 text-center mix-blend-difference"
		>
			<input
				placeholder="Your Email"
				required
				name="email"
				type="email"
				bind:value={email}
				class="min-w-[400px] rounded text-xl font-bold text-black lg:min-w-[700px]"
			/>

			<textarea
				placeholder="Message"
				name="message"
				bind:value={message}
				class="h-40 min-w-[400px] rounded p-2 align-top text-xl font-bold text-black lg:min-w-[700px]"
				required
			></textarea>
			<button
				class="w-64 cursor-pointer rounded-xl border-3 border-amber-300 px-6 py-3 text-xl font-bold text-white transition duration-300 ease-in-out hover:bg-amber-300 hover:text-black"
				type="submit"
			>
				Send Message
			</button>
		</form>
		{#if status}
			<p class="mt-4 text-3xl text-amber-400">{status}</p>
		{/if}
	</div>
</div>
