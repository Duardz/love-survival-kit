<!-- src/routes/bf-gf-trials/+page.svelte -->
<script>
// @ts-nocheck

	import { onMount, onDestroy } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import AngerMeter from '$lib/components/AngerMeter.svelte';
	import { quizStore, currentQuestion, progress, finalResult } from '$lib/stores/quiz.js';
	
	let shakeScreen = false;
	let transitioning = false;
	// @ts-ignore
	let autoAdvanceTimer;
	
	// Subscribe to store
	$: ({ anger, gameState, selectedAnswer, showReaction, currentQuestionIndex } = $quizStore);
	
	// Watch for anger changes to trigger shake
// @ts-ignore
		$: if (selectedAnswer && selectedAnswer.anger >= 30) {
		triggerShake();
	}
	
	function triggerShake() {
		shakeScreen = true;
		setTimeout(() => shakeScreen = false, 500);
	}
	
	// @ts-ignore
	function handleAnswerSelect(answer) {
		if (transitioning || gameState !== 'playing') return;
		
		quizStore.selectAnswer(answer);
		
		// Auto advance after showing reaction - faster timing
		const delay = anger >= 100 ? 1500 : 1800;
		autoAdvanceTimer = setTimeout(() => {
			handleNextQuestion();
		}, delay);
	}
	
	function handleNextQuestion() {
		transitioning = true;
		quizStore.nextQuestion();
		
		// Reset transitioning flag quickly
		setTimeout(() => {
			transitioning = false;
		}, 150);
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
		// Start fresh
		quizStore.reset();
	});
	
	onDestroy(() => {
		// Clean up timer
		// @ts-ignore
		if (autoAdvanceTimer) {
			clearTimeout(autoAdvanceTimer);
		}
	});
</script>

<div class="quiz-container" class:shake={shakeScreen}>
	<header class="quiz-header">
		<a href="/" class="back-button">← Back to Survival Kit</a>
		<h1>The BF/GF Trials</h1>
		<p>Can you keep her anger below 100%? (Spoiler: No)</p>
	</header>
	
	{#if gameState === 'ready'}
		<div class="start-screen" in:fade={{ duration: 300 }}>
			<div class="start-content">
				<div class="start-emoji">🎮</div>
				<h2>Ready to Test Your Survival Skills?</h2>
				<p>You'll face 10 random relationship questions.</p>
				<p>Every answer increases her anger.</p>
				<p>There are no right answers. Only survival.</p>
				<button class="start-button" on:click={startGame}>
					Start The Trials
				</button>
			</div>
		</div>
	{:else if gameState === 'playing' || gameState === 'reaction'}
		<!-- Progress Bar -->
		<div class="progress-container" in:fade={{ duration: 300 }}>
			<div class="progress-bar" style="width: {$progress}%"></div>
			<span class="progress-text">Question {currentQuestionIndex + 1} of 10</span>
		</div>
		
		<!-- Anger Meter -->
		<div in:fly={{ y: -20, duration: 300 }}>
			<AngerMeter {anger} shake={shakeScreen} />
		</div>
		
		<!-- Question -->
		{#if $currentQuestion}
			{#key currentQuestionIndex}
				<div class="question-card" in:fly={{ x: 50, duration: 200 }} out:fly={{ x: -50, duration: 150 }}>
					<h2 class="question-text">{$currentQuestion.question}</h2>
					
					<div class="answers-grid">
						{#each $currentQuestion.answers as answer, i}
							<button 
								class="answer-button"
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
							class:game-over={anger >= 100}
							in:scale={{ duration: 200, start: 0.9 }}
						>
							<div class="anger-change">+{selectedAnswer.anger}% Anger!</div>
							<p>{selectedAnswer.reaction}</p>
							{#if anger >= 100}
								<p class="game-over-text">💔 CRITICAL RELATIONSHIP FAILURE! 💔</p>
							{/if}
						</div>
					{/if}
				</div>
			{/key}
		{/if}
	{:else if gameState === 'finished'}
		<!-- Game Over Screen -->
		<div class="result-screen" in:fade={{ duration: 500 }}>
			<div class="result-emoji" in:scale={{ duration: 600, start: 0 }}>
				{$finalResult.emoji}
			</div>
			
			<div in:fly={{ y: 20, duration: 400, delay: 200 }}>
				<AngerMeter {anger} />
			</div>
			
			<div class="result-content" in:fly={{ y: 20, duration: 400, delay: 400 }}>
				<h2>{$finalResult.title}</h2>
				<h3>{$finalResult.subtitle}</h3>
				<p>{$finalResult.description}</p>
				
				<div class="final-stats">
					<div class="stat">
						<span class="stat-label">Final Anger:</span>
						<span class="stat-value">{anger}%</span>
					</div>
					<div class="stat">
						<span class="stat-label">Questions Survived:</span>
						<span class="stat-value">{$quizStore.questionsAnswered}/10</span>
					</div>
				</div>
				
				<div class="action-buttons">
					<button class="share-button" on:click={shareResult}>
						📱 Share Your Survival Story #DragonSurvivor
					</button>
					<button class="restart-button" on:click={restart}>
						🔄 Try Again (You Masochist)
					</button>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.quiz-container {
		min-height: 100vh;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		padding: 1rem;
	}
	
	.quiz-container.shake {
		animation: screenShake 0.5s ease-in-out;
	}
	
	@keyframes screenShake {
		0%, 100% { transform: translateX(0); }
		10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
		20%, 40%, 60%, 80% { transform: translateX(5px); }
	}
	
	.quiz-header {
		text-align: center;
		color: white;
		margin-bottom: 2rem;
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
	}
	
	.back-button {
		color: white;
		text-decoration: none;
		font-size: 0.9rem;
		opacity: 0.8;
		transition: opacity 0.2s;
		display: inline-block;
		margin-bottom: 1rem;
	}
	
	.back-button:hover {
		opacity: 1;
	}
	
	.quiz-header h1 {
		font-size: 2.5rem;
		margin: 0 0 0.5rem 0;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
	}
	
	.quiz-header p {
		font-size: 1.1rem;
		opacity: 0.9;
	}
	
	/* Start Screen */
	.start-screen {
		max-width: 600px;
		margin: 4rem auto;
		text-align: center;
	}
	
	.start-content {
		background: white;
		border-radius: 12px;
		padding: 3rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}
	
	.start-emoji {
		font-size: 4rem;
		margin-bottom: 1rem;
		animation: bounce 2s ease-in-out infinite;
	}
	
	.start-content h2 {
		color: #333;
		margin-bottom: 1rem;
		font-size: 1.8rem;
	}
	
	.start-content p {
		color: #666;
		margin-bottom: 1rem;
		font-size: 1.1rem;
	}
	
	.start-button {
		background: #764ba2;
		color: white;
		border: none;
		border-radius: 8px;
		padding: 1rem 2.5rem;
		font-size: 1.2rem;
		font-weight: bold;
		cursor: pointer;
		transition: all 0.2s ease;
		margin-top: 1rem;
	}
	
	.start-button:hover {
		background: #5a3a7e;
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}
	
	/* Progress */
	.progress-container {
		max-width: 800px;
		margin: 0 auto 1rem;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 10px;
		height: 30px;
		position: relative;
		overflow: hidden;
	}
	
	.progress-bar {
		height: 100%;
		background: linear-gradient(90deg, #28a745, #20c997);
		transition: width 0.5s ease;
		border-radius: 10px;
	}
	
	.progress-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
		font-weight: bold;
		font-size: 0.9rem;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
	}
	
	/* Question Card */
	.question-card {
		max-width: 800px;
		margin: 0 auto;
		background: white;
		border-radius: 12px;
		padding: 2rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}
	
	.question-text {
		font-size: 1.5rem;
		color: #333;
		margin-bottom: 2rem;
		text-align: center;
	}
	
	.answers-grid {
		display: grid;
		gap: 1rem;
		margin-bottom: 1rem;
	}
	
	.answer-button {
		background: #f8f9fa;
		border: 2px solid #dee2e6;
		border-radius: 8px;
		padding: 1rem 1.5rem;
		font-size: 1.1rem;
		cursor: pointer;
		transition: all 0.15s ease;
		text-align: left;
		color: #333;
		transform-origin: center;
		will-change: transform;
	}
	
	.answer-button:hover:not(.disabled) {
		background: #e9ecef;
		border-color: #764ba2;
		transform: translateY(-2px);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
	
	.answer-button.selected {
		background: #764ba2;
		color: white;
		border-color: #764ba2;
		transform: scale(0.98);
	}
	
	.answer-button.disabled:not(.selected) {
		cursor: not-allowed;
		opacity: 0.5;
	}
	
	/* Reaction Box */
	.reaction-box {
		margin-top: 1rem;
		padding: 1rem;
		background: #fff3cd;
		border: 2px solid #ffeeba;
		border-radius: 8px;
		text-align: center;
	}
	
	.reaction-box.game-over {
		background: #f8d7da;
		border-color: #f5c6cb;
	}
	
	.anger-change {
		font-size: 1.2rem;
		font-weight: bold;
		color: #dc3545;
		margin-bottom: 0.5rem;
	}
	
	.reaction-box p {
		margin: 0;
		font-size: 1.1rem;
		color: #856404;
	}
	
	.game-over-text {
		margin-top: 1rem !important;
		font-size: 1.3rem !important;
		font-weight: bold;
		color: #dc3545 !important;
		animation: pulse 1s ease-in-out infinite;
	}
	
	@keyframes pulse {
		0%, 100% { transform: scale(1); }
		50% { transform: scale(1.05); }
	}
	
	/* Result Screen */
	.result-screen {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
	}
	
	.result-emoji {
		font-size: 5rem;
		margin-bottom: 2rem;
		animation: bounce 2s ease-in-out infinite;
	}
	
	@keyframes bounce {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-20px); }
	}
	
	.result-content {
		background: white;
		border-radius: 12px;
		padding: 2rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		margin-top: 2rem;
	}
	
	.result-content h2 {
		font-size: 2rem;
		color: #333;
		margin: 0 0 0.5rem 0;
	}
	
	.result-content h3 {
		font-size: 1.3rem;
		color: #764ba2;
		margin: 0 0 1rem 0;
	}
	
	.result-content p {
		font-size: 1.1rem;
		color: #666;
		margin-bottom: 2rem;
	}
	
	.final-stats {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin-bottom: 2rem;
		padding: 1rem;
		background: #f8f9fa;
		border-radius: 8px;
	}
	
	.stat {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.stat-label {
		font-size: 0.9rem;
		color: #666;
		margin-bottom: 0.25rem;
	}
	
	.stat-value {
		font-size: 1.5rem;
		font-weight: bold;
		color: #764ba2;
	}
	
	.action-buttons {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	
	.share-button, .restart-button {
		padding: 1rem 2rem;
		border: none;
		border-radius: 8px;
		font-size: 1.1rem;
		font-weight: bold;
		cursor: pointer;
		transition: all 0.2s ease;
	}
	
	.share-button {
		background: #28a745;
		color: white;
	}
	
	.share-button:hover {
		background: #218838;
		transform: translateY(-2px);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}
	
	.restart-button {
		background: #764ba2;
		color: white;
	}
	
	.restart-button:hover {
		background: #5a3a7e;
		transform: translateY(-2px);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}
	
	@media (max-width: 768px) {
		.quiz-header h1 {
			font-size: 2rem;
		}
		
		.question-text {
			font-size: 1.2rem;
		}
		
		.answer-button {
			font-size: 1rem;
			padding: 0.75rem 1rem;
		}
		
		.result-emoji {
			font-size: 4rem;
		}
		
		.action-buttons {
			gap: 0.75rem;
		}
		
		.share-button, .restart-button {
			font-size: 1rem;
			padding: 0.75rem 1.5rem;
		}
	}
</style>