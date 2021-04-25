<script>
	import Constants from '$lib/_constants.js';
	let strings = Constants.strings;

	let page = 'pricing';
	let { title, url, keywords, desc, image } = Constants.pageDetails(page);

	let noIcon = Constants.icons.noIcon;
	let yesIcon = Constants.icons.yesIcon;
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

<section class="body-text body-bg body-font overflow-hidden">
	<div class="container px-5 py-24 mx-auto flex flex-wrap">
		<div class="flex flex-col text-center w-full mb-20">
			<h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 highlight-color">Pricing</h1>
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base">
				Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
			</p>
			<div class="flex mx-auto border-2 border-accent rounded overflow-hidden mt-6">
				<button class="py-1 px-4 button-accent focus:outline-none">Monthly</button>
				<button class="py-1 px-4 focus:outline-none">Annually</button>
			</div>
		</div>
		<div class="md:w-1/3 mt-48 hidden md:block">
			<div
				class="mt-px border-t border-color border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden"
			>
				<p
					class="card-bg highlight-text h-12 text-center px-4 flex items-center justify-start -mt-px"
				>
					Fingerstache disrupt
				</p>
				<p class="highlight-text h-12 text-center px-4 flex items-center justify-start">
					Franzen hashtag
				</p>
				<p class="card-bg highlight-text h-12 text-center px-4 flex items-center justify-start">
					Tilde art party
				</p>
				<p class="highlight-text h-12 text-center px-4 flex items-center justify-start">
					Banh mi cornhole
				</p>
				<p class="card-bg highlight-text h-12 text-center px-4 flex items-center justify-start">
					Waistcoat squid hexagon
				</p>
				<p class="highlight-text h-12 text-center px-4 flex items-center justify-start">
					Pinterest occupy authentic
				</p>
				<p class="card-bg highlight-text h-12 text-center px-4 flex items-center justify-start">
					Brooklyn helvetica
				</p>
				<p class="highlight-text h-12 text-center px-4 flex items-center justify-start">
					Long Feature Two
				</p>
				<p class="card-bg highlight-text h-12 text-center px-4 flex items-center justify-start">
					Feature One
				</p>
			</div>
		</div>
		<div class="flex md:w-2/3 w-full flex-wrap md:border border-color rounded-lg">
			<div
				class="md:w-1/2 md:mt-px w-full mb-10 md:mb-0 border-2 border-color md:border-none rounded-lg md:rounded-none relative"
			>
				<div class="px-2 text-center h-48 flex flex-col items-center justify-center">
					<h3 class="tracking-widest">START</h3>
					<h2 class="text-5xl highlight-text font-medium leading-none mb-4 mt-2">Free</h2>
					<span class="text-sm gray-text">Next 3 months</span>
				</div>
				<p
					class="card-bg gray-text h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-color"
				>
					Schlitz single-origin
				</p>
				<p class="gray-text text-center h-12 flex items-center justify-center">
					<span
						class="w-5 h-5 inline-flex items-center justify-center icon-bg alt-text rounded-full flex-shrink-0"
						>{@html yesIcon}</span
					>
				</p>
				<p class="card-bg gray-text text-center h-12 flex items-center justify-center">
					<span
						class="w-5 h-5 inline-flex items-center justify-center icon-bg alt-text rounded-full flex-shrink-0"
						>{@html yesIcon}</span
					>
				</p>
				<p class="h-12 gray-text px-6 text-center leading-relaxed flex items-center justify-center">
					Feature
				</p>
				<p class="card-bg gray-text text-center h-12 flex items-center justify-center">
					<span
						class="w-5 h-5 inline-flex items-center justify-center icon-bg alt-text rounded-full flex-shrink-0"
						>{@html yesIcon}</span
					>
				</p>
				<p class="gray-text text-center h-12 flex items-center justify-center">{@html noIcon}</p>
				<p class="card-bg gray-text text-center h-12 flex items-center justify-center">
					{@html noIcon}
				</p>
				<p class="gray-text text-center h-12 flex items-center justify-center">{@html noIcon}</p>
				<p class="card-bg gray-text text-center h-12 flex items-center justify-center">
					{@html noIcon}
				</p>
				<div class="border-t border-color p-6 text-center rounded-bl-lg">
					<a
						href={strings.appPage + '/signup?plan=starter'}
						class="grid grid-flow-col grid-cols-1 items-center mt-auto border-0 py-2 px-4 w-full focus:outline-none rounded"
						><span class="justify-self-start">Starter</span>
						{@html Constants.icons.rightArrowIcon}</a
					>
					<!-- <button
							on:click={(location.href = 'http://www.example.com')}
							class="grid grid-flow-col grid-cols-1 items-center mt-auto border-0 py-2 px-4 w-full focus:outline-none rounded"
							><span class="justify-self-start">Starter</span>
							{@html Constants.icons.rightArrowIcon}
						</button> -->
					<p class="text-xs gray-text mt-3">
						Literally you probably haven't heard of them jean shorts.
					</p>
				</div>
			</div>
			<div
				class="md:w-1/2 md:-mt-px w-full mb-10 md:mb-0 border-2 rounded-lg border-accent relative"
			>
				<span
					class="accent-bg text-white highlight-text px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl"
					>POPULAR</span
				>
				<div class="px-2 text-center h-48 flex flex-col items-center justify-center">
					<h3 class="tracking-widest">PRO</h3>
					<h2
						class="text-5xl highlight-text font-medium flex items-center justify-center leading-none mb-4 mt-2"
					>
						$38
						<span class="gray-text text-base ml-1">/mo</span>
					</h2>
					<span class="text-sm gray-text">Charging $456 per year</span>
				</div>
				<p
					class="card-bg gray-text h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-color"
				>
					Schlitz single-origin
				</p>
				<p class="gray-text text-center h-12 flex items-center justify-center">
					<span
						class="w-5 h-5 inline-flex items-center justify-center icon-bg alt-text rounded-full flex-shrink-0"
						>{@html yesIcon}</span
					>
				</p>
				<p class="card-bg gray-text text-center h-12 flex items-center justify-center">
					<span
						class="w-5 h-5 inline-flex items-center justify-center icon-bg alt-text rounded-full flex-shrink-0"
						>{@html yesIcon}</span
					>
				</p>
				<p class="h-12 gray-text text-center leading-relaxed flex items-center justify-center">
					Feature
				</p>
				<p class="card-bg gray-text text-center h-12 flex items-center justify-center">
					<span
						class="w-5 h-5 inline-flex items-center justify-center icon-bg alt-text rounded-full flex-shrink-0"
						>{@html yesIcon}</span
					>
				</p>
				<p class="gray-text text-center h-12 flex items-center justify-center">
					<span
						class="w-5 h-5 inline-flex items-center justify-center icon-bg alt-text rounded-full flex-shrink-0"
						>{@html yesIcon}</span
					>
				</p>
				<p class="card-bg gray-text text-center h-12 flex items-center justify-center">
					{@html noIcon}
				</p>
				<p class="gray-text text-center h-12 flex items-center justify-center">{@html noIcon}</p>
				<p class="card-bg gray-text text-center h-12 flex items-center justify-center">
					{@html noIcon}
				</p>
				<div class="p-6 text-center border-t border-color">
					<a
						href={strings.appPage + '/signup?plan=pro'}
						class="button-accent grid grid-flow-col grid-cols-1 items-center mt-auto border-0 py-2 px-4 w-full focus:outline-none rounded"
						><span class="justify-self-start">Pro</span>
						{@html Constants.icons.rightArrowIcon}</a
					>
					<!-- <button
						class="button-accent grid grid-flow-col grid-cols-1 items-center mt-auto border-0 py-2 px-4 w-full focus:outline-none rounded"
						><span class="justify-self-start">Pro</span>
						{@html Constants.icons.rightArrowIcon}
					</button> -->
					<p class="text-xs gray-text mt-3">
						Literally you probably haven't heard of them jean shorts.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	button {
		background-color: var(--button-bg);
		color: var(--button-text);
	}
	button:hover {
		background-color: var(--button-hover-bg);
		color: var(--button-hover-text);
	}
	.button-accent {
		background-color: var(--accent-color);
		color: var(--black);
	}
	.button-accent:hover {
		background-color: var(--accent-color-hover);
		color: var(--black);
	}
</style>
