<!-- src/routes/+page.svelte -->
<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	
	let showContent = false;
	
	onMount(() => {
		showContent = true;
	});
	
	const survivalTools = [
		{
			title: "The BF/GF Trials",
			description: "Can you keep the anger meter down? Spoiler: No.",
			emoji: "🎮",
			status: "PLAYABLE",
			route: "/bf-gf-trials",
			difficulty: "Impossible"
		},
		{
			title: "Text Decoder",
			description: "What she says vs. what she means",
			emoji: "📱",
			status: "COMING SOON",
			route: null,
			difficulty: "Expert"
		},
		{
			title: "Gift Panic Mode",
			description: "Emergency gift ideas in 30 seconds",
			emoji: "🎁",
			status: "COMING SOON",
			route: null,
			difficulty: "Hard"
		},
		{
			title: "Date Night Roulette",
			description: "End the 'where to eat' loop forever",
			emoji: "🎰",
			status: "COMING SOON",
			route: null,
			difficulty: "Medium"
		}
	];
	
	const stats = [
		{ value: "0", label: "Relationships Saved" },
		{ value: "2,847", label: "Anger Meters Maxed" },
		{ value: "∞", label: "Wrong Answers Given" },
	];
</script>

<div class="homepage">
	<!-- Hero Section -->
	<section class="hero">
		<div class="container">
			{#if showContent}
				<div class="hero-content" in:fade={{ duration: 600 }}>
					<div class="hero-badge" in:fly={{ y: 20, duration: 400 }}>
						💘 Relationship Training Simulator 💘
					</div>
					<h1 class="hero-title" in:fly={{ y: 20, duration: 400, delay: 100 }}>
						Love Survival Kit
					</h1>
					<p class="hero-subtitle" in:fly={{ y: 20, duration: 400, delay: 200 }}>
						Train for real relationships in a safe environment™
					</p>
					<div class="hero-warning" in:fly={{ y: 20, duration: 400, delay: 300 }}>
						⚠️ <strong>WARNING:</strong> No actual relationships were harmed in the making of this app
					</div>
				</div>
			{/if}
		</div>
	</section>
	
	<!-- Tools Section -->
	<section class="tools-section">
		<div class="container">
			<h2 class="section-title">Choose Your Survival Tool</h2>
			
			<div class="tools-grid">
				{#each survivalTools as tool, i}
					<div 
						class="tool-card"
						class:disabled={!tool.route}
						in:fly={{ y: 20, duration: 400, delay: 400 + i * 100 }}
					>
						{#if tool.route}
							<a href={tool.route} class="tool-link">
								<div class="tool-header">
									<span class="tool-emoji">{tool.emoji}</span>
									{#if tool.status === "PLAYABLE"}
										<span class="badge badge-new">NEW!</span>
									{/if}
								</div>
								<h3 class="tool-title">{tool.title}</h3>
								<p class="tool-description">{tool.description}</p>
								<div class="tool-footer">
									<span class="difficulty-badge {tool.difficulty.toLowerCase()}">
										{tool.difficulty}
									</span>
									<span class="play-text">Play Now →</span>
								</div>
							</a>
						{:else}
							<div class="tool-content">
								<div class="tool-header">
									<span class="tool-emoji">{tool.emoji}</span>
									<span class="badge badge-soon">SOON</span>
								</div>
								<h3 class="tool-title">{tool.title}</h3>
								<p class="tool-description">{tool.description}</p>
								<div class="tool-footer">
									<span class="difficulty-badge {tool.difficulty.toLowerCase()}">
										{tool.difficulty}
									</span>
								</div>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>
	
	<!-- Stats Section -->
	<section class="stats-section">
		<div class="container">
			<div class="stats-card card">
				<h3 class="stats-title">Global Survival Statistics</h3>
				<div class="stats-grid">
					{#each stats as stat, i}
						<div class="stat-item" in:fly={{ y: 20, duration: 400, delay: 800 + i * 100 }}>
							<div class="stat-value">{stat.value}</div>
							<div class="stat-label">{stat.label}</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
	
	<!-- Footer -->
	<footer class="footer">
		<div class="container">
			<p>Remember: In relationships, you're not always wrong... but you're never right. 😅</p>
			<div class="footer-links">
				<a href="/about" class="footer-link">About</a>
				<span class="separator">•</span>
				<a href="https://github.com/duardz" target="_blank" rel="noopener noreferrer" class="footer-link">
					GitHub
				</a>
			</div>
			<p class="footer-credit">Made with 💜 and lots of relationship experience</p>
		</div>
	</footer>
</div>

<style>
	.homepage {
		min-height: 100vh;
		background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
		position: relative;
	}
	
	/* Hero Section */
	.hero {
		padding: 3rem 0 4rem;
		text-align: center;
		color: white;
	}
	
	.hero-content {
		max-width: 800px;
		margin: 0 auto;
	}
	
	.hero-badge {
		display: inline-block;
		background: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(10px);
		padding: 0.5rem 1.5rem;
		border-radius: var(--radius-full);
		font-size: 0.875rem;
		font-weight: 500;
		margin-bottom: 1.5rem;
		border: 1px solid rgba(255, 255, 255, 0.3);
	}
	
	.hero-title {
		font-size: 3.5rem;
		font-weight: 800;
		margin-bottom: 1rem;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
		line-height: 1.1;
	}
	
	.hero-subtitle {
		font-size: 1.5rem;
		opacity: 0.95;
		margin-bottom: 2rem;
		font-weight: 300;
	}
	
	.hero-warning {
		background: rgba(255, 255, 255, 0.95);
		color: #111827;
		padding: 1rem 2rem;
		border-radius: var(--radius-lg);
		display: inline-block;
		box-shadow: var(--shadow-lg);
		font-weight: 500;
	}
	
	/* Tools Section */
	.tools-section {
		padding: 3rem 0;
		background: #f9fafb;
		border-radius: 2rem 2rem 0 0;
		margin-top: -2rem;
		position: relative;
		z-index: 10;
	}
	
	.section-title {
		text-align: center;
		margin-bottom: 3rem;
		color: #111827;
		font-size: 2.5rem;
		font-weight: 700;
	}
	
	.tools-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		margin-bottom: 3rem;
	}
	
	.tool-card {
		background: #ffffff;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
		transition: all 200ms ease;
		border: 1px solid #e5e7eb;
	}
	
	.tool-card:hover:not(.disabled) {
		transform: translateY(-4px);
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
		border-color: #7c3aed;
	}
	
	.tool-card.disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}
	
	.tool-link {
		display: block;
		text-decoration: none;
		color: inherit;
	}
	
	.tool-content, .tool-link {
		padding: 2rem;
	}
	
	.tool-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1rem;
	}
	
	.tool-emoji {
		font-size: 3rem;
	}
	
	.badge {
		padding: 0.25rem 0.75rem;
		border-radius: var(--radius-full);
		font-size: 0.75rem;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	
	.badge-new {
		background: var(--success);
		color: white;
	}
	
	.badge-soon {
		background: #9ca3af;
		color: white;
	}
	
	.tool-title {
		font-size: 1.5rem;
		margin-bottom: 0.75rem;
		color: #111827;
		font-weight: 600;
	}
	
	.tool-description {
		color: #4b5563;
		margin-bottom: 1.5rem;
		line-height: 1.6;
		font-size: 1rem;
	}
	
	.tool-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: auto;
	}
	
	.difficulty-badge {
		padding: 0.375rem 0.75rem;
		border-radius: var(--radius);
		font-size: 0.875rem;
		font-weight: 500;
	}
	
	.difficulty-badge.impossible {
		background: #fee2e2;
		color: #dc2626;
	}
	
	.difficulty-badge.expert {
		background: #fef3c7;
		color: #d97706;
	}
	
	.difficulty-badge.hard {
		background: #fed7aa;
		color: #ea580c;
	}
	
	.difficulty-badge.medium {
		background: #ddd6fe;
		color: #7c3aed;
	}
	
	.play-text {
		color: #7c3aed;
		font-weight: 600;
		font-size: 0.9375rem;
	}
	
	/* Stats Section */
	.stats-section {
		padding: 3rem 0 5rem;
		background: #f9fafb;
	}
	
	.stats-card {
		max-width: 800px;
		margin: 0 auto;
		padding: 2.5rem;
		text-align: center;
		background: #ffffff;
		border: 1px solid #e5e7eb;
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
		border-radius: 12px;
	}
	
	.stats-title {
		margin-bottom: 2rem;
		color: #111827;
		font-size: 1.75rem;
		font-weight: 600;
	}
	
	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
	}
	
	.stat-item {
		text-align: center;
	}
	
	.stat-value {
		font-size: 3rem;
		font-weight: bold;
		color: #7c3aed;
		line-height: 1;
		margin-bottom: 0.5rem;
	}
	
	.stat-label {
		color: #4b5563;
		font-size: 0.875rem;
		font-weight: 500;
	}
	
	/* Footer */
	.footer {
		background: #111827;
		color: white;
		padding: 2rem 0;
		text-align: center;
	}
	
	.footer p {
		margin: 0.5rem 0;
		opacity: 0.9;
	}
	
	.footer-links {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin: 1rem 0;
	}
	
	.footer-link {
		color: rgba(255, 255, 255, 0.9);
		text-decoration: none;
		font-weight: 500;
		transition: color 0.2s;
	}
	
	.footer-link:hover {
		color: white;
		text-decoration: underline;
	}
	
	.separator {
		color: rgba(255, 255, 255, 0.5);
	}
	
	.footer-credit {
		font-size: 0.875rem;
		opacity: 0.7;
		margin-top: 0.5rem;
	}
	
	/* Mobile Styles */
	@media (max-width: 768px) {
		.hero {
			padding: 2rem 0 3rem;
		}
		
		.hero-title {
			font-size: 2.5rem;
		}
		
		.hero-subtitle {
			font-size: 1.25rem;
		}
		
		.hero-warning {
			padding: 0.75rem 1.5rem;
			font-size: 0.875rem;
		}
		
		.tools-section {
			padding: 2rem 0;
		}
		
		.tools-grid {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
		
		.tool-content, .tool-link {
			padding: 1.5rem;
		}
		
		.stats-card {
			padding: 2rem 1.5rem;
		}
		
		.stat-value {
			font-size: 2.5rem;
		}
	}
	
	@media (max-width: 480px) {
		.hero-title {
			font-size: 2rem;
		}
		
		.hero-subtitle {
			font-size: 1.125rem;
		}
		
		.tool-emoji {
			font-size: 2.5rem;
		}
		
		.tool-title {
			font-size: 1.25rem;
		}
	}
</style>