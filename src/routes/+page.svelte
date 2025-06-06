<!-- src/routes/+page.svelte -->
<script>
	import { onMount } from 'svelte';
	
	let showEmoji = false;
	
	onMount(() => {
		showEmoji = true;
	});
	
	const survivalTools = [
		{
			title: "The BF/GF Trials",
			description: "Can you keep the anger meter down? Spoiler: No.",
			emoji: "🎮",
			status: "NEW",
			route: "/bf-gf-trials"
		},
		{
			title: "Text Decoder",
			description: "What she says vs. what she means",
			emoji: "📱",
			status: "COMING SOON",
			route: null
		},
		{
			title: "Gift Panic Mode",
			description: "Emergency gift ideas in 30 seconds",
			emoji: "🎁",
			status: "COMING SOON",
			route: null
		},
		{
			title: "Date Night Roulette",
			description: "End the 'where to eat' loop forever",
			emoji: "🎰",
			status: "COMING SOON",
			route: null
		}
	];
</script>

<div class="container">
	<header>
		<h1 class="title">
			<span class="emoji" class:show={showEmoji}>💘</span>
			Love Survival Kit
			<span class="emoji" class:show={showEmoji}>🛟</span>
		</h1>
		<p class="tagline">Train for real relationships in a safe environment™</p>
	</header>
	
	<main>
		<div class="warning-box">
			<p>⚠️ <strong>WARNING:</strong> No actual relationships were harmed in the making of this app</p>
		</div>
		
		<h2>Choose Your Survival Tool:</h2>
		
		<div class="tools-grid">
			{#each survivalTools as tool}
				<div class="tool-card" class:coming-soon={!tool.route}>
					{#if tool.route}
						<a href={tool.route} class="tool-link">
							<div class="tool-emoji">{tool.emoji}</div>
							<h3>{tool.title}</h3>
							<p>{tool.description}</p>
							{#if tool.status === "NEW"}
								<span class="badge new">NEW!</span>
							{/if}
						</a>
					{:else}
						<div class="tool-content">
							<div class="tool-emoji">{tool.emoji}</div>
							<h3>{tool.title}</h3>
							<p>{tool.description}</p>
							<span class="badge coming-soon">COMING SOON</span>
						</div>
					{/if}
				</div>
			{/each}
		</div>
		
		<div class="stats">
			<h3>Global Relationship Stats:</h3>
			<div class="stat-grid">
				<div class="stat">
					<div class="stat-number">0</div>
					<div class="stat-label">Relationships Saved</div>
				</div>
				<div class="stat">
					<div class="stat-number">1,247</div>
					<div class="stat-label">Anger Meters Maxed</div>
				</div>
				<div class="stat">
					<div class="stat-number">∞</div>
					<div class="stat-label">Wrong Answers Given</div>
				</div>
			</div>
		</div>
	</main>
	
	<footer>
		<p>Remember: In relationships, you're not always wrong... but you're never right. 😅</p>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		min-height: 100vh;
		color: #333;
	}
	
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}
	
	header {
		text-align: center;
		margin-bottom: 3rem;
	}
	
	.title {
		font-size: 3rem;
		color: white;
		margin-bottom: 0.5rem;
		text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}
	
	.emoji {
		display: inline-block;
		opacity: 0;
		transform: scale(0) rotate(0deg);
		transition: all 0.5s ease;
	}
	
	.emoji.show {
		opacity: 1;
		transform: scale(1) rotate(360deg);
	}
	
	.tagline {
		font-size: 1.2rem;
		color: rgba(255,255,255,0.9);
		font-style: italic;
	}
	
	.warning-box {
		background: #fff3cd;
		border: 2px solid #ffeeba;
		border-radius: 8px;
		padding: 1rem;
		margin-bottom: 2rem;
		text-align: center;
		box-shadow: 0 4px 6px rgba(0,0,0,0.1);
	}
	
	.warning-box p {
		margin: 0;
		color: #856404;
	}
	
	h2 {
		color: white;
		text-align: center;
		font-size: 2rem;
		margin-bottom: 2rem;
		text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
	}
	
	.tools-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		margin-bottom: 3rem;
	}
	
	.tool-card {
		background: white;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 4px 6px rgba(0,0,0,0.1);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
		position: relative;
	}
	
	.tool-card:hover:not(.coming-soon) {
		transform: translateY(-4px);
		box-shadow: 0 8px 12px rgba(0,0,0,0.2);
	}
	
	.tool-card.coming-soon {
		opacity: 0.7;
		cursor: not-allowed;
	}
	
	.tool-link {
		display: block;
		padding: 2rem;
		text-decoration: none;
		color: inherit;
	}
	
	.tool-content {
		padding: 2rem;
	}
	
	.tool-emoji {
		font-size: 3rem;
		margin-bottom: 1rem;
		text-align: center;
	}
	
	.tool-card h3 {
		margin: 0 0 0.5rem 0;
		font-size: 1.5rem;
		color: #333;
	}
	
	.tool-card p {
		margin: 0;
		color: #666;
		line-height: 1.5;
	}
	
	.badge {
		position: absolute;
		top: 1rem;
		right: 1rem;
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.75rem;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	
	.badge.new {
		background: #28a745;
		color: white;
	}
	
	.badge.coming-soon {
		background: #6c757d;
		color: white;
	}
	
	.stats {
		background: rgba(255,255,255,0.95);
		border-radius: 12px;
		padding: 2rem;
		margin-bottom: 2rem;
		box-shadow: 0 4px 6px rgba(0,0,0,0.1);
	}
	
	.stats h3 {
		text-align: center;
		color: #333;
		margin-bottom: 1.5rem;
	}
	
	.stat-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 2rem;
		text-align: center;
	}
	
	.stat-number {
		font-size: 2.5rem;
		font-weight: bold;
		color: #764ba2;
		margin-bottom: 0.5rem;
	}
	
	.stat-label {
		color: #666;
		font-size: 0.9rem;
	}
	
	footer {
		text-align: center;
		color: white;
		margin-top: 3rem;
		font-size: 1.1rem;
		text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
	}
	
	@media (max-width: 768px) {
		.title {
			font-size: 2rem;
		}
		
		.tools-grid {
			grid-template-columns: 1fr;
		}
		
		.container {
			padding: 1rem;
		}
	}
</style>