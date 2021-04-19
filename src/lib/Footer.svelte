<script>
	import Constants from './_constants.js';
	let links = [
		{ text: 'Link 1', url: '#a' },
		{ text: 'Link 2', url: '#a' },
		{ text: 'Link 3', url: '#a' },
		{ text: 'Link 4', url: '#a' }
	];
</script>

<footer class="body-text body-bg body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-wrap order-first ">
			<div class="md:w-1/4 w-1/2 px-4">
				<h2 class="title-font font-medium tracking-widest text-sm mb-3">CATEGORY 1</h2>
				<nav class="list-none mb-10">
					{#each links as link}
						<li><a class="justify-self-end" href={link.url}>{link.text}</a></li>
					{/each}
				</nav>
			</div>
			<div class="md:w-1/4 w-1/2 px-4">
				<h2 class="title-font font-medium tracking-widest text-sm mb-3">CATEGORY 2</h2>
				<nav class="list-none mb-10">
					{#each links as link}
						<li><a href={link.url}>{link.text}</a></li>
					{/each}
				</nav>
			</div>
			<div class="md:w-1/4 w-1/2 px-4">
				<h2 class="title-font font-medium tracking-widest text-sm mb-3">CATEGORY 3</h2>
				<nav class="list-none mb-10">
					{#each links as link}
						<li><a href={link.url}>{link.text}</a></li>
					{/each}
				</nav>
			</div>
			<div class="md:w-1/4 w-1/2 px-4">
				<h2 class="title-font font-medium tracking-widest text-sm mb-3">CATEGORY 4</h2>
				<nav class="list-none mb-10">
					{#each links as link}
						<li><a href={link.url}>{link.text}</a></li>
					{/each}
				</nav>
			</div>
		</div>
		<div class="w-full px-4">
			<h2 class="title-font font-medium tracking-widest text-sm mb-3">SUBSCRIBE</h2>
			<div class="grid gap-4 grid-flow-row sm:grid-flow-col justify-center md:justify-start">
				<input
					class="card-bg w-40 sm:w-auto rounded border focus:outline-none text-base py-2 px-4"
					placeholder="Placeholder"
					type="text"
				/>
				<button class="border-0 py-2 px-6 focus:outline-none rounded">Button</button>
			</div>
			<p class="gray-text text-sm mt-2 md:text-left text-center">
				Bitters chicharrones fanny pack waistcoat green juice
			</p>
		</div>
	</div>
	<div class="card-bg">
		<div
			class="container px-5 py-6 mx-auto grid items-center grid-flow-row gap-4 sm:gap-6 sm:grid-flow-col"
		>
			<a
				href="#a"
				class="grid grid-flow-col gap-3 title-font font-medium items-center justify-center md:justify-start "
			>
				{@html Constants.icons.accentLogo}
				<span class="text-xl">Svelte Blocks</span>
			</a>
			<p class="flex gray-text text-sm mx-auto">
				© 2021 Svelte Blocks —
				<a
					href="https://twitter.com/MrNaveenCS"
					class="mx-1"
					target="_blank"
					rel="noopener noreferrer">@MrNaveenCS</a
				>
			</p>
			<span class="grid grid-flow-col gap-3 sm:mt-0 mt-4 justify-center sm:justify-end">
				<a href="#a">{@html Constants.icons.facebook}</a>
				<a href="#a">{@html Constants.icons.twitter}</a>
				<a href="#a">{@html Constants.icons.instagram}</a>
				<a href="#a">{@html Constants.icons.github}</a>
				<a href="#a">{@html Constants.icons.pinterest}</a>
			</span>
		</div>
	</div>
</footer>

<style>
	:global(.icon) {
		width: 1.5em;
		height: 1.5em;
		stroke: currentColor;
		stroke-width: 1.5;
		stroke-linecap: round;
		stroke-linejoin: round;
		fill: none;
	}
	a {
		color: var(--link-text);
		text-decoration: none;
	}
	a:hover {
		color: var(--link-hover-text);
		text-decoration: none;
	}
	button {
		background-color: var(--accent-color);
		color: var(--black);
	}
	button:hover {
		background-color: var(--accent-color-hover);
		color: var(--black);
	}
	input {
		border-color: var(--gray-bg);
	}
	input:focus {
		border-color: var(--accent-color);
	}
	@media (min-width: 768px) {
		.md\:text-left {
			text-align: var(--direction);
		}
	}
</style>
