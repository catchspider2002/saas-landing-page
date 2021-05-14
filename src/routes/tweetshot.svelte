<script>
	import Constants from '$lib/_constants.js';
	let strings = Constants.strings;

	let page = 'home';
	let { title, url, keywords, desc, image } = Constants.pageDetails(page);

	let noIcon = Constants.icons.noIcon;
	let yesIcon = Constants.icons.yesIcon;
	// let updateName = () => {};
	let name = '';

	let updateName = async function () {
		const authAPI = await fetch(
			'https://tweetdetails.catchspider2002.workers.dev/?id=1393287637147045898',
			{
				method: 'GET',
				// credentials: 'include',
				mode: 'cors',
				// credentials: 'no-cors',
				// body: JSON.stringify({
				// 	email: email.value,
				// 	password: password.value,
				// 	remember: remember.checked,
				// 	authType: authType
				// }),
				headers: {
					'Api-Key': 'mypresharedkey',
					Accept: 'text/plain',
					'Content-Type': 'text/plain'
					// 'Content-Type': 'application/json'
				}
			}
		);

		// console.log("data: " + JSON.stringify(data));
		console.log('error: ' + JSON.stringify(await authAPI.json()));

		// console.log("Name updated to " + name);
	};
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

<div class="grid grid-cols-2 mt-16">
	<div class="controls">
		<input
			class="rounded border focus:outline-none text-base px-4 py-2 mt-2 mb-6 w-full"
			placeholder="https://twitter.com/jack/status/20"
			type="text"
			bind:value={name}
			on:change={updateName}
		/>

		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
			interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas
			nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
			aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis
			urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
			ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
			dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus
			pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit
			amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem
			egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
			congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula,
			facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
			hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
			libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida
			venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
			porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur
			adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
			scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
			vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
			ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus
			congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
			venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
			fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
			purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim
			ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
			luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in
			odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum
			nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare
			turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non
			fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
			interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas
			nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
			aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis
			urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
			ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
			dui eget tellus gravida venenatis. Integer fringilla congue eros non dapibus pulvinar nibh
			tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
			consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas
			odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue
			eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula,
			facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
			hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
			libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida
			venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
			porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur
			adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
			scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
			vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
			ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus
			congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
			venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
			fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
			purus. Mauris quis diam velit.
		</p>
	</div>

	<div class="preview sticky top-32">
		I will stick to the screen when you reach my scroll position
	</div>

	<p>Some example text..</p>
	<h2>Scroll back up again to "remove" the sticky position.</h2>
</div>

<style style lang="postcss">
	.preview {
		/* position: sticky; */
		/* top: 50px; */
		/* width: 600px; */
		height: 400px;
		border: 1px solid red;
	}
	.controls {
	}
	div.sticky {
		/* position: -webkit-sticky; */
		/* position: sticky; */
		/* top: 0; */
		background-color: darkslategray;
		padding: 50px;
		font-size: 20px;
	}
</style>
