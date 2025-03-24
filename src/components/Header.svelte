<script>
	export let y;
	let tabs = [
		{ name: 'Home', link: '/' },
		{ name: 'Services', link: '#Services' },
		{ name: 'Contact', link: '#Contact' }
	];

	let showMenu = false;

	function toggleMenu() {
		showMenu = !showMenu;
	}
</script>

<header
	class={'sticky top-0 z-[10] flex items-center justify-between border border-solid duration-200 ' +
		(y > 0
			? ' sticky top-0 z-[10] flex items-center justify-between rounded-2xl border border-solid bg-slate-900 px-6 py-4 duration-200'
			: ' border-transparent bg-transparent py-6 ')}
>
	<h1 class="font-sans text-xl font-bold text-violet-400 not-italic sm:text-2xl md:text-4xl">
		<b class="font-serif text-amber-400 italic">Alani</b> HELP.
	</h1>
	<div class={'hidden place-content-center gap-10 text-3xl font-bold md:flex'}>
		{#each tabs as tab, index}
			<a
				href={tab.link}
				class="cursor-pointer rounded p-3 text-xl duration-200 ease-in-out hover:bg-amber-300 hover:text-black lg:text-2xl"
				><h4>{tab.name}</h4></a
			>{/each}
	</div>
</header>
<div class="flex place-content-center">
	<button
		class=" grid h-10 w-10 place-content-center rounded bg-amber-400 p-2 text-2xl font-bold text-black md:hidden"
		onclick={toggleMenu}>☰</button
	>
	{#if showMenu}
		<div
			class="absolute top-16 left-0 flex w-full flex-col gap-4 bg-gray-900 p-5 text-white md:hidden"
		>
			{#each tabs as tab}
				<a
					href={tab.link}
					class="rounded p-3 text-lg hover:bg-amber-300 hover:text-black"
					onclick={() => (showMenu = false)}
				>
					{tab.name}
				</a>
			{/each}
			<button class="w-12 rounded bg-amber-300 text-2xl font-semibold text-black">X</button>
		</div>
	{/if}
</div>
