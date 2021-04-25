const strings = {
	website: "https://pattern.monster",
	// appPage: "https://sapper-supabase-auth.vercel.app",
	// landingPage: "https://saas-landing-page.vercel.app",
	appPage: "http://localhost:3000",
	landingPage: "http://localhost:4000",
	title: "Pattern Monster",
	description: "A simple online pattern generator to create repeatable SVG patterns.",
	description2: "Speed up your website without compromising on image quality.",
	description3: "Perfect for website backgrounds, apparel, branding, packaging design and more.",
	keywords: "svg patterns, patterns, svg backgrounds, vector wallpaper, pattern generator, pattern maker",
	// versions: [
	// 	{
	// 		lang: 'en',
	// 		website: 'https://pattern.monster'
	// 	},
	// 	{
	// 		lang: 'de',
	// 		website: 'https://de.pattern.monster'
	// 	},
	// 	{
	// 		lang: 'pl',
	// 		website: 'https://pl.pattern.monster'
	// 	}
	// ],
	pages: [
	  {
		page: "index",
		title: "SVG Pattern Generator",
		keywords: "",
		description: "",
		image: "",
	  },
	  {
		page: "changelog",
		title: "Changelog",
		keywords: "changelog",
		description: "Changelog for Pattern Monster.",
		image: "",
	  },
	  {
		page: "pricing",
		title: "Pricing",
		keywords: "pricing",
		description: "Pricing Details for Pattern Monster.",
		image: "https://pattern.monster/newImage.png",
	  },
	],
  };
  
  const pageDetails = (page) => {
	let pageValues =
	  strings.pages.filter((currentPage) => currentPage.page === page)[0] || strings.pages.filter((currentPage) => currentPage.page === "index")[0];
  
	let website = strings.website;
	let title = strings.title + " - " + strings.pages[0].title;
	let url = website;
	let keywords = strings.keywords;
	let desc = strings.description + " " + strings.description3;
	let image = pageValues.image == "" ? website + "/TwitterBG2.png" : pageValues.image;
	if (page != "index") {
	  title = pageValues.title + " - " + strings.title + " | " + strings.pages[0].title;
	  url = website + "/" + page + "/";
	  desc = pageValues.description + " " + strings.description + " " + strings.description3;
	  keywords = pageValues.keywords + ", " + strings.keywords;
	}
  
	return { title, url, keywords, desc, image };
  };
  
  let iconHeader = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="';
  let iconFooter = '"/></svg>';
  
  let logoHeader = "<svg xmlns='http://www.w3.org/2000/svg' stroke='none' fill='currentColor' class='w-10 h-10 p-1 ";
  let logoFooter =
	" rounded-full' viewBox='0 0 36 36'><path d='M31.42 9.09l-13-6a1 1 0 00-.84 0l-13 6A1 1 0 004 10v17a1 1 0 00.58.91l13 6a1 1 0 00.84 0l13-6A1 1 0 0032 27V10a1 1 0 00-.58-.91zM18 14.9L7.39 10 18 5.1 28.61 10zm12 11.46l-11 5.08v-14.8l11-5.08z' /></svg>";
  
  let accentLogo = logoHeader + "accent-text" + logoFooter;
  let whiteLogo = logoHeader + "white-text" + logoFooter;
  let blackLogo = logoHeader + "black-text" + logoFooter;
  
  const icons = {
	accentLogo: accentLogo,
	whiteLogo: whiteLogo,
	blackLogo: blackLogo,
	github:
	  iconHeader +
	  "M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" +
	  iconFooter,
	twitter:
	  iconHeader +
	  "M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" +
	  iconFooter,
	instagram:
	  iconHeader +
	  "M16.5 7.5v.001M15 12a3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3 3 3 0 013 3zM8 4h8c2.216 0 4 1.784 4 4v8c0 2.216-1.784 4-4 4H8c-2.216 0-4-1.784-4-4V8c0-2.216 1.784-4 4-4z" +
	  iconFooter,
	pinterest:
	  iconHeader +
	  "M21 12a9 9 0 01-9 9 9 9 0 01-9-9 9 9 0 019-9 9 9 0 019 9zm-10.3 2c.44 1.26 1.43 2 2.55 2 2.07 0 3.75-1.55 3.75-4a5 5 0 10-9.7 1.7M8 20l4-9" +
	  iconFooter,
	facebook: iconHeader + "M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" + iconFooter,
	trending: "M14 7h7v7M3 17l6-6 4 4 8-8",
	license: "M9 11h4M9 7h4m2 14H6a3 3 0 01-3-3v-1h10v2a2 2 0 004 0V5a2 2 0 112 2h-2m2-4H8a3 3 0 00-3 3v11",
	release: "M11 9a2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2zm0-6l9 9a1.5 1.5 0 010 2l-6 6a1.5 1.5 0 01-2 0l-9-9V7a4 4 0 014-4h4",
	download: "M9 14l3 3 3-3m-3-3v6m5 4H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2zM14 3v4a1 1 0 001 1h4",
	search: "M10 3a7 7 0 00-7 7 7 7 0 007 7 7 7 0 007-7 7 7 0 00-7-7zm5 12l6 6-6-6z",
	cancel: "M6 6l12 12m0-12L6 18",
	dark:
	  "M406.17 372.075c-10 2-21 3-31 3-35 0-67-9-97-26-29-17-52-40-70-70-17-29-25-61-25-96 0-37 10-71 29-102-38 11-69 33-93 65-25 32-37 69-37 110 0 25 5 48 15 71 9 23 22 42 39 58 16 17 35 30 58 39 23 10 46 15 71 15 27 0 53-6 78-18 25-11 46-28 63-49zm58-24c-18 39-45 70-81 93s-75 34-118 34c-30 0-58-5-85-17s-51-27-70-47c-20-19-35-43-47-70s-17-55-17-85c0-29 5-57 16-84 11-26 26-49 45-69 18-19 41-35 67-47 26-11 54-18 83-19 8-1 14 3 17 11 4 8 2 15-4 21-17 14-29 32-38 51-8 20-13 41-13 63 0 28 7 54 21 78s33 43 57 56c24 14 50 21 78 21 22 0 44-5 65-14 8-4 15-2 20 3 3 3 5 6 5 10 1 4 1 8-1 11z",
	light:
	  "M384 256c0 35-14 67-37 91-24 23-56 37-91 37-35 0-67-14-91-37-23-24-37-56-37-91 0-35 14-67 37-91 24-23 56-37 91-37 35 0 67 14 91 37 23 24 37 56 37 91z m-43 0c0-24-9-45-25-60-15-16-36-25-60-25-24 0-45 9-60 25-16 15-25 36-25 60 0 24 9 45 25 60 15 16 36 25 60 25 24 0 45-9 60-25 16-15 25-36 25-60z m-106 235l0-43c0-12 9-21 21-21 12 0 21 9 21 21l0 43c0 11-9 21-21 21-12 0-21-10-21-21z m0-427l0-43c0-11 9-21 21-21 12 0 21 10 21 21l0 43c0 12-9 21-21 21-12 0-21-9-21-21z m-160 343l30-30c9-9 22-9 30 0 9 8 9 21 0 30l-30 30c-8 8-22 8-30 0-8-8-8-22 0-30z m302-302l30-30c8-8 22-8 30 0 8 8 8 22 0 30l-30 30c-9 9-22 9-30 0-9-8-9-21 0-30z m-356 130l43 0c12 0 21 9 21 21 0 12-9 21-21 21l-43 0c-11 0-21-9-21-21 0-12 10-21 21-21z m427 0l43 0c11 0 21 9 21 21 0 12-10 21-21 21l-43 0c-12 0-21-9-21-21 0-12 9-21 21-21z m-343-160l30 30c9 9 9 22 0 30-8 9-21 9-30 0l-30-30c-8-8-8-22 0-30 8-8 22-8 30 0z m302 302l30 30c8 8 8 22 0 30-8 8-22 8-30 0l-30-30c-9-9-9-22 0-30 8-9 21-9 30 0z",
	downChevronIcon:
	  '<svg xmlns="http://www.w3.org/2000/svg" width=".75em" height=".75em" viewBox="4 4 15 15" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9" /></svg>',
	toggleIcon:
	  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" /></svg>',
	externalLinkIcon:
	  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" /><line x1="10" y1="14" x2="20" y2="4" /><polyline points="15 4 20 4 20 9" /></svg>',
	noIcon:
	  '<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" class="w-5 h-5" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"></path></svg>',
	yesIcon:
	  '<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>',
	rightArrowIcon:
	  '<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>',
  };
  
  let localizedDate = (date_val) => (date_val && date_val !== "null" ? new Date(date_val * 1000).toISOString() : "");
  
  export default {
	strings,
	pageDetails,
	icons,
	localizedDate,
  };
  