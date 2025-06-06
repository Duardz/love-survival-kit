<!-- src/routes/bf-gf-trials/+page.svelte -->
<script>
// @ts-nocheck

	// @ts-ignore
	import { onMount } from 'svelte';
	import AngerMeter from '$lib/components/AngerMeter.svelte';
	import { questions } from '$lib/data/questions.js';
	
	let currentQuestion = 0;
	let anger = 0;
	let gameState = 'playing'; // 'playing', 'reaction', 'finished'
	// @ts-ignore
	let selectedAnswer = null;
	let showReaction = false;
	let shakeScreen = false;
	let finalResult = '';
	
	$: currentQ = questions[currentQuestion];
	$: progress = ((currentQuestion + 1) / questions.length) * 100;
	
	// @ts-ignore
	function selectAnswer(answer) {
		if (gameState !== 'playing') return;
		
		selectedAnswer = answer;
		gameState = 'reaction';
		showReaction = true;
		
		// Add anger
		// @ts-ignore
		const oldAnger = anger;
		anger = Math.min(anger + answer.anger, 100);
		
		// Shake effect for high anger increases
		if (answer.anger >= 30) {
			shakeScreen = true;
			setTimeout(() => shakeScreen = false, 500);
		}
		
		// Check if game over (anger hit 100%)
		if (anger >= 100) {
			// Game over - show reaction briefly then end
			setTimeout(() => {
				finishGame();
			}, 2000);
		} else {
			// Auto advance after showing reaction
			setTimeout(() => {
				nextQuestion();
			}, 3000);
		}
	}
	
	function nextQuestion() {
		if (currentQuestion < questions.length - 1) {
			currentQuestion++;
			gameState = 'playing';
			selectedAnswer = null;
			showReaction = false;
		} else {
			finishGame();
		}
	}
	
	function finishGame() {
		gameState = 'finished';
		calculateResult();
	}
	
	function calculateResult() {
		if (anger === 0) {
			// @ts-ignore
			finalResult = {
				title: "IMPOSSIBLE! Are you a mind reader?! 🔮",
				subtitle: "Perfect BF Award 🏆",
				description: "This is literally impossible. Did you hack the game?",
				emoji: "🦄"
			};
		} else if (anger <= 20) {
			// @ts-ignore
			finalResult = {
				title: "Good BF Award! 🏆",
				subtitle: "Dragon Tamer Elite",
				description: "You actually survived! Share this miracle with the world!",
				emoji: "😎"
			};
		} else if (anger <= 50) {
			// @ts-ignore
			finalResult = {
				title: "Not Bad! You Survived! 🎖️",
				subtitle: "Dragon Survivor",
				description: "She's only moderately angry. That's basically a win!",
				emoji: "😅"
			};
		} else if (anger <= 80) {
			// @ts-ignore
			finalResult = {
				title: "Walking on Thin Ice ❄️",
				subtitle: "Danger Zone Navigator",
				description: "You're sleeping on the couch, but at least you're still together!",
				emoji: "🥶"
			};
		} else if (anger < 100) {
			// @ts-ignore
			finalResult = {
				title: "In the Doghouse 🏚️",
				subtitle: "Professional Apologizer",
				description: "Start practicing your apology speech. You'll need it.",
				emoji: "🐕"
			};
		} else {
			// @ts-ignore
			finalResult = {
				title: "GAME OVER - Single Again 💔",
				subtitle: "Relationship Status: It's Complicated",
				description: "Time to download dating apps... again.",
				emoji: "💀"
			};
		}
	}
	
	function restart() {
		currentQuestion = 0;
		anger = 0;
		gameState = 'playing';
		selectedAnswer = null;
		showReaction = false;
		finalResult = '';
	}
	
	function shareResult() {
		// Simple share - in real app would use html-to-image
		// @ts-ignore
		const text = `I survived The BF/GF Trials with ${anger}% anger! ${finalResult.title} Can you do better? #DragonSurvivor`;
		
		if (navigator.share) {
			navigator.share({
				title: 'Love Survival Kit - BF/GF Trials',
				text: text,
				url: window.location.href
			});
		} else {
			// Fallback - copy to clipboard
			navigator.clipboard.writeText(text);
			alert('Result copied to clipboard! Share your survival story! 📋');
		}
	}
</script>

<div class="quiz-container" class:shake={shakeScreen}>
	<header class="quiz-header">
		<a href="/" class="back-button">← Back to Survival Kit</a>
		<h1>The BF/GF Trials</h1>
		<p>Can you keep her anger below 100%? (Spoiler: No)</p>
	</header>
	
	{#if gameState !== 'finished'}
		<!-- Progress Bar -->
		<div class="progress-container">
			<div class="progress-bar" style="width: {progress}%"></div>
			<span class="progress-text">Question {currentQuestion + 1} of {questions.length}</span>
		</div>
		
		<!-- Anger Meter -->
		<AngerMeter {anger} shake={shakeScreen} />
		
		<!-- Question -->
		<div class="question-card">
			<h2 class="question-text">{currentQ.question}</h2>
			
			<div class="answers-grid">
				{#each currentQ.answers as answer}
					<button 
						class="answer-button"
						class:selected={selectedAnswer === answer}
						class:disabled={gameState === 'reaction'}
						on:click={() => selectAnswer(answer)}
						disabled={gameState === 'reaction'}
					>
						{answer.text}
					</button>
				{/each}
			</div>
			
			{#if showReaction && selectedAnswer}
				<div class="reaction-box" class:game-over={anger >= 100}>
					<div class="anger-change">+{selectedAnswer.anger}% Anger!</div>
					<p>{selectedAnswer.reaction}</p>
					{#if anger >= 100}
						<p class="game-over-text">💔 CRITICAL RELATIONSHIP FAILURE! 💔</p>
					{/if}
				</div>
			{/if}
		</div>
	{:else}
		<!-- Game Over Screen -->
		<div class="result-screen">
			<div class="result-emoji">{finalResult.emoji}</div>
			
			<AngerMeter {anger} />
			
			<div class="result-content">
				<h2>{finalResult.title}</h2>
				<h3>{finalResult.subtitle}</h3>
				<p>{finalResult.description}</p>
				
				<div class="final-stats">
					<div class="stat">
						<span class="stat-label">Final Anger:</span>
						<span class="stat-value">{anger}%</span>
					</div>
					<div class="stat">
						<span class="stat-label">Survival Rate:</span>
						<span class="stat-value">{100 - anger}%</span>
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
		transition: all 0.2s ease;
		text-align: left;
		color: #333;
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
	}
	
	.answer-button.disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}
	
	.reaction-box {
		margin-top: 1rem;
		padding: 1rem;
		background: #fff3cd;
		border: 2px solid #ffeeba;
		border-radius: 8px;
		text-align: center;
		animation: slideIn 0.3s ease;
	}
	
	.reaction-box.game-over {
		background: #f8d7da;
		border-color: #f5c6cb;
	}
	
	@keyframes slideIn {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
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