<script context="module">
	export const prerender = true;
</script>

<script>
	import Hero from '$lib/Hero.svelte';
	import Constants from '$lib/_constants.js';
	let strings = Constants.strings;
	
	let page = 'index';
	let { title, url, keywords, desc, image } = Constants.pageDetails(page);
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="canonical" href={url} />
	{#if Constants.strings.versions}
		{#each Constants.strings.versions as version}
			<link rel="alternate" href={version.website} hreflang={version.lang} />
		{/each}
	{/if}
	<meta name="description" content={desc} />
	<meta name="keywords" content={keywords} />

	<!-- Open Graph / Facebook -->
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:image" content={image} />

	<!-- Twitter -->
	<meta name="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={desc} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:image:src" content={image} />
	<meta name="twitter:image:alt" content={title} />
</svelte:head>

<Hero />

<style style lang="postcss">
</style>
