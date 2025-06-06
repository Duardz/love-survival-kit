<!-- src/lib/components/QuizPreloader.svelte -->
<script>
	import { onMount } from 'svelte';
	
	export let onReady = () => {};
	
	let isReady = false;
	
	onMount(() => {
		// Preload all necessary assets
		Promise.all([
			// Ensure fonts are loaded
			document.fonts.ready,
			// Small delay to ensure smooth start
			new Promise(resolve => setTimeout(resolve, 100))
		]).then(() => {
			isReady = true;
			onReady();
		});
	});
</script>

{#if !isReady}
	<div class="preloader">
		<div class="spinner"></div>
		<p>Loading survival kit...</p>
	</div>
{/if}

<style>
	.preloader {
		position: fixed;
		inset: 0;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 9999;
		color: white;
	}
	
	.spinner {
		width: 50px;
		height: 50px;
		border: 3px solid rgba(255, 255, 255, 0.3);
		border-top-color: white;
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
		margin-bottom: 1rem;
	}
	
	@keyframes spin {
		to { transform: rotate(360deg); }
	}
	
	.preloader p {
		font-size: 1.1rem;
		opacity: 0.9;
	}
</style>