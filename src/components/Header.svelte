<script>
	let { y } = $props();
	let tabs = [
		{ name: 'Home', link: '/' },
		{ name: 'Services', link: '#Services' },
		{ name: 'Plans', link: '#Plans' },
		{ name: 'Contact', link: '#Contact' }
	];

	let showMenu = $state(false);

	function toggleMenu() {
		showMenu = !showMenu;
	}
</script>

<header
	class={'sticky top-0 z-[10] flex items-center justify-between border border-solid pl-6 duration-200' +
		(y > 0
			? ' sticky top-0 z-[10] flex items-center justify-between rounded-2xl border border-solid bg-slate-900 px-6 py-4 duration-200'
			: ' border-transparent bg-transparent py-6 ')}
>
	<h1 class="font-sans text-xl font-bold text-violet-400 not-italic sm:text-2xl md:text-4xl">
		<b class="font-serif text-amber-400 italic">Alani</b> HELP.
	</h1>
	<div class={'hidden place-content-center gap-10 text-3xl font-bold lg:flex'}>
		{#each tabs as tab, index}
			<a
				href={tab.link}
				class="cursor-pointer rounded p-3 text-xl duration-200 ease-in-out hover:bg-amber-300 hover:text-black lg:text-2xl"
				><h4>{tab.name}</h4></a
			>{/each}
	</div>
</header>
<div class="flex place-content-center pr-10">
	{#if showMenu}
		<div
			id="menu"
			class="absolute top-16 left-0 z-10 flex w-1/3 flex-col place-items-center gap-4 bg-gray-900 p-5 text-center text-3xl font-bold text-white uppercase lg:hidden"
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
			<button
				class="w-10 cursor-pointer rounded-xl border-4 bg-slate-600 text-2xl font-semibold text-violet-400 hover:bg-violet-500 hover:font-bold hover:text-black"
				onclick={toggleMenu}>X</button
			>
		</div>
	{:else}<button
			id="burger"
			class="z-[2] grid h-10 w-10 cursor-pointer place-content-center rounded-xl border-4 bg-slate-600 p-2 text-2xl font-bold text-violet-400 duration-200 ease-in-out hover:bg-violet-800 hover:text-slate-800 lg:hidden"
			onclick={toggleMenu}>☰</button
		>
	{/if}
</div>
