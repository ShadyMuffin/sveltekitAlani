<script>
	// @ts-nocheck

	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import Main from '../components/Main.svelte';
	let { children } = $props();

	let y;
	let innerWidth = 0;
	let innerHeight = 0;

	function goToTop() {
		document.body.scrollIntoView();
	}
</script>

<div class="relative mx-auto flex min-h-screen w-full max-w-[1400px] flex-col text-sm sm:text-base">
	<div
		class={'fixed bottom-0 z-[10] flex w-full p-10 duration-200 ' +
			(y > 0 ? 'opacity-full pointer-events-auto ' : ' pointer-events-none opacity-0 ')}
	>
		<button
			class="ml-auto cursor-pointer rounded border-2 px-3 transition duration-200 ease-in-out hover:bg-amber-400 hover:text-slate-800 sm:px-4"
			on:click={goToTop}
		>
			<i class="fa-solid fa-arrow-up place grid aspect-square items-center" />
		</button>
	</div>
	<Header {y} />
	<Main />
	<Footer />
</div>

{@render children()}

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
