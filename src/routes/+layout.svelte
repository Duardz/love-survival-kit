<!-- src/routes/+layout.svelte -->
<script>
	// Layout component - no imports needed
</script>

<svelte:head>
	<title>Love Survival Kit - Train for real relationships!</title>
	<meta name="description" content="A humorous relationship survival app featuring The BF/GF Trials quiz and more!" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	
	<!-- Open Graph for social sharing -->
	<meta property="og:title" content="Love Survival Kit" />
	<meta property="og:description" content="Can you survive The BF/GF Trials? Test your relationship skills!" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/og-image.png" />
	
	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Love Survival Kit" />
	<meta name="twitter:description" content="Can you survive The BF/GF Trials? Test your relationship skills!" />
</svelte:head>

<main>
	<slot />
</main>

<style>
	:global(html) {
		height: 100%;
	}
	
	:global(body) {
		margin: 0;
		min-height: 100%;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}
	
	:global(button) {
		font-family: inherit;
	}
	
	:global(h1, h2, h3, h4, h5, h6) {
		margin: 0;
		font-weight: 600;
	}
	
	:global(p) {
		line-height: 1.6;
	}
	
	main {
		min-height: 100vh;
	}
</style>