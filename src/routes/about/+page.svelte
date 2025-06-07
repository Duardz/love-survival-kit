<!-- src/routes/about/+page.svelte -->
<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	
	let visible = false;
	
	onMount(() => {
		visible = true;
	});
</script>

<div class="about-page">
	<header class="about-header">
		<a href="/" class="back-btn">← Back to Home</a>
	</header>
	
	{#if visible}
		<div class="about-container" in:fade={{ duration: 600 }}>
			<div class="about-card" in:fly={{ y: 20, duration: 400, delay: 200 }}>
				<div class="profile-section">
					<div class="profile-emoji">👨‍💻</div>
					<h1>About Love Survival Kit</h1>
					<p class="tagline">Where relationships meet comedy... and usually lose</p>
				</div>
				
				<div class="divider"></div>
				
				<div class="content-section" in:fly={{ y: 20, duration: 400, delay: 400 }}>
					<h2>🎮 The Game</h2>
					<p>
						Love Survival Kit is a humorous relationship quiz game where every answer is wrong, 
						but some are less wrong than others. Navigate through impossible questions, 
						manage the anger meter, and try to survive the trials of modern relationships!
					</p>
				</div>
				
				<div class="content-section" in:fly={{ y: 20, duration: 400, delay: 600 }}>
					<h2>🚀 Created By</h2>
					<div class="creator-info">
						<h3>Duardz</h3>
						<p>Developer, relationship survivor, and professional apologizer</p>
						<a href="https://github.com/duardz" target="_blank" rel="noopener noreferrer" class="github-link">
							<svg class="github-icon" viewBox="0 0 24 24" width="24" height="24">
								<path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
							</svg>
							<span>Follow on GitHub</span>
						</a>
					</div>
				</div>
				
				<div class="content-section" in:fly={{ y: 20, duration: 400, delay: 800 }}>
					<h2>💡 Why This Exists</h2>
					<p>
						Born from countless "We need to talk" moments and the realization that in relationships, 
						you're not always wrong... but you're never right. This game is dedicated to everyone 
						who's ever wondered why "I'm fine" never actually means fine.
					</p>
				</div>
				
				<div class="stats-section" in:fly={{ y: 20, duration: 400, delay: 1000 }}>
					<div class="stat">
						<div class="stat-emoji">😤</div>
						<div class="stat-number">∞</div>
						<div class="stat-label">Anger Points Generated</div>
					</div>
					<div class="stat">
						<div class="stat-emoji">🍔</div>
						<div class="stat-number">1000+</div>
						<div class="stat-label">Emergency Foods Used</div>
					</div>
					<div class="stat">
						<div class="stat-emoji">💔</div>
						<div class="stat-number">0</div>
						<div class="stat-label">Perfect Scores</div>
					</div>
				</div>
				
				<div class="tech-section" in:fly={{ y: 20, duration: 400, delay: 1200 }}>
					<h2>🛠️ Built With</h2>
					<div class="tech-stack">
						<span class="tech-badge">SvelteKit</span>
						<span class="tech-badge">JavaScript</span>
						<span class="tech-badge">CSS</span>
						<span class="tech-badge">Love</span>
						<span class="tech-badge">Tears</span>
					</div>
				</div>
				
				<div class="footer-section">
					<p>Remember: This game is for entertainment purposes only. 
					Real relationships require actual communication, not just emergency burgers. 🍔💕</p>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.about-page {
		min-height: 100vh;
		background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
		padding: 1rem;
	}
	
	.about-header {
		max-width: 800px;
		margin: 0 auto 2rem;
	}

    h2 {
        color:rgb(0, 0, 0)
    }
	
	.back-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: white;
		text-decoration: none;
		font-weight: 500;
		opacity: 0.9;
		transition: opacity 0.2s;
		font-size: 0.9375rem;
	}
	
	.back-btn:hover {
		opacity: 1;
	}
	
	.about-container {
		max-width: 800px;
		margin: 0 auto;
	}
	
	.about-card {
		background: white;
		border-radius: 20px;
		padding: 3rem 2rem;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
	}
	
	.profile-section {
		text-align: center;
		margin-bottom: 2rem;
	}
	
	.profile-emoji {
		font-size: 4rem;
		margin-bottom: 1rem;
		animation: wave 2s ease-in-out infinite;
	}
	
	@keyframes wave {
		0%, 100% { transform: rotate(0deg); }
		25% { transform: rotate(-10deg); }
		75% { transform: rotate(10deg); }
	}
	
	.profile-section h1 {
		color: #111827;
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}
	
	.tagline {
		color: #6b7280;
		font-size: 1.125rem;
		font-style: italic;
	}
	
	.divider {
		height: 1px;
		background: #e5e7eb;
		margin: 2rem 0;
	}
	
	.content-section {
		margin-bottom: 2.5rem;
	}
	
	.content-section h2 {
		color: #111827;
		font-size: 1.5rem;
		margin-bottom: 1rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	
	.content-section p {
		color: #4b5563;
		line-height: 1.7;
		font-size: 1.0625rem;
	}
	
	.creator-info {
		background: #f9fafb;
		border-radius: 12px;
		padding: 1.5rem;
		text-align: center;
	}
	
	.creator-info h3 {
		color: #111827;
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}
	
	.creator-info p {
		color: #6b7280;
		margin-bottom: 1rem;
	}
	
	.github-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: #111827;
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 10px;
		text-decoration: none;
		font-weight: 500;
		transition: all 0.2s;
		margin-top: 0.5rem;
	}
	
	.github-link:hover {
		background: #1f2937;
		transform: translateY(-2px);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
	}
	
	.github-icon {
		width: 20px;
		height: 20px;
	}
	
	.stats-section {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		margin: 2.5rem 0;
	}
	
	.stat {
		text-align: center;
		padding: 1.5rem;
		background: #f9fafb;
		border-radius: 12px;
	}
	
	.stat-emoji {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}
	
	.stat-number {
		font-size: 2rem;
		font-weight: bold;
		color: #7c3aed;
		margin-bottom: 0.25rem;
	}
	
	.stat-label {
		font-size: 0.875rem;
		color: #6b7280;
	}
	
	.tech-section {
		margin: 2.5rem 0;
	}
	
	.tech-stack {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 1rem;
	}
	
	.tech-badge {
		background: #7c3aed;
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.875rem;
		font-weight: 500;
	}
	
	.footer-section {
		text-align: center;
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid #e5e7eb;
	}
	
	.footer-section p {
		color: #6b7280;
		line-height: 1.6;
		font-size: 0.9375rem;
	}
	
	@media (max-width: 768px) {
		.about-card {
			padding: 2rem 1.5rem;
		}
		
		.profile-section h1 {
			font-size: 2rem;
		}
		
		.stats-section {
			grid-template-columns: 1fr;
			gap: 0.75rem;
		}
		
		.stat {
			padding: 1rem;
		}
		
		.tech-stack {
			justify-content: center;
		}
	}
</style>