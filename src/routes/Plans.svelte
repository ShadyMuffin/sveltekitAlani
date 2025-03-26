<script>
	let plans = [
		{
			header: 'Essential Plan - $149/month',
			title: 'What you get:',
			planList: ['Custom website', 'Basic upkeep', 'SEO tweaks + email support']
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

<section class="text-center">
	<h1 class="py-24 text-3xl underline">Plans</h1>
	<div class="grid place-content-center justify-evenly gap-20 xl:grid-cols-2">
		{#each plans as plan}
			<div
				class=" mx-auto h-[600px] w-[600px] place-content-center rounded-2xl border-4 border-violet-400 bg-slate-950 p-5 duration-300 ease-in-out hover:cursor-pointer hover:bg-slate-800 hover:mix-blend-normal hover:shadow-amber-300"
			>
				<h1 class="py-5 text-center underline">{plan.header}</h1>
				<h3 class="py-4 text-center text-violet-400">{plan.title}</h3>
				<ul class="text-center">
					{#each plan.planList as list}<li class="py-6 font-mono text-2xl font-semibold text-white">
							{list}
						</li>{/each}
				</ul>
			</div>
		{/each}
	</div>
	<div class="py-14 text-4xl italic">
		<p class="mx-auto w-auto px-4">These aren't your only options, feel free to email me.</p>
	</div>
</section>
