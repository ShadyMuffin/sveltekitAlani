<script>
	import Button from '../components/Button.svelte';

	let plans = [
		{
			header: 'Essential Plan - $149/month',
			title: 'What you get:',
			planList: ['Custom website', 'Basic upkeep', 'SEO tweaks + email support']
		},
		{
			header: 'Website only - $600',
			title: 'What you get:',
			planList: [
				'Custom website',
				'Editable source files (full control to tweak it)',
				'Responsive design (looks great on all devices)'
			]
		},
		{
			header: 'Pro Plan - $299/month',
			title: 'What you get:',
			planList: [
				'Custom website',
				'Full upkeep + chatbot (for customers queries)',
				'Ads setup + monthly performance report'
			]
		}
	];
</script>

<section class=" text-center">
	<h1 class="py-30 text-3xl underline">Plans</h1>
	<div class="grid place-content-center justify-evenly gap-20 xl:grid-cols-1">
		{#each plans as plan}
			<div
				class=" mx-auto h-[600px] min-w-auto place-content-center rounded-2xl border-4 border-violet-400 bg-slate-950 p-5 duration-300 ease-in-out hover:bg-slate-800 hover:mix-blend-normal hover:shadow-amber-300 lg:w-[1000px]"
			>
				<h1 class="py-5 text-center text-2xl underline">{plan.header}</h1>
				<h3 class="py-4 text-center text-xl text-violet-400">{plan.title}</h3>
				<ul class="text-center">
					{#each plan.planList as list}<li
							class="py-6 font-mono text-2xl font-semibold text-white lg:text-3xl"
						>
							{list}
						</li>{/each}
				</ul>
				<Button>BUY NOW!</Button>
			</div>
		{/each}
	</div>
	<div class="py-14 text-4xl">
		<h1 class="mx-auto w-auto px-4 py-10">Fast and minimalist websites.</h1>
	</div>
</section>
