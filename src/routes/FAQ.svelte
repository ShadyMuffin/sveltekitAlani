<script>
	// @ts-nocheck

	let faqs = [
		{
			question: 'How much does a website cost?',
			answer:
				'The cost of a website depends on its features, complexity, and design. We offer affordable pricing tailored to small businesses. Contact us for a free quote!'
		},
		{
			question: 'How long does it take to build a website?',
			answer:
				'A simple website can be completed in 1-3 weeks, while more complex sites with custom features may take longer. We’ll give you a clear timeline after discussing your needs.'
		},
		{
			question: 'Will my website work on mobile devices?',
			answer:
				'Yes! All our websites are fully responsive, meaning they look and function perfectly on desktops, tablets, and smartphones.'
		},
		{
			question: 'Do you offer ongoing support and maintenance?',
			answer:
				'Yes! We offer ongoing support, updates, and maintenance to ensure your website stays secure, fast, and up to date. Would you like me to adjust any of these or add more? 🚀'
		},
		{
			question: 'Will my website be SEO-friendly?',
			answer:
				"Yes! We build websites with SEO best practices to help your business rank higher on Google. This includes fast loading speeds, mobile optimization, and keyword-friendly content. Let me know if you'd like any other changes! 🚀"
		}
	];

	let visibleIndex = $state(null);

	// @ts-ignore
	function toggleAnswer(index) {
		visibleIndex = visibleIndex === index ? null : index;
	}
</script>

<section id="Faq" class="mx-auto px-10 text-amber-400">
	<h1 class="text-center text-2xl xl:text-4xl">Frequently Asked Questions</h1>
	<div>
		<div class="grid py-20">
			{#each faqs as faq, index}
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					onclick={() => toggleAnswer(index)}
					class="flex cursor-pointer content-center rounded-2xl px-5 py-4 align-middle duration-300 ease-in-out hover:bg-slate-800 hover:text-violet-500"
				>
					<h2 class=" flex px-5 text-xl font-bold lg:text-2xl">
						0{index + 1}
					</h2>
					<div class="grid">
						<h1 class="flex items-center text-xl text-amber-50 xl:text-2xl">
							{faq.question}
						</h1>
					</div>
				</div>
				{#if visibleIndex === index}
					<p
						id="answers"
						class="animate-in my-20 translate-y-[-10px] rounded-2xl bg-slate-800 p-5 px-14 text-justify text-2xl font-bold tracking-wider text-pretty text-amber-400 italic opacity-0 transition-all duration-300 ease-in-out xl:text-3xl"
					>
						{faq.answer}
					</p>
				{/if}
			{/each}
		</div>
	</div>
</section>

<style>
	.animate-in {
		opacity: 1;
		transform: translateY(0);
	}
</style>
