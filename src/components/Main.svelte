<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let introVisible = $state(true);
	let aboutVisible = $state(true);
	let lastScroll = 0;

	onMount(() => {
		const isSmallScreen = () => window.innerWidth < 1024;

		window.addEventListener('scroll', () => {
			let scrollPosition = window.scrollY;

			if (isSmallScreen()) {
				if (scrollPosition > 30) {
					introVisible = false;
				} else if (scrollPosition < 30) {
					introVisible = true;
				}

				if (scrollPosition > 650) {
					aboutVisible = true;
				} else if (scrollPosition < 650) {
					aboutVisible = false;
				}
			} else {
				introVisible = true;
				aboutVisible = true;
			}

			lastScroll = scrollPosition;
		});

		window.addEventListener('resize', () => {
			if (!isSmallScreen()) {
				introVisible = true;
				aboutVisible = true;
			}
		});
	});

	function goToContact() {
		const contactSection = document.getElementById('Contact');
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<main class="flex flex-1 flex-col p-4">
	<section id="introPage" class="grid grid-cols-1 gap-10 py-8 sm:py-14 lg:grid-cols-2">
		{#if introVisible}
			<div
				transition:fly={{ y: 200, duration: 2000 }}
				class="flex flex-col gap-6 text-center md:gap-8 lg:justify-center lg:gap-10 lg:text-left"
			>
				<h2 class="text-center text-xl font-semibold sm:text-2xl md:text-3xl">
					Hi! I'm <span class="text-4xl text-violet-400">Kevin</span>
				</h2>
				<h6 class="md:text-xxl text-center text-lg font-bold sm:text-2xl">
					My goal is to help <br /> small companies
					<span class=" text-violet-400">Grow.</span>
				</h6>
			</div>
		{/if}

		<div class="relative z-[2] grid place-content-center shadow-2xl">
			<img src={'images/me.png'} alt="" srcset="" />
		</div>
	</section>

	<section id="aboutPage" class="flex flex-col items-center gap-24 py-20 lg:py-32">
		{#if aboutVisible}
			<div
				transition:fly={{ y: 10, duration: 2000 }}
				class="flex flex-col gap-2 text-center tracking-widest"
			>
				<h1 class="text-4xl">About Me</h1>
				<p class="py-6 font-sans text-2xl">
					As a self-taught <span
						class="text-3xl font-semibold text-pretty text-violet-400 uppercase italic"
					>
						developer
					</span>, I love turning ideas into reality through code. I started building websites to
					help friends and family grow their small businesses, and now I’m here for you. Building
					custom sites, keeping them running, and boosting them with ads. My passion for learning
					drives me to deliver simple, effective solutions that help your business thrive online.
				</p>
			</div>
			<button
				onclick={goToContact}
				class="w-64 cursor-pointer rounded-xl border-3 border-amber-300 px-6 py-3 text-xl font-bold text-white transition duration-300 ease-in-out hover:border-amber-500 hover:bg-amber-300 hover:text-black"
			>
				Get in Touch
			</button>
		{/if}
	</section>
</main>
