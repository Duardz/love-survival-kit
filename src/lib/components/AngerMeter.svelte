<!-- src/lib/components/AngerMeter.svelte -->
<script>
	export let anger = 0;
	export let shake = false;
	
	$: meterClass = getAngerClass(anger);
	$: moodEmoji = getMoodEmoji(anger);
	$: moodText = getMoodText(anger);
	
	// @ts-ignore
	function getAngerClass(level) {
		if (level <= 20) return 'calm';
		if (level <= 40) return 'annoyed';
		if (level <= 60) return 'angry';
		if (level <= 80) return 'furious';
		return 'nuclear';
	}
	
	// @ts-ignore
	function getMoodEmoji(level) {
		if (level === 0) return '😊';
		if (level <= 20) return '😐';
		if (level <= 40) return '😤';
		if (level <= 60) return '😠';
		if (level <= 80) return '😡';
		return '🤬';
	}
	
	// @ts-ignore
	function getMoodText(level) {
		if (level === 0) return "She's actually happy!";
		if (level <= 20) return "She's suspicious...";
		if (level <= 40) return "Silent treatment activated";
		if (level <= 60) return "She's 'fine' (NOT FINE!)";
		if (level <= 80) return "Couch territory";
		if (level < 100) return "DANGER ZONE!";
		return "GAME OVER - You're single";
	}
</script>

<div class="anger-meter-container" class:shake>
	<h3>GF Anger Meter™</h3>
	
	<div class="meter-wrapper">
		<div class="meter-background">
			<div 
				class="meter-fill {meterClass}" 
				style="width: {Math.min(anger, 100)}%"
			>
				<div class="meter-glow"></div>
			</div>
			
			<!-- Danger markers -->
			<div class="danger-zone" style="left: 80%">
				<div class="danger-line"></div>
				<span class="danger-label">Danger</span>
			</div>
		</div>
		
		<div class="percentage">{anger}%</div>
	</div>
	
	<div class="mood-display">
		<div class="mood-emoji">{moodEmoji}</div>
		<div class="mood-text">{moodText}</div>
	</div>
	
	{#if anger >= 80}
		<div class="warning-flash">⚠️ CRITICAL ⚠️</div>
	{/if}
</div>

<style>
	.anger-meter-container {
		background: rgba(255, 255, 255, 0.95);
		border-radius: 12px;
		padding: 1.5rem;
		margin-bottom: 2rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		position: relative;
		overflow: hidden;
	}
	
	.anger-meter-container.shake {
		animation: shake 0.5s ease-in-out;
	}
	
	@keyframes shake {
		0%, 100% { transform: translateX(0); }
		10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
		20%, 40%, 60%, 80% { transform: translateX(2px); }
	}
	
	h3 {
		text-align: center;
		margin: 0 0 1rem 0;
		color: #333;
		font-size: 1.2rem;
	}
	
	.meter-wrapper {
		position: relative;
		margin-bottom: 1rem;
	}
	
	.meter-background {
		width: 100%;
		height: 40px;
		background: #f0f0f0;
		border-radius: 20px;
		overflow: hidden;
		position: relative;
		box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
	}
	
	.meter-fill {
		height: 100%;
		border-radius: 20px;
		transition: width 0.5s ease, background-color 0.5s ease;
		position: relative;
		overflow: hidden;
	}
	
	.meter-fill.calm {
		background: linear-gradient(135deg, #28a745, #20c997);
	}
	
	.meter-fill.annoyed {
		background: linear-gradient(135deg, #ffc107, #fd7e14);
	}
	
	.meter-fill.angry {
		background: linear-gradient(135deg, #fd7e14, #dc3545);
	}
	
	.meter-fill.furious {
		background: linear-gradient(135deg, #dc3545, #bd2130);
	}
	
	.meter-fill.nuclear {
		background: linear-gradient(135deg, #bd2130, #800020);
		animation: pulse 1s ease-in-out infinite;
	}
	
	@keyframes pulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.8; }
	}
	
	.meter-glow {
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, 
			transparent, 
			rgba(255, 255, 255, 0.3), 
			transparent
		);
		animation: glow 2s ease-in-out infinite;
	}
	
	@keyframes glow {
		0% { left: -100%; }
		100% { left: 100%; }
	}
	
	.danger-zone {
		position: absolute;
		top: 0;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.danger-line {
		width: 2px;
		height: 100%;
		background: #dc3545;
		opacity: 0.5;
	}
	
	.danger-label {
		position: absolute;
		top: -20px;
		font-size: 0.75rem;
		color: #dc3545;
		font-weight: bold;
		white-space: nowrap;
	}
	
	.percentage {
		position: absolute;
		right: 1rem;
		top: 50%;
		transform: translateY(-50%);
		font-size: 1.2rem;
		font-weight: bold;
		color: #333;
		text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
	}
	
	.mood-display {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-top: 1rem;
	}
	
	.mood-emoji {
		font-size: 2.5rem;
		animation: bounce 2s ease-in-out infinite;
	}
	
	@keyframes bounce {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-5px); }
	}
	
	.mood-text {
		font-size: 1.1rem;
		color: #666;
		font-weight: 500;
	}
	
	.warning-flash {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: rgba(220, 53, 69, 0.9);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		font-weight: bold;
		animation: flash 1s ease-in-out infinite;
		pointer-events: none;
	}
	
	@keyframes flash {
		0%, 100% { opacity: 0; }
		50% { opacity: 1; }
	}
	
	@media (max-width: 768px) {
		.anger-meter-container {
			padding: 1rem;
		}
		
		.mood-display {
			flex-direction: column;
			gap: 0.5rem;
		}
		
		.mood-emoji {
			font-size: 2rem;
		}
		
		.mood-text {
			font-size: 0.9rem;
			text-align: center;
		}
	}
</style>