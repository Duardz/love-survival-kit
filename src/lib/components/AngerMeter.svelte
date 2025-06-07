<!-- src/lib/components/AngerMeter.svelte -->
<script>
	export let anger = 0;
	export let shake = false;
	export let compact = false;
	
// @ts-ignore
		$: meterClass = getAngerClass(anger);
	$: moodEmoji = getMoodEmoji(anger);
	$: moodText = getMoodText(anger);
	$: meterColor = getMeterColor(anger);
	
	// @ts-ignore
	function getAngerClass(level) {
		if (level <= 20) return 'calm';
		if (level <= 40) return 'annoyed';
		if (level <= 60) return 'angry';
		if (level <= 80) return 'furious';
		return 'nuclear';
	}
	
	// @ts-ignore
	function getMeterColor(level) {
		if (level <= 20) return '#10b981';
		if (level <= 40) return '#f59e0b';
		if (level <= 60) return '#f97316';
		if (level <= 80) return '#ef4444';
		return '#dc2626';
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
		return "It's over...";
	}
</script>

<div class="anger-meter" class:shake class:compact>
	<!-- Header -->
	<div class="meter-header">
		<div class="meter-info">
			<h3 class="meter-title">GF Anger Level</h3>
			<div class="meter-subtitle">{moodText}</div>
		</div>
		<div class="meter-display">
			<span class="meter-emoji">{moodEmoji}</span>
			<span class="meter-percentage" style="color: {meterColor}">{anger}%</span>
		</div>
	</div>
	
	<!-- Progress Bar -->
	<div class="meter-container">
		<div class="meter-track">
			<div 
				class="meter-fill" 
				style="width: {Math.min(anger, 100)}%; background-color: {meterColor}"
			>
				<span class="meter-glow"></span>
			</div>
			
			<!-- Danger markers -->
			<div class="meter-markers">
				<div class="marker" style="left: 20%"></div>
				<div class="marker" style="left: 40%"></div>
				<div class="marker" style="left: 60%"></div>
				<div class="marker danger" style="left: 80%"></div>
			</div>
		</div>
		
		<!-- Scale labels -->
		{#if !compact}
			<div class="meter-labels">
				<span>Calm</span>
				<span>Annoyed</span>
				<span>Angry</span>
				<span>Furious</span>
				<span class="danger-label">DANGER</span>
			</div>
		{/if}
	</div>
	
	<!-- Warning for high anger -->
	{#if anger >= 80}
		<div class="warning-message">
			⚠️ Critical anger levels detected! Proceed with extreme caution!
		</div>
	{/if}
</div>

<style>
	.anger-meter {
		background: white;
		border-radius: 16px;
		padding: 1.5rem;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
		position: relative;
		overflow: hidden;
		transition: transform 150ms ease;
		flex: 1;
		border: 1px solid #e5e7eb;
	}
	
	.anger-meter.compact {
		padding: 1rem;
	}
	
	.anger-meter.shake {
		animation: shake 0.5s ease-in-out;
	}
	
	@keyframes shake {
		0%, 100% { transform: translateX(0); }
		10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
		20%, 40%, 60%, 80% { transform: translateX(2px); }
	}
	
	/* Header */
	.meter-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1.5rem;
	}
	
	.meter-info {
		flex: 1;
	}
	
	.meter-title {
		margin: 0;
		font-size: 0.875rem;
		color: #6b7280;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	
	.meter-subtitle {
		font-size: 1.25rem;
		color: #111827;
		font-weight: 600;
		margin-top: 0.25rem;
	}
	
	.meter-display {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}
	
	.meter-emoji {
		font-size: 2.5rem;
		animation: emoji-pulse 2s ease-in-out infinite;
	}
	
	@keyframes emoji-pulse {
		0%, 100% { transform: scale(1); }
		50% { transform: scale(1.1); }
	}
	
	.meter-percentage {
		font-size: 2rem;
		font-weight: bold;
		transition: color 0.3s ease;
	}
	
	/* Progress Bar */
	.meter-container {
		position: relative;
	}
	
	.meter-track {
		height: 12px;
		background: #f3f4f6;
		border-radius: 6px;
		overflow: visible;
		position: relative;
		box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
	}
	
	.meter-fill {
		height: 100%;
		border-radius: 6px;
		transition: width 0.5s ease, background-color 0.5s ease;
		position: relative;
		overflow: hidden;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	}
	
	.meter-glow {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 50%;
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%);
		border-radius: 6px 6px 0 0;
	}
	
	/* Markers */
	.meter-markers {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 100%;
		pointer-events: none;
	}
	
	.marker {
		position: absolute;
		top: -4px;
		width: 2px;
		height: 20px;
		background: #d1d5db;
		transform: translateX(-50%);
	}
	
	.marker.danger {
		background: #ef4444;
		width: 3px;
	}
	
	/* Labels */
	.meter-labels {
		display: flex;
		justify-content: space-between;
		margin-top: 0.5rem;
		font-size: 0.75rem;
		color: #6b7280;
		position: relative;
	}
	
	.meter-labels span {
		position: absolute;
		transform: translateX(-50%);
	}
	
	.meter-labels span:nth-child(1) { left: 0; transform: none; }
	.meter-labels span:nth-child(2) { left: 20%; }
	.meter-labels span:nth-child(3) { left: 40%; }
	.meter-labels span:nth-child(4) { left: 60%; }
	.meter-labels span:nth-child(5) { 
		left: auto; 
		right: 0; 
		transform: none;
	}
	
	.danger-label {
		color: #ef4444;
		font-weight: 600;
	}
	
	/* Warning Message */
	.warning-message {
		margin-top: 1rem;
		padding: 0.75rem 1rem;
		background: #fef2f2;
		border: 1px solid #fecaca;
		border-radius: 8px;
		color: #dc2626;
		font-size: 0.875rem;
		font-weight: 500;
		text-align: center;
		animation: flash 2s ease-in-out infinite;
	}
	
	@keyframes flash {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.7; }
	}
	
	/* Compact mode */
	.compact .meter-header {
		margin-bottom: 1rem;
	}
	
	.compact .meter-subtitle {
		display: none;
	}
	
	.compact .meter-emoji {
		font-size: 2rem;
	}
	
	.compact .meter-percentage {
		font-size: 1.5rem;
	}
	
	.compact .meter-track {
		height: 8px;
	}
	
	.compact .warning-message {
		font-size: 0.75rem;
		padding: 0.5rem;
	}
	
	/* Mobile styles */
	@media (max-width: 768px) {
		.anger-meter {
			padding: 1rem;
		}
		
		.meter-subtitle {
			font-size: 1rem;
		}
		
		.meter-emoji {
			font-size: 2rem;
		}
		
		.meter-percentage {
			font-size: 1.5rem;
		}
		
		.meter-labels {
			font-size: 0.625rem;
		}
	}
</style>