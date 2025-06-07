// @ts-nocheck
// src/lib/data/questions.js

export const questions = [
	{
		id: 1,
		question: "She says 'I'm fine.' What do you do?",
		category: "classic",
		answers: [
			{
				text: "Great! Let's watch the game then.",
				anger: 35,
				reaction: "Oh sweetie, 'fine' never means fine! 📺"
			},
			{
				text: "What's wrong, babe?",
				anger: 10,
				reaction: "At least you're trying to understand! 💕"
			},
			{
				text: "Want a hug?",
				anger: 5,
				reaction: "Actions over words. Smart move! 🤗"
			},
			{
				text: "*Start apologizing randomly*",
				anger: 20,
				reaction: "Now she's confused. What did you do? 🤔"
			}
		]
	},
	{
		id: 2,
		question: "How do I look in this outfit?",
		category: "appearance",
		answers: [
			{
				text: "You look stunning!",
				anger: 8,
				reaction: "Quick and confident. She likes that! 😊"
			},
			{
				text: "Turn around, let me see properly",
				anger: 5,
				reaction: "You're actually paying attention! 👗"
			},
			{
				text: "Maybe try the blue one?",
				anger: 25,
				reaction: "So this one isn't good enough? 😤"
			},
			{
				text: "You always look beautiful",
				anger: 12,
				reaction: "Sweet but generic. Be specific! 🙄"
			}
		]
	},
	{
		id: 3,
		question: "My friend Sarah is really nice, right?",
		category: "social",
		answers: [
			{
				text: "Yeah, she's cool!",
				anger: 8,
				reaction: "Casual and safe. Good answer! 😌"
			},
			{
				text: "She's okay, I guess",
				anger: 18,
				reaction: "Just okay? That's her bestie! 😒"
			},
			{
				text: "Not as nice as you!",
				anger: 6,
				reaction: "Smooth redirect! Points for you! 💕"
			},
			{
				text: "Which one is Sarah again?",
				anger: 30,
				reaction: "You've met her 5 times! 😠"
			}
		]
	},
	{
		id: 4,
		question: "Do you remember what today is?",
		category: "memory",
		answers: [
			{
				text: "Of course! *nervous smile*",
				anger: 15,
				reaction: "That's not convincing at all... 😏"
			},
			{
				text: "The day I get to see you!",
				anger: 7,
				reaction: "Cheesy but she'll take it! 💝"
			},
			{
				text: "Our monthiversary!",
				anger: 10,
				reaction: "Close! It's just Tuesday. Overthinker! 😅"
			},
			{
				text: "Tuesday?",
				anger: 5,
				reaction: "Correct! Sometimes it's just Tuesday! ✅"
			}
		]
	},
	{
		id: 5,
		question: "What am I thinking right now?",
		category: "telepathy",
		answers: [
			{
				text: "Food?",
				anger: 5,
				reaction: "Actually yes! You know her well! 🍕"
			},
			{
				text: "How amazing I am?",
				anger: 10,
				reaction: "Someone's confident today! 😏"
			},
			{
				text: "Something that's bothering you?",
				anger: 8,
				reaction: "Emotionally aware. Not bad! 💭"
			},
			{
				text: "No clue, tell me!",
				anger: 12,
				reaction: "At least you're honest! 🤷‍♀️"
			}
		]
	},
	{
		id: 6,
		question: "My mom is calling. What do you do?",
		category: "family",
		answers: [
			{
				text: "Hand you the phone",
				anger: 3,
				reaction: "Perfect! You know the drill! 📱"
			},
			{
				text: "Say hi first!",
				anger: 5,
				reaction: "Polite! Mom likes you! 👋"
			},
			{
				text: "Pretend we're busy",
				anger: 15,
				reaction: "Never avoid her mother! 😨"
			},
			{
				text: "Answer it for you",
				anger: 10,
				reaction: "Bold but risky move! 📞"
			}
		]
	},
	{
		id: 7,
		question: "I've been quiet for a while...",
		category: "mood",
		answers: [
			{
				text: "*Quietly hold her hand*",
				anger: 3,
				reaction: "Silent support. Perfect! 🤝"
			},
			{
				text: "Penny for your thoughts?",
				anger: 6,
				reaction: "Gentle approach. Nice! 💭"
			},
			{
				text: "Did I do something?",
				anger: 12,
				reaction: "Why assume it's about you? 🙄"
			},
			{
				text: "*Also stay quiet*",
				anger: 10,
				reaction: "Two can play this game? 🤐"
			}
		]
	},
	{
		id: 8,
		question: "Which photo should I post?",
		category: "social",
		answers: [
			{
				text: "*Study them* The lighting in this one!",
				anger: 4,
				reaction: "You actually looked! MVP! 📸"
			},
			{
				text: "The left one",
				anger: 8,
				reaction: "But why though? Explain! 🤔"
			},
			{
				text: "They're the same picture",
				anger: 15,
				reaction: "Look closer! They're different! 😤"
			},
			{
				text: "Post both!",
				anger: 6,
				reaction: "Modern problems require modern solutions! 📱"
			}
		]
	},
	{
		id: 9,
		question: "I'm running late. You:",
		category: "time",
		answers: [
			{
				text: "Text me when you're safe!",
				anger: 5,
				reaction: "Caring and understanding! 💕"
			},
			{
				text: "How late?",
				anger: 15,
				reaction: "Fair question but sounds pushy! ⏰"
			},
			{
				text: "Again?",
				anger: 35,
				reaction: "Not helpful! She knows! 😠"
			},
			{
				text: "No worries, see you soon",
				anger: 8,
				reaction: "Chill and supportive! 😊"
			}
		]
	},
	{
		id: 10,
		question: "We need to talk...",
		category: "serious",
		answers: [
			{
				text: "I'm listening",
				anger: 6,
				reaction: "Mature response! Good job! 👂"
			},
			{
				text: "Uh oh, am I in trouble?",
				anger: 12,
				reaction: "Making it about you already? 😅"
			},
			{
				text: "*Deep breath* Okay",
				anger: 8,
				reaction: "Preparing yourself. Fair! 😮‍💨"
			},
			{
				text: "Can it wait?",
				anger: 40,
				reaction: "No, it can't wait! 😤"
			}
		]
	},
	{
		id: 11,
		question: "I'm craving something sweet",
		category: "food",
		answers: [
			{
				text: "Ice cream run?",
				anger: 3,
				reaction: "You read her mind! 🍦"
			},
			{
				text: "I'll make you hot chocolate",
				anger: 2,
				reaction: "Boyfriend of the year! ☕"
			},
			{
				text: "There's fruit in the fridge",
				anger: 12,
				reaction: "Fruit? She said SWEET! 🙄"
			},
			{
				text: "You're sweet enough",
				anger: 8,
				reaction: "Cute but she wants actual sugar! 🍫"
			}
		]
	},
	{
		id: 12,
		question: "Notice anything different?",
		category: "appearance",
		answers: [
			{
				text: "*Scan carefully* Your nails!",
				anger: 5,
				reaction: "Good eye! You're learning! 💅"
			},
			{
				text: "New haircut?",
				anger: 8,
				reaction: "Default guess but acceptable! ✂️"
			},
			{
				text: "You look extra beautiful today",
				anger: 10,
				reaction: "Sweet but you didn't answer! 😊"
			},
			{
				text: "Uhh... no?",
				anger: 20,
				reaction: "She got her eyebrows done! Pay attention! 😡"
			}
		]
	},
	{
		id: 13,
		question: "My best friend is coming over",
		category: "social",
		answers: [
			{
				text: "Nice! I'll grab snacks",
				anger: 2,
				reaction: "Helpful and welcoming! 🍿"
			},
			{
				text: "Cool, I'll give you space",
				anger: 5,
				reaction: "Understanding boundaries! 👍"
			},
			{
				text: "Again?",
				anger: 15,
				reaction: "Her friends are important! 😒"
			},
			{
				text: "Want me to stay or go?",
				anger: 6,
				reaction: "Good communication! 💬"
			}
		]
	},
	{
		id: 14,
		question: "I'm cold",
		category: "comfort",
		answers: [
			{
				text: "*Give her your jacket*",
				anger: 2,
				reaction: "Classic gentleman move! 🧥"
			},
			{
				text: "Want to cuddle?",
				anger: 4,
				reaction: "Smooth and practical! 🤗"
			},
			{
				text: "I told you to bring a jacket",
				anger: 18,
				reaction: "Not the time for 'I told you so'! 😤"
			},
			{
				text: "Let's go inside",
				anger: 6,
				reaction: "Problem solver! 🏠"
			}
		]
	},
	{
		id: 15,
		question: "This movie is boring",
		category: "entertainment",
		answers: [
			{
				text: "Want to watch something else?",
				anger: 3,
				reaction: "Flexible and caring! 📺"
			},
			{
				text: "But you picked it...",
				anger: 15,
				reaction: "Don't remind her! 😑"
			},
			{
				text: "Let's make it interesting *wink*",
				anger: 5,
				reaction: "Cheeky! She likes it! 😏"
			},
			{
				text: "Almost over anyway",
				anger: 10,
				reaction: "So her time doesn't matter? 🙄"
			}
		]
	},
	{
		id: 16,
		question: "I had the weirdest dream",
		category: "conversation",
		answers: [
			{
				text: "Tell me everything!",
				anger: 3,
				reaction: "Showing interest! Good! 💭"
			},
			{
				text: "Was I in it?",
				anger: 8,
				reaction: "Making it about you? 🙄"
			},
			{
				text: "Dreams are so random",
				anger: 10,
				reaction: "She wants to share, not philosophize! 😒"
			},
			{
				text: "*Get comfy* Story time!",
				anger: 2,
				reaction: "Perfect response! 🛋️"
			}
		]
	},
	{
		id: 17,
		question: "Should I cut my hair short?",
		category: "appearance",
		answers: [
			{
				text: "You'd look great either way!",
				anger: 5,
				reaction: "Safe and supportive! 💇‍♀️"
			},
			{
				text: "How short are we talking?",
				anger: 4,
				reaction: "Engaged in the decision! 📏"
			},
			{
				text: "Nooo, I love your long hair!",
				anger: 12,
				reaction: "It's HER hair! 😤"
			},
			{
				text: "Show me some pictures!",
				anger: 3,
				reaction: "Helping her decide! Perfect! 📱"
			}
		]
	},
	{
		id: 18,
		question: "I'm so stressed about work",
		category: "support",
		answers: [
			{
				text: "Want to talk about it?",
				anger: 3,
				reaction: "Supportive listener! 💕"
			},
			{
				text: "Let me give you a massage",
				anger: 2,
				reaction: "Action over words! 💆‍♀️"
			},
			{
				text: "Just quit!",
				anger: 15,
				reaction: "Not helpful advice! 😒"
			},
			{
				text: "Wine night?",
				anger: 5,
				reaction: "You know her coping mechanism! 🍷"
			}
		]
	},
	{
		id: 19,
		question: "Do you think she's pretty?",
		category: "trap",
		answers: [
			{
				text: "Who?",
				anger: 6,
				reaction: "Playing dumb might work! 🤷"
			},
			{
				text: "Not as pretty as you",
				anger: 4,
				reaction: "Classic redirect! 💕"
			},
			{
				text: "I didn't notice",
				anger: 10,
				reaction: "She saw you looking! 👀"
			},
			{
				text: "Sure, but so what?",
				anger: 8,
				reaction: "Honest but risky! 😬"
			}
		]
	},
	{
		id: 20,
		question: "I'm thinking of starting yoga",
		category: "fitness",
		answers: [
			{
				text: "That's awesome! Go for it!",
				anger: 2,
				reaction: "Supportive boyfriend award! 🧘‍♀️"
			},
			{
				text: "Can I join?",
				anger: 8,
				reaction: "This might be her thing! 🤔"
			},
			{
				text: "You're perfect as you are",
				anger: 10,
				reaction: "She wants to be healthy, not perfect! 😤"
			},
			{
				text: "I'll buy you a yoga mat!",
				anger: 3,
				reaction: "Supportive with action! 🎁"
			}
		]
	},
	{
		id: 21,
		question: "Valentine's Day plans?",
		category: "holiday",
		answers: [
			{
				text: "Already booked our spot!",
				anger: 3,
				reaction: "Prepared boyfriend! 🌹"
			},
			{
				text: "Whatever you want!",
				anger: 10,
				reaction: "Make some effort! 🙄"
			},
			{
				text: "Let's keep it simple",
				anger: 15,
				reaction: "Simple = lazy to her! 😒"
			},
			{
				text: "Surprise! Can't tell you!",
				anger: 5,
				reaction: "Mysterious! She's intrigued! 🎁"
			}
		]
	},
	{
		id: 22,
		question: "My ex texted me",
		category: "danger",
		answers: [
			{
				text: "Block them",
				anger: 4,
				reaction: "Protective! She likes that! 🚫"
			},
			{
				text: "What did they want?",
				anger: 8,
				reaction: "Curious but concerning! 🤔"
			},
			{
				text: "That's weird",
				anger: 5,
				reaction: "On her side! Good! 😤"
			},
			{
				text: "Which ex?",
				anger: 15,
				reaction: "How many are there?! 😠"
			}
		]
	},
	{
		id: 23,
		question: "Rate my outfit",
		category: "appearance",
		answers: [
			{
				text: "11/10!",
				anger: 3,
				reaction: "Enthusiastic approval! ⭐"
			},
			{
				text: "You look amazing!",
				anger: 5,
				reaction: "Classic but effective! 😍"
			},
			{
				text: "It's nice",
				anger: 12,
				reaction: "Just nice?! 😒"
			},
			{
				text: "*Chef's kiss*",
				anger: 4,
				reaction: "Creative approval! 👨‍🍳"
			}
		]
	},
	{
		id: 24,
		question: "I'm hangry",
		category: "food",
		answers: [
			{
				text: "*Already ordering food*",
				anger: 2,
				reaction: "You know the drill! 🍕"
			},
			{
				text: "What do you want to eat?",
				anger: 8,
				reaction: "Don't make her decide when hangry! 😤"
			},
			{
				text: "Hi Hangry, I'm dad",
				anger: 15,
				reaction: "NOT the time for dad jokes! 😠"
			},
			{
				text: "*Hand her snacks*",
				anger: 3,
				reaction: "Emergency snacks ready! 🍫"
			}
		]
	},
	{
		id: 25,
		question: "Do you love me?",
		category: "classic",
		answers: [
			{
				text: "More than pizza!",
				anger: 4,
				reaction: "That's saying something! 🍕💕"
			},
			{
				text: "Of course!",
				anger: 8,
				reaction: "Say it with more feeling! 😐"
			},
			{
				text: "*Kiss her instead*",
				anger: 2,
				reaction: "Actions speak louder! 💋"
			},
			{
				text: "Why do you ask?",
				anger: 12,
				reaction: "Just say yes! 🙄"
			}
		]
	}
];

// Helper function to get random questions
export function getRandomQuestions(count = 10) {
	const shuffled = [...questions].sort(() => Math.random() - 0.5);
	return shuffled.slice(0, count);
}

// Helper function to get questions by category
export function getQuestionsByCategory(category) {
	return questions.filter(q => q.category === category);
}

// Question categories for future features
export const categories = {
	classic: "Classic Questions",
	trap: "Trap Questions",
	memory: "Memory Tests",
	telepathy: "Mind Reading",
	family: "Family Matters",
	mood: "Mood Detection",
	social: "Social Situations",
	time: "Time Management",
	serious: "Serious Talks",
	food: "Food Decisions",
	appearance: "Appearance",
	entertainment: "Entertainment",
	comfort: "Comfort Tests",
	conversation: "Conversations",
	support: "Being Supportive",
	fitness: "Health & Fitness",
	danger: "Danger Zone",
	holiday: "Special Occasions"
};