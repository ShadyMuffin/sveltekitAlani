<script>
	// @ts-nocheck

	let services = [
		{
			title: 'Craft Your Website',
			image: '/images/building.jpg',
			servicePoints: [
				'Custom design tailored to your brand. No generic templates.',
				'Fast, mobile-friendly sites that work on any device.',
				'Built-in tools like forms to connect with your customers.'
			],

			serviceParagrapth:
				'Your business needs a standout online presence to grab attention. I can create affordable and unique websites designed just for you.'
		},
		{
			title: 'Boost your visibility',
			image: '/images/premote.jpg',
			servicePoints: [
				'Targeted ads to get your site seen by the right people.',
				'SEO tweaks so customers find you on Google.',
				'Social media integration to spread the word fast.'
			],
			serviceParagrapth:
				'People lean toward businesses with websites. Those missing one get overlooked because a site shows you’re legit and dependable. Don’t lose easy costumers because you dont have a website.'
		},
		{
			title: 'Keep it running',
			image: '/images/upgrade.jpg',
			servicePoints: [
				'Regular updates to keep your site fresh and secure.',
				'Quick fixes for bugs or crashes. No downtime stress.',
				'Upgrades to add new features as you grow.'
			],
			serviceParagrapth:
				'Your site should always work like new. My hands-on care keeps it smooth and growing, so you can focus on your business.'
		}
	];
</script>

<div class="h-auto w-full py-28 text-center">
	<h1 class="py-20 text-4xl">Services</h1>
	<div class="flex place-content-center">
		<section
			class="align-content-center flex w-full flex-col justify-evenly gap-60 p-2 text-center text-xl font-bold text-wrap text-amber-200"
		>
			{#each services as service}
				<div
					class="grid cursor-pointer items-center gap-9 duration-200 ease-in-out hover:text-yellow-400 lg:grid-cols-2"
				>
					<div class="grid place-items-center">
						<img
							src={service.image}
							alt="laptop coding"
							class="h-auto w-full max-w-[400px] rounded-xl md:max-w-[500px] lg:max-w-[600px]"
						/>
					</div>
					<div>
						<h3 class="py-5 text-xl font-bold text-violet-400">{service.title}</h3>
						<div
							class="ml-10 grid items-start gap-5 py-5 text-left text-2xl font-semibold text-white italic"
						>
							<ul class="grid gap-10">
								{#each service.servicePoints as point, index}
									<div class="flex gap-5">
										<p class="text-2xl font-extrabold text-gray-400 italic">0{index + 1}</p>
										<li>{point}</li>
									</div>
								{/each}
							</ul>
						</div>
						<p class="p-2 font-mono text-3xl text-wrap">{service.serviceParagrapth}</p>
					</div>
				</div>
			{/each}
		</section>
	</div>
</div>
