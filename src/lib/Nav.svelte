<script>
	import Constants from './_constants.js';
	let strings = Constants.strings;
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { themeStore } from '../routes/stores.js';
	let dark = Constants.icons.dark;
	let light = Constants.icons.light;
	let downChevronIcon = Constants.icons.downChevronIcon;
	// let toggleIcon =Constants.icons.toggleIcon
	let theme = dark;
	let defaultNewTheme;
	
	onMount(async () => {
		defaultNewTheme = localStorage.getItem('defaultNewTheme');

		if (!defaultNewTheme) {
			defaultNewTheme = 'dark';
			localStorage.setItem('defaultNewTheme', defaultNewTheme);
		}
		document.documentElement.setAttribute('data-theme', defaultNewTheme);
		themeStore.set(defaultNewTheme);
		// userAction();
	});

	function changeTheme() {
		// theme = theme === dark ? light : dark;
		console.log('changeTheme: ' + defaultNewTheme);
		if (defaultNewTheme === 'dark') {
			theme = light;
			defaultNewTheme = 'light';
		} else {
			theme = dark;
			defaultNewTheme = 'dark';
		}
		localStorage.setItem('defaultNewTheme', defaultNewTheme);
		document.documentElement.setAttribute('data-theme', defaultNewTheme);
		themeStore.set(defaultNewTheme);
	}
</script>

<nav>
	<a id="logo" href="." aria-label="Home"
		>{@html Constants.icons.blackLogo}
		<h1 class="truncate">Saas</h1></a
	>

	<input type="checkbox" id="drop" />
	<ul>
		<!-- <li><a aria-current={segment === "pricing" ? "page" : undefined} href="pricing"><span>Pricing</span></a></li> -->
		<li><a sveltekit:prefetch href="pricing"><span>Pricing</span></a></li>
		<li><a sveltekit:prefetch href="tweetshot"><span>Tweetshot</span></a></li>
		<li>
			<label for="drop-1" class="toggle"><span>Products</span>{@html downChevronIcon} </label>
			<a id="tablesLink"><span>Tables</span>{@html downChevronIcon}</a><input
				type="checkbox"
				id="drop-1"
			/>
			<ul>
				<li><a sveltekit:prefetch class="tablesList" href="details">Details</a></li>
				<li><a sveltekit:prefetch class="tablesList" href="more-details">More Details</a></li>
			</ul>
		</li>
	</ul>

	<!-- <a aria-current={segment === "signin" ? "page" : undefined} href="signin"><span>Sign In</span></a> -->
	<!-- <a sveltekit:prefetch href={strings.appPage + '/signup?plan=pro'}><span>Sign In</span></a> -->

	<a href={strings.appPage + '/signup'}><span>Sign Up</span></a>
	<a href={strings.appPage + '/login'}><span>Log In</span></a>
	<a href="#a" on:click={() => changeTheme()}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 512 512"
			stroke="currentColor"
			fill="currentColor"
		>
			{#if theme === light}
				<path transition:fly={{ y: 200, duration: 600 }} d={theme} />
			{:else}
				<path transition:fly={{ y: -200, duration: 600 }} d={theme} />
			{/if}
		</svg>
	</a>
	<label for="drop" class="toggle burger">{@html Constants.icons.toggleIcon}</label>
</nav>

<style>
	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	a:hover {
		color: var(--gray-600);
	}

	/* 	Navbar */
	.toggle,
	[id^='drop'] {
		display: none;
	}

	nav {
		margin: 0;
		padding: 0;
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		z-index: 3;
		display: grid;
		font-weight: 600;
		grid-template-columns: auto 1fr auto auto auto;
		letter-spacing: 0.5px;
		align-items: center;
		background-color: #d6ed17;
		color: #2e2e2e;
	}
	nav h1 {
		font-size: 1.2em;
		font-weight: 600;
		margin: 0 0 3px 5px;
	}

	#logo {
		display: inline-grid;
		grid-auto-flow: column;
		align-items: center;
		color: #000;
	}

	nav ul {
		/* float: right; */
		padding: 0;
		margin: 0;
		list-style: none;
		position: relative;
		display: grid;
		grid-auto-flow: column;
		gap: 0.25em;
		justify-content: start;
		align-items: center;
	}

	nav ul li {
		margin: 0px;
		display: inline-block;
	}

	nav a {
		display: grid;
		padding: 0.25em 1em;
		text-decoration: none;
		justify-content: end;
		border-bottom: 2px solid transparent;
	}
	nav ul li a {
		display: grid;
		grid-auto-flow: column;
		padding: 12px 15px;
		gap: 0.75em;
		cursor: pointer;
		place-content: start;
		align-items: center;
	}
	nav ul li a span,
	nav a span,
	#tablesLink span,
	.tablesList {
		font-size: 0.9em;
	}

	nav ul ul {
		display: none;
		position: absolute;
	}

	nav ul li:hover > ul {
		display: inherit;
	}

	nav ul ul li {
		min-width: 170px;
		/* float: none; */
		display: list-item;
		position: relative;
		/* background-color: var(--darker-color-50); */
		background-color: #d6ed17;
	}

	nav ul ul ul li {
		position: relative;
		top: -60px;
		left: 170px;
	}

	nav ul ul ul a {
		background-color: transparent;
	}

	nav ul li ul li a:hover,
	nav ul li a:hover,
	.toggle:hover {
		/* background-color: rgba(255, 255, 255, 0.1); */
	}

	/* Media Queries
  --------------------------------------------- */

	@media all and (max-width: 768px) {
		nav {
			display: grid;
			grid-template-columns: auto 1fr auto auto auto;
			z-index: 3;
		}

		nav ul {
			display: none;
			grid-row-start: 2;
		}

		.toggle + a {
			display: none;
		}

		.toggle {
			display: grid;
			grid-template-columns: auto auto 1fr;
			padding: 13px 15px;
			gap: 0.75em;
			color: #2e2e2e;
			margin-left: auto;
			align-items: center;
		}

		.toggle span {
			font-size: 0.9em;
		}

		.burger {
			gap: 0;
		}

		[id^='drop']:checked + ul {
			display: block;
			grid-column: 1/6;
		}

		nav ul li {
			display: block;
			width: 100%;
		}
		nav ul li a {
			margin: 0;
		}

		nav ul ul .toggle,
		nav ul ul a {
			padding: 0 40px;
		}

		nav ul ul ul a {
			padding: 0 80px;
		}

		nav ul li ul li .toggle,
		nav ul ul a,
		nav ul ul ul a {
			padding: 14px 70px;
		}

		nav ul ul {
			/* float: none; */
			position: static;
			color: #ffffff;
		}

		nav ul ul li:hover > ul,
		nav ul li:hover > ul {
			display: none;
		}

		nav ul ul li {
			display: block;
			width: 100%;
		}

		nav ul ul ul li {
			position: static;
		}
	}

	@media all and (max-width: 320px) {
		nav ul li {
			display: block;
			width: 94%;
		}
	}
</style>
