<script>
	export let y;
	let tabs = [
		{ name: 'Home', link: '#Home' },
		{ name: 'Services', link: '#Services' },
		{ name: 'Contact', link: '#Contact' }
	];
</script>

<header
	class={'sticky top-0 z-[10] flex items-center justify-between border border-solid px-6 duration-200 ' +
		(y > 0 ? ' py-4 ' : ' border-transparent bg-transparent py-6 ')}
>
	<h1 class="font-sans text-xl font-bold text-violet-400 not-italic sm:text-2xl md:text-4xl">
		<b class="font-serif text-amber-400 italic">Alani</b> HELP.
	</h1>
	<div class=" hidden place-content-center gap-10 text-3xl font-bold md:flex">
		{#each tabs as tab, index}
			<a
				href={tab.link}
				class="cursor-pointer rounded p-3 text-xl duration-200 ease-in-out hover:bg-amber-300 hover:text-black lg:text-2xl"
				><h4>{tab.name}</h4></a
			>{/each}
	</div>
</header>
