// @ts-nocheck
// src/lib/stores/quiz.js
import { writable, derived } from 'svelte/store';
import { getRandomQuestions } from '$lib/data/questions.js';

function createQuizStore() {
	// Initial state
	const initialState = {
		questions: [],
		currentQuestionIndex: 0,
		anger: 0,
		gameState: 'ready', // 'ready', 'playing', 'reaction', 'finished'
		selectedAnswer: null,
		showReaction: false,
		score: 0,
		questionsAnswered: 0
	};
	
	const { subscribe, set, update } = writable(initialState);
	
	return {
		subscribe,
		
		// Start a new game - questions are selected ONCE here
		startGame: () => {
			const randomQuestions = getRandomQuestions(10);
			update(state => ({
				...initialState,
				questions: randomQuestions,
				gameState: 'playing'
			}));
		},
		
		// Select an answer
		selectAnswer: (answer) => {
			update(state => {
				if (state.gameState !== 'playing') return state;
				
				const newAnger = Math.min(state.anger + answer.anger, 100);
				
				return {
					...state,
					selectedAnswer: answer,
					anger: newAnger,
					showReaction: true,
					gameState: 'reaction',
					questionsAnswered: state.questionsAnswered + 1
				};
			});
		},
		
		// Move to next question - just increment index, no recalculation
		nextQuestion: () => {
			update(state => {
				// Check if game should end
				if (state.anger >= 100 || state.currentQuestionIndex >= state.questions.length - 1) {
					return {
						...state,
						gameState: 'finished'
					};
				}
				
				return {
					...state,
					currentQuestionIndex: state.currentQuestionIndex + 1,
					selectedAnswer: null,
					showReaction: false,
					gameState: 'playing'
				};
			});
		},
		
		// End the game
		endGame: () => {
			update(state => ({
				...state,
				gameState: 'finished'
			}));
		},
		
		// Reset for new game
		reset: () => {
			set(initialState);
		}
	};
}

export const quizStore = createQuizStore();

// Derived stores for computed values
export const currentQuestion = derived(
	quizStore,
	$quiz => $quiz.questions[$quiz.currentQuestionIndex] || null
);

export const progress = derived(
	quizStore,
	$quiz => {
		if (!$quiz.questions.length) return 0;
		return (($quiz.currentQuestionIndex + 1) / $quiz.questions.length) * 100;
	}
);

export const finalResult = derived(
	quizStore,
	$quiz => {
		const anger = $quiz.anger;
		
		if (anger === 0) {
			return {
				title: "IMPOSSIBLE! Are you a mind reader?! 🔮",
				subtitle: "Perfect BF Award 🏆",
				description: "This is literally impossible. Did you hack the game?",
				emoji: "🦄",
				share: "I achieved the IMPOSSIBLE in The BF/GF Trials - 0% anger!"
			};
		} else if (anger <= 20) {
			return {
				title: "Good BF Award! 🏆",
				subtitle: "Dragon Tamer Elite",
				description: "You actually survived! Share this miracle with the world!",
				emoji: "😎",
				share: `Elite Dragon Tamer here! Only ${anger}% anger!`
			};
		} else if (anger <= 50) {
			return {
				title: "Not Bad! You Survived! 🎖️",
				subtitle: "Dragon Survivor",
				description: "She's only moderately angry. That's basically a win!",
				emoji: "😅",
				share: `I survived The BF/GF Trials with ${anger}% anger!`
			};
		} else if (anger <= 80) {
			return {
				title: "Walking on Thin Ice ❄️",
				subtitle: "Danger Zone Navigator",
				description: "You're sleeping on the couch, but at least you're still together!",
				emoji: "🥶",
				share: `Barely survived with ${anger}% anger. Couch life for me!`
			};
		} else if (anger < 100) {
			return {
				title: "In the Doghouse 🏚️",
				subtitle: "Professional Apologizer",
				description: "Start practicing your apology speech. You'll need it.",
				emoji: "🐕",
				share: `In the doghouse with ${anger}% anger. Send help!`
			};
		} else {
			return {
				title: "GAME OVER - Single Again 💔",
				subtitle: "Relationship Status: It's Complicated",
				description: "Time to download dating apps... again.",
				emoji: "💀",
				share: "I maxed out the anger meter. Single and ready to mingle... again 💔"
			};
		}
	}
);