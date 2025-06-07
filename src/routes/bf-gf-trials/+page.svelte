<!-- src/routes/bf-gf-trials/+page.svelte -->
<script>
// @ts-nocheck
	import { onMount, onDestroy } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import AngerMeter from '$lib/components/AngerMeter.svelte';
	import QuizPreloader from '$lib/components/QuizPreloader.svelte';
	import { quizStore, currentQuestion, progress, finalResult } from '$lib/stores/quiz.js';
	
	let shakeScreen = false;
	let transitioning = false;
	let isReady = false;
	let showFoodEffect = false;
	let autoAdvanceTimer;
	
	// Subscribe to store
	$: ({ anger, gameState, selectedAnswer, showReaction, currentQuestionIndex, foodPowerUps, lastFoodEffect } = $quizStore);
	
	// Watch for anger changes to trigger shake
	$: if (selectedAnswer && selectedAnswer.anger >= 30) {
		triggerShake();
	}
	
	function triggerShake() {
		shakeScreen = true;
		setTimeout(() => shakeScreen = false, 500);
	}
	
	function handleAnswerSelect(answer) {
		if (transitioning || gameState !== 'playing') return;
		
		quizStore.selectAnswer(answer);
		
		// Auto advance after showing reaction
		const delay = anger >= 100 ? 1500 : 1800;
		autoAdvanceTimer = setTimeout(() => {
			handleNextQuestion();
		}, delay);
	}
	
	function handleNextQuestion() {
		transitioning = true;
		quizStore.nextQuestion();
		
		setTimeout(() => {
			transitioning = false;
		}, 150);
	}
	
	function useFoodPowerUp() {
		if (foodPowerUps <= 0 || gameState !== 'playing') return;
		
		quizStore.useFoodPowerUp();
		showFoodEffect = true;
		
		setTimeout(() => {
			showFoodEffect = false;
		}, 2000);
	}
	
	function startGame() {
		quizStore.startGame();
	}
	
	function restart() {
		quizStore.reset();
		startGame();
	}
	
	function shareResult() {
		const text = `${$finalResult.share} Can you do better? #DragonSurvivor #LoveSurvivalKit`;
		
		if (navigator.share) {
			navigator.share({
				title: 'Love Survival Kit - BF/GF Trials',
				text: text,
				url: window.location.href
			});
		} else {
			navigator.clipboard.writeText(text);
			alert('Result copied to clipboard! Share your survival story! 📋');
		}
	}
	
	onMount(() => {
		quizStore.reset();
	});
	
	onDestroy(() => {
		if (autoAdvanceTimer) {
			clearTimeout(autoAdvanceTimer);
		}
	});
</script>

<QuizPreloader onReady={() => isReady = true} />

{#if isReady}
	<div class="quiz-page" class:shake={shakeScreen}>
		<!-- Fixed Header -->
		<header class="quiz-header">
			<div class="header-content">
				<a href="/" class="back-link">
					<span class="back-icon">←</span>
					<span class="hide-mobile">Back to Kit</span>
				</a>
				<h1 class="quiz-title">The BF/GF Trials</h1>
				<div class="header-spacer"></div>
			</div>
		</header>
		
		<div class="quiz-container">
			{#if gameState === 'ready'}
				<!-- Start Screen -->
				<div class="start-screen" in:fade={{ duration: 300 }}>
					<div class="card start-card">
						<div class="start-icon">🎮</div>
						<h2>Ready to Test Your Survival Skills?</h2>
						<div class="start-info">
							<p>📋 10 random relationship questions</p>
							<p>😤 Every answer increases her anger</p>
							<p>🍔 Use food to calm her down (2 available)</p>
							<p>💔 Game ends at 100% anger</p>
						</div>
						<button class="btn btn-primary btn-lg" on:click={startGame}>
							Start The Trials
						</button>
					</div>
				</div>
				
			{:else if gameState === 'playing' || gameState === 'reaction'}
				<!-- Game Screen -->
				<div class="game-screen">
					<!-- Progress Section -->
					<div class="progress-section">
						<div class="progress-info">
							<span class="text-primary">Question {currentQuestionIndex + 1} of 10</span>
							<span class="text-primary">{10 - currentQuestionIndex - 1} remaining</span>
						</div>
						<div class="progress-bar-container">
							<div class="progress-bar-fill" style="width: {$progress}%"></div>
						</div>
					</div>
					
					<!-- Anger Meter Section -->
					<div class="meter-section">
						<AngerMeter {anger} shake={shakeScreen} />
						
						<!-- Food Power-up -->
						<div class="power-up-section">
							<button 
								class="power-up-btn" 
								class:disabled={foodPowerUps === 0}
								on:click={useFoodPowerUp}
								disabled={foodPowerUps === 0 || gameState !== 'playing'}
							>
								<span class="power-up-icon">🍔</span>
								<span class="power-up-count">{foodPowerUps}</span>
							</button>
							<div class="power-up-label">Emergency Food</div>
						</div>
						
						{#if showFoodEffect && lastFoodEffect > 0}
							<div class="food-effect" in:scale={{ duration: 300 }}>
								-{lastFoodEffect}% Anger! She's slightly calmer... 🍔
							</div>
						{/if}
					</div>
					
					<!-- Question Card -->
					{#if $currentQuestion}
						{#key currentQuestionIndex}
							<div class="question-section" in:fly={{ x: 30, duration: 200 }} out:fly={{ x: -30, duration: 150 }}>
								<div class="card question-card">
									<h2 class="question-text">{$currentQuestion.question}</h2>
									
									<div class="answers-container">
										{#each $currentQuestion.answers as answer, i}
											<button 
												class="answer-btn"
												class:selected={selectedAnswer === answer}
												class:disabled={gameState === 'reaction'}
												on:click={() => handleAnswerSelect(answer)}
												disabled={gameState === 'reaction' || transitioning}
												in:fly={{ y: 10, duration: 150, delay: i * 30 }}
											>
												{answer.text}
											</button>
										{/each}
									</div>
									
									{#if showReaction && selectedAnswer}
										<div 
											class="reaction-section" 
											class:danger={anger >= 100}
											in:scale={{ duration: 200, start: 0.9 }}
										>
											<div class="anger-increase">+{selectedAnswer.anger}% Anger!</div>
											<p class="reaction-text">{selectedAnswer.reaction}</p>
											{#if anger >= 100}
												<p class="game-over-text">💔 RELATIONSHIP CRITICAL FAILURE! 💔</p>
											{/if}
										</div>
									{/if}
								</div>
							</div>
						{/key}
					{/if}
				</div>
				
			{:else if gameState === 'finished'}
				<!-- Results Screen -->
				<div class="results-screen" in:fade={{ duration: 500 }}>
					<div class="result-emoji" in:scale={{ duration: 600, start: 0 }}>
						{$finalResult.emoji}
					</div>
					
					<div class="card result-card" in:fly={{ y: 20, duration: 400, delay: 200 }}>
						<h2 class="result-title">{$finalResult.title}</h2>
						<h3 class="result-subtitle">{$finalResult.subtitle}</h3>
						<p class="result-description">{$finalResult.description}</p>
						
						<div class="stats-grid">
							<div class="stat-item">
								<div class="stat-value">{anger}%</div>
								<div class="stat-label">Final Anger</div>
							</div>
							<div class="stat-item">
								<div class="stat-value">{$quizStore.questionsAnswered}</div>
								<div class="stat-label">Questions Survived</div>
							</div>
							<div class="stat-item">
								<div class="stat-value">{2 - foodPowerUps}</div>
								<div class="stat-label">Food Used</div>
							</div>
						</div>
						
						<div class="result-actions">
							<button class="btn btn-success btn-lg" on:click={shareResult}>
								📱 Share Result
							</button>
							<button class="btn btn-primary btn-lg" on:click={restart}>
								🔄 Try Again
							</button>
						</div>
					</div>
					
					<div in:fly={{ y: 20, duration: 400, delay: 400 }}>
						<AngerMeter {anger} />
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	.quiz-page {
		min-height: 100vh;
		background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
		position: relative;
		overflow-x: hidden;
	}
	
	.quiz-page.shake {
		animation: shake 0.5s ease-in-out;
	}
	
	/* Header */
	.quiz-header {
		position: sticky;
		top: 0;
		z-index: 100;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}
	
	.header-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.back-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: white;
		font-weight: 500;
		transition: opacity 0.2s;
	}
	
	.back-link:hover {
		opacity: 0.8;
	}
	
	.back-icon {
		font-size: 1.25rem;
	}
	
	.quiz-title {
		font-size: 1.5rem;
		color: white;
		margin: 0;
		text-align: center;
		flex: 1;
	}
	
	.header-spacer {
		width: 100px;
	}
	
	/* Container */
	.quiz-container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		min-height: calc(100vh - 80px);
	}
	
	/* Start Screen */
	.start-screen {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: calc(100vh - 160px);
	}
	
	.start-card {
		text-align: center;
		padding: 3rem;
		max-width: 500px;
		width: 100%;
	}
	
	.start-icon {
		font-size: 4rem;
		margin-bottom: 1.5rem;
		animation: pulse 2s ease-in-out infinite;
	}
	
	.start-card h2 {
		color: var(--text-primary);
		margin-bottom: 2rem;
	}
	
	.start-info {
		text-align: left;
		background: var(--bg-tertiary);
		border-radius: var(--radius);
		padding: 1.5rem;
		margin-bottom: 2rem;
	}
	
	.start-info p {
		margin: 0.5rem 0;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		color: var(--text-primary);
	}
	
	/* Game Screen */
	.game-screen {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	
	/* Progress Section */
	.progress-section {
		background: rgba(255, 255, 255, 0.95);
		border-radius: var(--radius-lg);
		padding: 1rem;
		box-shadow: var(--shadow);
	}
	
	.progress-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.75rem;
		font-weight: 500;
		color: var(--text-primary);
	}
	
	.progress-bar-container {
		height: 8px;
		background: var(--bg-tertiary);
		border-radius: var(--radius-full);
		overflow: hidden;
	}
	
	.progress-bar-fill {
		height: 100%;
		background: linear-gradient(90deg, var(--success), var(--success-dark));
		transition: width 0.5s ease;
		border-radius: var(--radius-full);
	}
	
	/* Meter Section */
	.meter-section {
		position: relative;
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	
	/* Power-up Section */
	.power-up-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
	}
	
	.power-up-btn {
		position: relative;
		width: 60px;
		height: 60px;
		border-radius: var(--radius-full);
		background: white;
		border: 3px solid var(--primary);
		cursor: pointer;
		transition: all 0.2s;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: var(--shadow);
	}
	
	.power-up-btn:hover:not(.disabled) {
		transform: scale(1.1);
		box-shadow: var(--shadow-md);
	}
	
	.power-up-btn:active:not(.disabled) {
		transform: scale(0.95);
	}
	
	.power-up-btn.disabled {
		opacity: 0.5;
		cursor: not-allowed;
		border-color: var(--text-light);
	}
	
	.power-up-icon {
		font-size: 1.75rem;
	}
	
	.power-up-count {
		position: absolute;
		top: -5px;
		right: -5px;
		background: var(--danger);
		color: white;
		width: 24px;
		height: 24px;
		border-radius: var(--radius-full);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.875rem;
		font-weight: bold;
	}
	
	.power-up-label {
		font-size: 0.75rem;
		color: white;
		font-weight: 500;
		text-align: center;
	}
	
	.food-effect {
		position: absolute;
		top: -40px;
		left: 50%;
		transform: translateX(-50%);
		background: var(--success);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: var(--radius-full);
		font-weight: bold;
		white-space: nowrap;
		box-shadow: var(--shadow);
	}
	
	/* Question Section */
	.question-section {
		flex: 1;
	}
	
	.question-card {
		padding: 2rem;
	}
	
	.question-text {
		font-size: 1.5rem;
		color: var(--text-primary);
		text-align: center;
		margin-bottom: 2rem;
		line-height: 1.4;
	}
	
	.answers-container {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	
	.answer-btn {
		width: 100%;
		padding: 1rem 1.5rem;
		text-align: left;
		background: var(--bg-tertiary);
		border: 2px solid transparent;
		border-radius: var(--radius);
		cursor: pointer;
		transition: all 0.15s;
		font-size: 1rem;
		line-height: 1.5;
		color: var(--text-primary);
	}
	
	.answer-btn:hover:not(.disabled) {
		background: var(--bg-secondary);
		border-color: var(--primary);
		transform: translateX(4px);
		box-shadow: var(--shadow);
	}
	
	.answer-btn.selected {
		background: var(--primary);
		color: white;
		border-color: var(--primary);
		transform: scale(0.98);
	}
	
	.answer-btn.disabled:not(.selected) {
		opacity: 0.6;
		cursor: not-allowed;
	}
	
	/* Reaction Section */
	.reaction-section {
		margin-top: 1.5rem;
		padding: 1rem;
		background: #fef3c7;
		border: 2px solid #fbbf24;
		border-radius: var(--radius);
		text-align: center;
	}
	
	.reaction-section.danger {
		background: #fee2e2;
		border-color: #ef4444;
	}
	
	.anger-increase {
		font-size: 1.125rem;
		font-weight: bold;
		color: var(--danger);
		margin-bottom: 0.5rem;
	}
	
	.reaction-text {
		margin: 0;
		color: var(--text-primary);
		font-size: 1rem;
	}
	
	.game-over-text {
		margin-top: 0.75rem !important;
		font-size: 1.125rem !important;
		font-weight: bold;
		color: var(--danger) !important;
		animation: pulse 1s ease-in-out infinite;
	}
	
	/* Results Screen */
	.results-screen {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		padding: 2rem 0;
	}
	
	.result-emoji {
		font-size: 5rem;
		animation: bounce 2s ease-in-out infinite;
	}
	
	@keyframes bounce {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-20px); }
	}
	
	.result-card {
		width: 100%;
		max-width: 600px;
		padding: 2.5rem;
		text-align: center;
	}
	
	.result-title {
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}
	
	.result-subtitle {
		color: var(--primary);
		font-size: 1.25rem;
		margin-bottom: 1rem;
	}
	
	.result-description {
		color: var(--text-secondary);
		margin-bottom: 2rem;
		font-size: 1.125rem;
	}
	
	.stats-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: var(--bg-tertiary);
		border-radius: var(--radius);
	}
	
	.stat-item {
		text-align: center;
	}
	
	.stat-value {
		font-size: 2rem;
		font-weight: bold;
		color: var(--primary);
		line-height: 1;
	}
	
	.stat-label {
		font-size: 0.875rem;
		color: var(--text-secondary);
		margin-top: 0.25rem;
	}
	
	.result-actions {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		justify-content: center;
	}
	
	/* Mobile Optimizations */
	@media (max-width: 768px) {
		.quiz-header {
			padding: 0.75rem;
		}
		
		.quiz-title {
			font-size: 1.25rem;
		}
		
		.header-spacer {
			width: 60px;
		}
		
		.quiz-container {
			padding: 1rem 0.75rem;
		}
		
		.start-card {
			padding: 2rem 1.5rem;
		}
		
		.question-card {
			padding: 1.5rem;
		}
		
		.question-text {
			font-size: 1.25rem;
		}
		
		.answer-btn {
			padding: 0.875rem 1rem;
			font-size: 0.9375rem;
		}
		
		.meter-section {
			flex-direction: column;
		}
		
		.power-up-section {
			flex-direction: row;
			width: 100%;
			justify-content: center;
		}
		
		.power-up-label {
			display: none;
		}
		
		.stats-grid {
			grid-template-columns: 1fr;
			text-align: center;
		}
		
		.result-actions {
			flex-direction: column;
			width: 100%;
		}
		
		.result-actions .btn {
			width: 100%;
		}
	}
	
	@media (max-width: 480px) {
		.start-info {
			padding: 1rem;
		}
		
		.question-text {
			font-size: 1.125rem;
			margin-bottom: 1.5rem;
		}
		
		.result-emoji {
			font-size: 4rem;
		}
	}
</style>