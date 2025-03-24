<script>
	// @ts-nocheck

	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import Main from '../components/Main.svelte';
	import Contact from './Contact.svelte';
	import Services from './Services.svelte';
	let { children } = $props();

	let y = $state(0);
	let innerWidth = 0;
	let innerHeight = 0;

	function goToTop() {
		document.body.scrollIntoView();
	}
</script>

<div class="relative mx-auto flex min-h-screen w-full max-w-[1400px] flex-col text-sm sm:text-base">
	<div
		class={'fixed bottom-0 z-[10] flex w-full p-10 duration-200' +
			(y > 0 ? 'opacity-full pointer-events-auto opacity-100 ' : ' pointer-events-none opacity-0 ')}
	>
		<button
			class="ml-auto flex h-auto cursor-pointer flex-col items-center justify-center rounded border-2 bg-slate-900 p-2 text-lg font-bold transition duration-200 ease-in-out hover:bg-amber-400 hover:text-slate-800"
			onclick={goToTop}
		>
			<i class="fa-solid fa-arrow-up aspect-square items-center"></i>
			<span>TOP</span>
		</button>
	</div>
	<Header {y} />
	<div id="Home"><Main /></div>
	<div id="Services"><Services /></div>
	<div id="Contact"><Contact /></div>
	<Footer />
</div>

{@render children()}

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
