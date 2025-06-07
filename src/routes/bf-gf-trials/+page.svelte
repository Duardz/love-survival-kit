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
	$: if (selectedAnswer && selectedAnswer.anger >= 20) {
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
		const delay = anger >= 100 ? 1500 : 2000;
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
		<!-- Compact Header -->
		<header class="quiz-header">
			<a href="/" class="back-btn">←</a>
			<div class="header-info">
				<h1>The BF/GF Trials</h1>
				<div class="progress-text">Question {currentQuestionIndex + 1} of 10</div>
			</div>
			<div class="header-links">
				<a href="/about" class="header-link">About</a>
			</div>
		</header>
		
		<div class="quiz-content">
			{#if gameState === 'ready'}
				<!-- Start Screen -->
				<div class="start-screen" in:fade={{ duration: 300 }}>
					<div class="start-card">
						<div class="start-emoji">💕</div>
						<h2>Ready for the Ultimate Test?</h2>
						<p>10 questions. No right answers. Just survival.</p>
						<div class="rules">
							<div class="rule">😤 Every answer increases anger</div>
							<div class="rule">🍔 Use food to calm her (2x)</div>
							<div class="rule">💔 Game ends at 100% anger</div>
						</div>
						<button class="btn-start" on:click={startGame}>
							Start The Trials
						</button>
					</div>
				</div>
				
			{:else if gameState === 'playing' || gameState === 'reaction'}
				<!-- Game Screen - Compact Layout -->
				<div class="game-container">
					<!-- Top Section: Progress + Anger Meter -->
					<div class="top-section">
						<div class="progress-bar">
							<div class="progress-fill" style="width: {$progress}%"></div>
						</div>
						
						<div class="meter-row">
							<AngerMeter {anger} shake={shakeScreen} compact={true} />
							
							<button 
								class="food-btn" 
								class:disabled={foodPowerUps === 0}
								on:click={useFoodPowerUp}
								disabled={foodPowerUps === 0 || gameState !== 'playing'}
							>
								<span class="food-icon">🍔</span>
								<span class="food-count">{foodPowerUps}</span>
							</button>
						</div>
						
						{#if showFoodEffect && lastFoodEffect > 0}
							<div class="food-effect" in:scale={{ duration: 300 }}>
								-{lastFoodEffect}% Anger! 🍔
							</div>
						{/if}
					</div>
					
					<!-- Question Section -->
					{#if $currentQuestion}
						{#key currentQuestionIndex}
							<div class="question-box" in:fly={{ x: 30, duration: 200 }} out:fly={{ x: -30, duration: 150 }}>
								<h2 class="question">{$currentQuestion.question}</h2>
								
								<div class="answers">
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
										class="reaction-box" 
										class:critical={anger >= 100}
										in:scale={{ duration: 200, start: 0.9 }}
									>
										<div class="reaction-anger">+{selectedAnswer.anger}% Anger</div>
										<div class="reaction-text">{selectedAnswer.reaction}</div>
										{#if anger >= 100}
											<div class="game-over-alert">💔 RELATIONSHIP CRITICAL! 💔</div>
										{/if}
									</div>
								{/if}
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
					
					<div class="result-card" in:fly={{ y: 20, duration: 400, delay: 200 }}>
						<h2>{$finalResult.title}</h2>
						<p class="result-subtitle">{$finalResult.subtitle}</p>
						<p>{$finalResult.description}</p>
						
						<div class="final-stats">
							<div class="stat">
								<span class="stat-num">{anger}%</span>
								<span class="stat-label">Final Anger</span>
							</div>
							<div class="stat">
								<span class="stat-num">{$quizStore.questionsAnswered}</span>
								<span class="stat-label">Survived</span>
							</div>
							<div class="stat">
								<span class="stat-num">{2 - foodPowerUps}</span>
								<span class="stat-label">Food Used</span>
							</div>
						</div>
						
						<div class="result-buttons">
							<button class="btn-share" on:click={shareResult}>
								Share Result 📱
							</button>
							<button class="btn-retry" on:click={restart}>
								Try Again 🔄
							</button>
						</div>
					</div>
					
					<AngerMeter {anger} compact={false} />
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	.quiz-page {
		min-height: 100vh;
		background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
		display: flex;
		flex-direction: column;
	}
	
	.quiz-page.shake {
		animation: shake 0.5s ease-in-out;
	}
	
	@keyframes shake {
		0%, 100% { transform: translateX(0); }
		10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
		20%, 40%, 60%, 80% { transform: translateX(3px); }
	}
	
	/* Compact Header */
	.quiz-header {
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		padding: 0.75rem 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}
	
	.back-btn {
		width: 40px;
		height: 40px;
		background: rgba(255, 255, 255, 0.2);
		border: none;
		border-radius: 50%;
		color: white;
		font-size: 1.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.2s;
		text-decoration: none;
	}
	
	.back-btn:hover {
		background: rgba(255, 255, 255, 0.3);
		transform: scale(1.1);
	}
	
	.header-info {
		flex: 1;
		text-align: center;
	}
	
	.header-info h1 {
		font-size: 1.25rem;
		color: white;
		margin: 0;
		font-weight: 600;
	}
	
	.progress-text {
		font-size: 0.875rem;
		color: rgba(255, 255, 255, 0.9);
		margin-top: 0.125rem;
	}
	
	.header-links {
		display: flex;
		gap: 1rem;
		align-items: center;
	}
	
	.header-link {
		color: rgba(255, 255, 255, 0.9);
		text-decoration: none;
		font-size: 0.875rem;
		font-weight: 500;
		transition: color 0.2s;
		padding: 0.5rem;
	}
	
	.header-link:hover {
		color: white;
	}
	
	/* Content Area */
	.quiz-content {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		overflow-y: auto;
	}
	
	/* Start Screen */
	.start-screen {
		width: 100%;
		max-width: 400px;
	}
	
	.start-card {
		background: white;
		border-radius: 20px;
		padding: 2.5rem 2rem;
		text-align: center;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
	}
	
	.start-emoji {
		font-size: 4rem;
		margin-bottom: 1rem;
		animation: pulse 2s ease-in-out infinite;
	}
	
	@keyframes pulse {
		0%, 100% { transform: scale(1); }
		50% { transform: scale(1.1); }
	}
	
	.start-card h2 {
		color: #111827;
		margin-bottom: 0.5rem;
		font-size: 1.75rem;
	}
	
	.start-card p {
		color: #6b7280;
		margin-bottom: 1.5rem;
	}
	
	.rules {
		background: #f9fafb;
		border-radius: 12px;
		padding: 1rem;
		margin-bottom: 1.5rem;
	}
	
	.rule {
		padding: 0.5rem 0;
		color: #4b5563;
		font-size: 0.9375rem;
	}
	
	.btn-start {
		width: 100%;
		padding: 1rem 2rem;
		background: #7c3aed;
		color: white;
		border: none;
		border-radius: 12px;
		font-size: 1.125rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s;
	}
	
	.btn-start:hover {
		background: #6d28d9;
		transform: translateY(-2px);
		box-shadow: 0 5px 15px rgba(124, 58, 237, 0.4);
	}
	
	/* Game Container */
	.game-container {
		width: 100%;
		max-width: 500px;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	
	/* Top Section */
	.top-section {
		background: rgba(255, 255, 255, 0.95);
		border-radius: 16px;
		padding: 1rem;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	}
	
	.progress-bar {
		height: 6px;
		background: #e5e7eb;
		border-radius: 3px;
		margin-bottom: 1rem;
		overflow: hidden;
	}
	
	.progress-fill {
		height: 100%;
		background: #10b981;
		transition: width 0.5s ease;
		border-radius: 3px;
	}
	
	.meter-row {
		display: flex;
		gap: 1rem;
		align-items: center;
	}
	
	.food-btn {
		position: relative;
		width: 50px;
		height: 50px;
		background: white;
		border: 2px solid #7c3aed;
		border-radius: 50%;
		cursor: pointer;
		transition: all 0.2s;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}
	
	.food-btn:hover:not(.disabled) {
		transform: scale(1.1);
		box-shadow: 0 4px 10px rgba(124, 58, 237, 0.3);
	}
	
	.food-btn.disabled {
		opacity: 0.5;
		cursor: not-allowed;
		border-color: #e5e7eb;
	}
	
	.food-icon {
		font-size: 1.5rem;
	}
	
	.food-count {
		position: absolute;
		top: -5px;
		right: -5px;
		background: #ef4444;
		color: white;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.75rem;
		font-weight: bold;
	}
	
	.food-effect {
		margin-top: 0.5rem;
		text-align: center;
		color: #10b981;
		font-weight: 600;
		font-size: 0.9375rem;
	}
	
	/* Question Box */
	.question-box {
		background: white;
		border-radius: 16px;
		padding: 1.5rem;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	}
	
	.question {
		font-size: 1.25rem;
		color: #111827;
		margin-bottom: 1.5rem;
		text-align: center;
		line-height: 1.4;
		font-weight: 600;
	}
	
	.answers {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	
	.answer-btn {
		width: 100%;
		padding: 1rem;
		background: #f9fafb;
		border: 2px solid #e5e7eb;
		border-radius: 12px;
		text-align: left;
		cursor: pointer;
		transition: all 0.15s;
		font-size: 0.9375rem;
		color: #374151;
		font-weight: 500;
	}
	
	.answer-btn:hover:not(.disabled) {
		background: white;
		border-color: #7c3aed;
		transform: translateX(4px);
		box-shadow: 0 2px 8px rgba(124, 58, 237, 0.15);
	}
	
	.answer-btn.selected {
		background: #7c3aed;
		color: white;
		border-color: #7c3aed;
	}
	
	.answer-btn.disabled:not(.selected) {
		opacity: 0.6;
		cursor: not-allowed;
	}
	
	/* Reaction Box */
	.reaction-box {
		margin-top: 1rem;
		padding: 1rem;
		background: #fef3c7;
		border: 2px solid #fbbf24;
		border-radius: 12px;
		text-align: center;
	}
	
	.reaction-box.critical {
		background: #fee2e2;
		border-color: #ef4444;
	}
	
	.reaction-anger {
		font-size: 0.875rem;
		font-weight: 700;
		color: #dc2626;
		margin-bottom: 0.25rem;
	}
	
	.reaction-text {
		color: #92400e;
		font-weight: 500;
		line-height: 1.4;
	}
	
	.critical .reaction-text {
		color: #991b1b;
	}
	
	.game-over-alert {
		margin-top: 0.5rem;
		font-weight: 700;
		color: #dc2626;
		animation: flash 1s ease-in-out infinite;
	}
	
	@keyframes flash {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.7; }
	}
	
	/* Results Screen */
	.results-screen {
		width: 100%;
		max-width: 500px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
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
		background: white;
		border-radius: 20px;
		padding: 2rem;
		text-align: center;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
		width: 100%;
	}
	
	.result-card h2 {
		color: #111827;
		margin-bottom: 0.5rem;
		font-size: 1.75rem;
	}
	
	.result-subtitle {
		color: #7c3aed;
		font-size: 1.125rem;
		font-weight: 600;
		margin-bottom: 0.75rem;
	}
	
	.result-card p {
		color: #6b7280;
		margin-bottom: 1.5rem;
		line-height: 1.5;
	}
	
	.final-stats {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		margin-bottom: 1.5rem;
		padding: 1rem;
		background: #f9fafb;
		border-radius: 12px;
	}
	
	.stat {
		text-align: center;
	}
	
	.stat-num {
		display: block;
		font-size: 1.5rem;
		font-weight: 700;
		color: #7c3aed;
		margin-bottom: 0.25rem;
	}
	
	.stat-label {
		font-size: 0.75rem;
		color: #6b7280;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	
	.result-buttons {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	
	.btn-share, .btn-retry {
		padding: 0.75rem 1rem;
		border: none;
		border-radius: 10px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s;
		font-size: 0.9375rem;
	}
	
	.btn-share {
		background: #10b981;
		color: white;
	}
	
	.btn-share:hover {
		background: #059669;
		transform: translateY(-2px);
	}
	
	.btn-retry {
		background: #7c3aed;
		color: white;
	}
	
	.btn-retry:hover {
		background: #6d28d9;
		transform: translateY(-2px);
	}
	
	/* Mobile Responsive */
	@media (max-width: 480px) {
		.quiz-content {
			padding: 0.75rem;
		}
		
		.start-card {
			padding: 2rem 1.5rem;
		}
		
		.question-box {
			padding: 1.25rem;
		}
		
		.question {
			font-size: 1.125rem;
		}
		
		.answer-btn {
			padding: 0.875rem;
			font-size: 0.875rem;
		}
		
		.result-card {
			padding: 1.5rem;
		}
		
		.result-emoji {
			font-size: 4rem;
		}
	}
	
	@media (max-height: 700px) {
		.quiz-header {
			padding: 0.5rem 1rem;
		}
		
		.top-section {
			padding: 0.75rem;
		}
		
		.question-box {
			padding: 1rem;
		}
		
		.question {
			margin-bottom: 1rem;
		}
		
		.answers {
			gap: 0.5rem;
		}
	}
</style>