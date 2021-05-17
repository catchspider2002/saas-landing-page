<script>
	import Constants from '$lib/_constants.js';
	import { onMount, afterUpdate } from 'svelte';
	let strings = Constants.strings;

	let page = 'home';
	let { title, url, keywords, desc, image } = Constants.pageDetails(page);

	let status = '';
	let metrics = 'icons';
	let theme = 'dim';
	let fontSize = 19;
	let colors = '253, 58, 74';
	$: replies = false;
	$: retweets = true;
	$: quotes = true;
	$: likes = true;

	afterUpdate(async () => {
		twemoji.parse(document.body);
	});

	$: tweetData = {
		data: {
			source: 'Hypefury',
			id: '1393287637147045898',
			public_metrics: { retweet_count: 1, reply_count: 2, like_count: 26, quote_count: 0 },
			text:
				"Conflicted what to do next.\n\nI'll bring out another course or two but not sure whether to do a paid newsletter or a SaaS after that.",
			author_id: '1043804966526365696',
			conversation_id: '1393287637147045898',
			created_at: '2021-05-14T19:30:33.000Z'
		},
		includes: {
			users: [
				{
					protected: false,
					public_metrics: {
						followers_count: 67467,
						following_count: 163,
						tweet_count: 15644,
						listed_count: 598
					},
					description:
						'- Coding for 20+ years \n- How to grow your Twitter following ($10 off sale, limited time): https://t.co/Vfo8lbfUGv \n- Learn JavaScript from a pro: https://t.co/7twAWWzXR2',
					location: '📩 Mailing list 👉',
					id: '1043804966526365696',
					verified: false,
					username: 'WellPaidGeek',
					created_at: '2018-09-23T10:11:11.000Z',
					profile_image_url:
						'https://pbs.twimg.com/profile_images/1056708700948303872/e1gq51Tn_normal.jpg',
					name: 'Well Paid Geek 🚀💻 JavaScript'
				}
			]
		}
	};

	$: date = new Date(tweetData.data.created_at).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
	$: time = new Date(tweetData.data.created_at).toLocaleString('en-US', {
		hour: 'numeric',
		minute: 'numeric',
		hour12: true
	});

	let updateName = async function () {
		let id = status
			.split('/')
			.filter((x) => x != '')
			.slice(-1)[0];

		const response = await fetch(
			'https://tweetdetails.catchspider2002.workers.dev/?id=' + id,
			// 'https://tweetdetails.catchspider2002.workers.dev/?id=1393287637147045898',
			{
				method: 'GET',
				// credentials: 'include',
				// mode: 'cors',
				headers: {
					'API-KEY': 'mypresharedkey',
					Accept: 'text/plain',
					'Content-Type': 'text/plain'
				}
			}
		);

		tweetData = await response.json();

		let tweetURLs;
		if (tweetData.data.entities) {
			tweetURLs = tweetData.data.text.match(/\bhttps?:\/\/\S+/gi);
			console.log(tweetURLs);
			console.log(tweetData.data.entities.urls);
		}

		console.log(JSON.stringify(tweetData));
		console.log('https://twitter.com/' + tweetData.includes.users[0].username);
		console.log(
			'https://twitter.com/' + tweetData.includes.users[0].username + '/status/' + tweetData.data.id
		);
	};

	// let promise = updateName();

	// function handleClick() {
	// 	promise = updateName();
	// }

	function nFormatter(num) {
		var si = [
			{ value: 1, symbol: '' },
			{ value: 1e3, symbol: 'K' },
			{ value: 1e6, symbol: 'M' },
			{ value: 1e9, symbol: 'G' },
			{ value: 1e12, symbol: 'T' },
			{ value: 1e15, symbol: 'P' },
			{ value: 1e18, symbol: 'E' }
		];
		var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
		var i;
		for (i = si.length - 1; i > 0; i--) {
			if (num >= si[i].value) {
				break;
			}
		}
		return (num / si[i].value).toFixed(1).replace(rx, '$1') + si[i].symbol;
	}

	let verifiedIcon =
		'<svg viewBox="0 0 24 24" class="verifiedIcon"><path d="M22.5 12.5c0-1.58-.88-2.95-2.15-3.6.16-.43.24-.9.24-1.4 0-2.21-1.71-4-3.82-4-.47 0-.92.09-1.33.25C14.82 2.42 13.5 1.5 12 1.5s-2.82.92-3.44 2.25a3.6 3.6 0 00-1.33-.25 3.91 3.91 0 00-3.82 4c0 .5.08.96.24 1.4a4.02 4.02 0 00-2.15 3.6c0 1.5.78 2.8 1.94 3.49l-.03.51c0 2.21 1.7 4 3.82 4 .47 0 .92-.09 1.33-.25A3.8 3.8 0 0012 22.5a3.8 3.8 0 003.44-2.25c.41.16.86.25 1.33.25a3.91 3.91 0 003.79-4.51 4.04 4.04 0 001.94-3.49zm-6.62-3.33l-4.33 6.5a.75.75 0 01-1.04.2l-.12-.09-2.41-2.41a.75.75 0 111.06-1.06l1.77 1.76 3.82-5.74a.75.75 0 011.25.83z"/></svg>';
	let replyIcon =
		'<svg viewBox="0 0 24 24" class="tweeticon"><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></svg>';
	let retweetIcon =
		'<svg viewBox="0 0 24 24" class="tweeticon"><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></svg>';
	let quoteTweetIcon =
		'<svg viewBox="0 0 24 24" class="tweeticon"><path d="M22.132 7.653c0-.6-.234-1.166-.66-1.59l-3.535-3.536c-.85-.85-2.333-.85-3.182 0L3.417 13.865c-.323.323-.538.732-.63 1.25l-.534 5.816c-.02.223.06.442.217.6.14.142.332.22.53.22.023 0 .046 0 .068-.003l5.884-.544c.45-.082.86-.297 1.184-.62l11.337-11.34c.425-.424.66-.99.66-1.59zm-17.954 8.69l3.476 3.476-3.825.35.348-3.826zm5.628 2.447c-.282.283-.777.284-1.06 0L5.21 15.255c-.292-.292-.292-.77 0-1.06l8.398-8.398 4.596 4.596-8.398 8.397zM20.413 8.184l-1.15 1.15-4.595-4.597 1.15-1.15c.14-.14.33-.22.53-.22s.388.08.53.22l3.535 3.536c.142.142.22.33.22.53s-.08.39-.22.53z"></path></svg>';
	let likeIcon =
		'<svg viewBox="0 0 24 24" class="tweeticon"><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></svg>';
</script>

<svelte:head>
	<script src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js" crossorigin="anonymous"></script>

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

<div class="grid grid-cols-2 gap-8 mt-16">
	<div class="controls">
		<input
			class="rounded border focus:outline-none text-base px-4 py-2 mt-2 mb-6 w-full"
			placeholder="https://twitter.com/jack/status/20"
			type="text"
			required="required"
			autocorrect="off"
			spellcheck="false"
			bind:value={status}
			on:change={updateName}
		/>

		<label class="leftColumn" for="fontSize">Font-size</label>
		<div class="grid rightColumn">
			<input id="fontSize" type="range" min="17" max="25" step="2" bind:value={fontSize} />
			<!-- <input class="uneditable hidden" bind:value={selectedPattern.stroke} readonly /> -->
		</div>

		<div class="grayText self-start">Theme</div>
		<div class="radio-toolbar radio-temp">
			<input type="radio" id="themeLight" name="theme" value="light" bind:group={theme} />
			<label class="disable-select" for="themeLight">Light</label>
			<input type="radio" id="themeDim" name="theme" value="dim" bind:group={theme} />
			<label class="disable-select" for="themeDim">Dim</label>
			<input type="radio" id="themeDark" name="theme" value="dark" bind:group={theme} />
			<label class="disable-select" for="themeDark">Dark</label>
		</div>
		<div class="grayText self-start">Metrics</div>
		<div class="radio-toolbar radio-temp">
			<input type="radio" id="metricsIcons" name="metrics" value="icons" bind:group={metrics} />
			<label class="disable-select" for="metricsIcons">Icons</label>
			<input type="radio" id="metricsText" name="metrics" value="text" bind:group={metrics} />
			<label class="disable-select" for="metricsText">Text</label>
		</div>
		<div class="grayText self-start">Metrics</div>
		<div class="radio-toolbar radio-temp">
			<input type="radio" id="metricsIcons" name="metrics" value="icons" bind:group={metrics} />
			<label class="disable-select" for="metricsIcons">Icons</label>
			<input type="radio" id="metricsText" name="metrics" value="text" bind:group={metrics} />
			<label class="disable-select" for="metricsText">Text</label>
		</div>
		<div class="grayText self-start">Metrics</div>
		<div class="radio-toolbar radio-temp">
			<input type="radio" id="metricsIcons" name="metrics" value="icons" bind:group={metrics} />
			<label class="disable-select" for="metricsIcons">Icons</label>
			<input type="radio" id="metricsText" name="metrics" value="text" bind:group={metrics} />
			<label class="disable-select" for="metricsText">Text</label>
		</div>
		<div class="grayText self-start">Metrics</div>
		<div class="radio-toolbar radio-temp">
			<input type="radio" id="metricsIcons" name="metrics" value="icons" bind:group={metrics} />
			<label class="disable-select" for="metricsIcons">Icons</label>
			<input type="radio" id="metricsText" name="metrics" value="text" bind:group={metrics} />
			<label class="disable-select" for="metricsText">Text</label>
		</div>

		<div class="metricOptions">
			<label class="hideCheckbox"> <input type="checkbox" bind:checked={replies} /> Replies </label>
			<label class="hideCheckbox">
				<input type="checkbox" bind:checked={retweets} /> Retweets
			</label>
			<label class="hideCheckbox">
				<input type="checkbox" bind:checked={quotes} /> Quote Tweets
			</label>
			<label class="hideCheckbox"> <input type="checkbox" bind:checked={likes} /> Likes </label>
		</div>

		<div class="grayText self-start">Color</div>
		<div class="radio-toolbar radio-color">
			<input
				type="radio"
				id="color1"
				name="tableColor"
				value="var(--color1)"
				bind:group={colors}
			/><label id="color1Label" class="disable-select" title="Red" for="color1" /><input
				type="radio"
				id="color2"
				name="tableColor"
				value="var(--color2)"
				bind:group={colors}
			/><label id="color2Label" class="disable-select" title="Orange" for="color2" /><input
				type="radio"
				id="color3"
				name="tableColor"
				value="var(--color3)"
				bind:group={colors}
			/><label id="color3Label" class="disable-select" title="Yellow" for="color3" /><input
				type="radio"
				id="color4"
				name="tableColor"
				value="var(--color4)"
				bind:group={colors}
			/><label id="color4Label" class="disable-select" title="Brown" for="color4" /><input
				type="radio"
				id="color5"
				name="tableColor"
				value="var(--color5)"
				bind:group={colors}
			/><label id="color5Label" class="disable-select" title="Lime" for="color5" /><input
				type="radio"
				id="color6"
				name="tableColor"
				value="var(--color6)"
				bind:group={colors}
			/><label id="color6Label" class="disable-select" title="Green" for="color6" /><input
				type="radio"
				id="color7"
				name="tableColor"
				value="var(--color7)"
				bind:group={colors}
			/><label id="color7Label" class="disable-select" title="Cyan" for="color7" /><input
				type="radio"
				id="color8"
				name="tableColor"
				value="var(--color8)"
				bind:group={colors}
			/><label id="color8Label" class="disable-select" title="Blue" for="color8" /><input
				type="radio"
				id="color9"
				name="tableColor"
				value="var(--color9)"
				bind:group={colors}
			/><label id="color9Label" class="disable-select" title="Purple" for="color9" /><input
				type="radio"
				id="color10"
				name="tableColor"
				value="var(--color10)"
				bind:group={colors}
			/><label id="color10Label" class="disable-select" title="Pink" for="color10" />
		</div>
	</div>

	<div class="preview sticky top-32" style="--colors: {colors};">
		<!-- {#await promise} -->
		<div class="body">
			<div data-twitTheme={theme} class="card" style="font-size:{fontSize}px">
				<a class="header" href={'https://twitter.com/' + tweetData.includes.users[0].username}>
					<img
						alt=""
						style="width:48px;height:48px;"
						src={tweetData.includes.users[0].profile_image_url.replace('normal', '400x400')}
					/>
					<div class="header-text">
						<div class="userGrid">
							<span class="displayName">{tweetData.includes.users[0].name}</span>

							{#if tweetData.includes.users[0].verified} @{@html verifiedIcon}{/if}
						</div>
						<div class="username">@{tweetData.includes.users[0].username}</div>
					</div>
				</a>
				<div class="content">
					{@html tweetData.data.text
						.replace(/\n\n/g, '<br /><br />')
						.replace(
							/#(\w+)/g,
							'<a target="_blank" rel="noopener noreferrer" class="link" href="https://twitter.com/hashtag/$1">#$1</a>'
						)
						.replace(
							/@(\w+)/g,
							'<a target="_blank" rel="noopener noreferrer" class="link" href="https://twitter.com/$1">@$1</a>'
						)}
				</div>
				<div class="details">
					<div>{time}</div>
					<div>·</div>
					<div>{date}</div>
					{#if tweetData.includes.places}
						<div>·</div>
						<div>{tweetData.includes.places[0].full_name}</div>
					{/if}
					<div>·</div>
					<div>{tweetData.data.source}</div>
				</div>
				{#if metrics == 'icons'}
					<div class="metrics">
						{#if replies}
							<div class="iconGrid" title="Replies">
								{@html replyIcon}
								<div>{nFormatter(tweetData.data.public_metrics.reply_count)}</div>
							</div>
						{/if}
						{#if retweets}
							<div class="iconGrid" title="Retweets">
								{@html retweetIcon}
								<div>{nFormatter(tweetData.data.public_metrics.retweet_count)}</div>
							</div>
						{/if}
						{#if quotes}
							<div class="iconGrid" title="Quote Tweets">
								{@html quoteTweetIcon}
								<div>{nFormatter(tweetData.data.public_metrics.quote_count)}</div>
							</div>
						{/if}
						{#if likes}
							<div class="iconGrid" title="Likes">
								{@html likeIcon}
								<div>{nFormatter(tweetData.data.public_metrics.like_count)}</div>
							</div>
						{/if}
					</div>
				{:else}
					<div class="metrics-alt">
						{#if replies}
							<div class="textGrid">
								<div class="metrics-bold">
									{nFormatter(tweetData.data.public_metrics.reply_count)}
								</div>
								Replies
							</div>
						{/if}
						{#if retweets}
							<div class="textGrid">
								<div class="metrics-bold">
									{nFormatter(tweetData.data.public_metrics.retweet_count)}
								</div>
								Retweets
							</div>
						{/if}
						{#if quotes}
							<div class="textGrid">
								<div class="metrics-bold">
									{nFormatter(tweetData.data.public_metrics.quote_count)}
								</div>
								Quote Tweets
							</div>
						{/if}
						{#if likes}
							<div class="textGrid">
								<div class="metrics-bold">
									{nFormatter(tweetData.data.public_metrics.like_count)}
								</div>
								Likes
							</div>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<style style lang="postcss">
	:root {
		--text-color: rgb(219, 216, 212);
		--alt-color: rgb(162, 154, 142);
		--border-color: rgb(62, 67, 70);

		--color1: 253, 58, 74; /* Red */
		--color2: 245, 128, 37; /* Orange */
		--color3: 255, 167, 0; /* Yellow */
		--color4: 123, 113, 81; /* Brown */
		--color5: 91, 170, 9; /* Lime */
		--color6: 26, 152, 90; /* Green */
		--color7: 59, 168, 221; /* Cyan */
		--color8: 0, 120, 215; /* Blue */
		--color9: 139, 102, 204; /* Purple */
		--color10: 228, 27, 144; /* Pink */
		--blockquote-color: 103, 106, 109;
		--circle: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" transform="translate(0,7)" viewBox="0 0 24 31" stroke-width="2" stroke="rgba(103, 106, 109, 0.5)" fill="none" stroke-linecap="round" stroke-linejoin="round"%3E%3Ccircle cx="12" cy="12" r="9" /%3E%3C/svg%3E');
		--white-check: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" transform="translate(0,7)" viewBox="0 0 24 31" stroke-width="2" stroke="rgb(234, 234, 234)" fill="none" stroke-linecap="round" stroke-linejoin="round"%3E%3Ccircle cx="12" cy="12" r="9" /%3E%3Cpath d="M9 12l2 2l4 -4" /%3E%3C/svg%3E');
	}

	:global([data-theme='dark']) {
		--blockquote-color: 148, 146, 143;
		--circle: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" transform="translate(0,7)" viewBox="0 0 24 31" stroke-width="2" stroke="rgba(148, 146, 143, 0.5)" fill="none" stroke-linecap="round" stroke-linejoin="round"%3E%3Ccircle cx="12" cy="12" r="9" /%3E%3C/svg%3E');
	}

	[data-twitTheme='light'] {
		--card-background: rgb(255, 255, 255);
		--card-text: rgb(15, 20, 25);
		--card-gray: rgb(91, 112, 131);
		--card-divider: rgb(213, 220, 230);
		--card-verified: rgb(29, 161, 242);
	}
	[data-twitTheme='dim'] {
		--card-background: rgb(21, 32, 43);
		--card-text: rgb(255, 255, 255);
		--card-gray: rgb(136, 153, 166);
		--card-divider: rgb(56, 68, 77);
		--card-verified: rgb(255, 255, 255);
	}
	[data-twitTheme='dark'] {
		--card-background: rgb(0, 0, 0);
		--card-text: rgb(217, 217, 217);
		--card-gray: rgb(110, 118, 125);
		--card-divider: rgb(47, 51, 54);
		--card-verified: rgb(217, 217, 217);
	}
	.controls {
		color: var(--text-color);
		display: grid;
		grid-auto-flow: row;
		gap: 1em;
		margin-top: 6px;
	}

	.preview {
		background-color: var(--card-bg);
		font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
			'Apple Color Emoji', 'Segoe UI Emoji';
		width: 580px;
		height: 580px;
		display: grid;
	}
	.body {
		display: grid;
		/* place-content: center; */
		align-items: center;
	}
	.card {
		padding: 10px 15px 5px;
		background-color: var(--card-background);
		color: var(--card-text);
	}
	.header {
		display: grid;
		grid-auto-flow: column;
		place-content: start;
		gap: 8px;
		padding-bottom: 10px;
	}
	.header img {
		border-radius: 9999px;
	}
	.header-text {
		display: grid;
		grid-auto-flow: row;
		font-weight: 700;
	}
	.userGrid {
		font-size: 0.79em;
	}
	.displayName {
		display: flex;
	}
	.displayName:hover {
		color: var(--card-text);
		text-decoration: underline;
	}
	.username {
		font-size: 0.737em;
		font-weight: 400;
		color: var(--card-gray);
	}
	.content {
		font-size: 1em;
	}
	.details {
		display: grid;
		grid-auto-flow: column;
		place-content: start;
		gap: 4px;
		padding: 15px 0;
		font-size: 0.842em;
		color: var(--card-gray);
	}
	.metrics,
	.metrics-alt {
		display: grid;
		grid-auto-flow: column;
		place-content: start;
		gap: 2.133em;
		border-top: 1px solid var(--card-divider);
		padding: 10px 0;
		font-size: 0.79em;
		color: var(--card-gray);
	}
	.iconGrid,
	.textGrid,
	.userGrid {
		display: grid;
		grid-auto-flow: column;
		place-content: start;
		align-items: end;
	}
	.iconGrid,
	.userGrid {
		gap: 8px;
	}
	.textGrid {
		gap: 4px;
	}

	:global(.tweeticon) {
		fill: currentColor;
		stroke: none;
		height: 1.32em;
	}
	:global(.verifiedIcon) {
		fill: var(--card-verified);
		height: 1.32em;
	}
	.metrics-bold {
		font-weight: 700;
		color: var(--card-text);
	}
	:global(img.emoji) {
		height: 27.6px;
		width: 27.6px;
		margin: 0 0.1em;
		vertical-align: -0.2em;
	}
	:global(.link) {
		color: rgb(var(--colors));
	}
	:global(.link:hover) {
		color: rgb(var(--colors));
		text-decoration: underline;
	}
	.metricOptions {
		display: grid;
		grid-auto-flow: column;
		gap: 1em;
	}

	.radio-toolbar {
		display: grid;
		gap: 0.5em;
		grid-template-columns: repeat(5, auto);
		place-content: start;
	}

	.radio-toolbar input[type='radio'] {
		opacity: 0;
		position: fixed;
		width: 0;
	}

	.radio-toolbar label {
		display: inline-grid;
		gap: 0.5em;
		grid-auto-flow: column;
		padding: 0.5rem 0.75rem;
		place-items: center;
		font-size: 1rem;
		background-color: rgba(var(--blockquote-color), 0.3);
		color: rgba(var(--blockquote-color), 0.5);
		border-radius: var(--border-radius);
		cursor: pointer;
	}

	.radio-temp label {
		justify-self: start;
	}

	.radio-toolbar label::before {
		content: var(--circle);
		color: currentColor;
	}

	.radio-toolbar label:hover {
		border-color: rgba(var(--blockquote-color), 0.7);
		color: rgba(var(--blockquote-color), 0.7);
	}

	.radio-toolbar input[type='radio']:focus + label {
		border-color: rgb(216, 216, 216);
	}

	.radio-toolbar input[type='radio']:checked + label {
		color: rgb(255, 255, 255);
		background-color: var(--accent-color);
	}

	.radio-toolbar input[type='radio']:checked + label::before {
		content: var(--white-check);
		color: var(--fg-color);
	}

	#color1Label {
		background-color: rgb(var(--color1));
	}

	#color2Label {
		background-color: rgb(var(--color2));
	}

	#color3Label {
		background-color: rgb(var(--color3));
	}

	#color4Label {
		background-color: rgb(var(--color4));
	}

	#color5Label {
		background-color: rgb(var(--color5));
	}

	#color6Label {
		background-color: rgb(var(--color6));
	}

	#color7Label {
		background-color: rgb(var(--color7));
	}

	#color8Label {
		background-color: rgb(var(--color8));
	}

	#color9Label {
		background-color: rgb(var(--color9));
	}

	#color10Label {
		background-color: rgb(var(--color10));
	}
</style>
