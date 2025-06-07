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
				anger: 45,
				reaction: "Oh sweetie, 'fine' NEVER means fine! 📺💔"
			},
			{
				text: "I know that tone. Come here, let's talk about what's really bothering you.",
				anger: -10,
				reaction: "You actually learned her language! She's impressed! 💕"
			},
			{
				text: "Are you sure? You seem upset about something.",
				anger: 15,
				reaction: "At least you noticed, but now she's annoyed you're pushing! 🙄"
			},
			{
				text: "*Silently make her favorite tea and sit beside her*",
				anger: -15,
				reaction: "Actions over words. She feels understood! 🍵💗"
			}
		]
	},
	{
		id: 2,
		question: "How do I look in this outfit?",
		category: "appearance",
		answers: [
			{
				text: "The color really brings out your eyes, but I think the black one from last week suits your style better.",
				anger: -8,
				reaction: "Specific, thoughtful, and you remember her outfits! 👗✨"
			},
			{
				text: "You look amazing! Wait, turn around... Yeah, stunning!",
				anger: 12,
				reaction: "Generic enthusiasm. Did you even look properly? 😊"
			},
			{
				text: "It's nice, but maybe try something else?",
				anger: 35,
				reaction: "NICE?! Just nice?! And now she has to change?! 😤"
			},
			{
				text: "You'd look beautiful in a potato sack, but this dress makes you look like a goddess.",
				anger: 8,
				reaction: "Smooth talker, but she wanted honest feedback! 🙄"
			}
		]
	},
	{
		id: 3,
		question: "Sarah just broke up with her boyfriend. I'm going to her place. Coming?",
		category: "social",
		answers: [
			{
				text: "I'll drive you there and pick up ice cream on the way. Text me when you need me.",
				anger: -12,
				reaction: "Perfect balance of support without intruding! 🚗🍦"
			},
			{
				text: "Do you want me to come for support, or is this a girls-only thing?",
				anger: -5,
				reaction: "Emotionally intelligent question! You get it! 💭"
			},
			{
				text: "Again? This is the third time this month...",
				anger: 28,
				reaction: "Insensitive! Her bestie needs support, not judgment! 😒"
			},
			{
				text: "Can't you just call her? I had plans...",
				anger: 42,
				reaction: "Selfish AND dismissive of female friendships! 😠"
			}
		]
	},
	{
		id: 4,
		question: "My ex just texted me. What should I do?",
		category: "trust",
		answers: [
			{
				text: "Block them immediately!",
				anger: 20,
				reaction: "Possessive much? She can handle it herself! 🚫"
			},
			{
				text: "What did they say? How do you feel about it?",
				anger: -8,
				reaction: "Mature response! You trust her and care about her feelings! 💬"
			},
			{
				text: "Your ex? Which one? The gym guy?",
				anger: 25,
				reaction: "Why do you remember her ex's hobbies?! Sus... 🤔"
			},
			{
				text: "That's weird. Want me to look at it with you?",
				anger: -3,
				reaction: "Supportive without being controlling. Good job! 👥"
			}
		]
	},
	{
		id: 5,
		question: "I think your friend Jake has a crush on me.",
		category: "jealousy",
		answers: [
			{
				text: "Well, I can't blame him. You're incredible.",
				anger: -5,
				reaction: "Confident and complimentary! No jealousy detected! 😎"
			},
			{
				text: "Should I talk to him about boundaries?",
				anger: 15,
				reaction: "A bit territorial, but she can handle Jake herself! 💪"
			},
			{
				text: "Jake? No way, you're imagining things.",
				anger: 30,
				reaction: "Dismissing her instincts? She knows when someone's interested! 😤"
			},
			{
				text: "That must be uncomfortable. How do you want to handle it?",
				anger: -10,
				reaction: "Perfect! Acknowledging her feelings and letting her lead! 🌟"
			}
		]
	},
	{
		id: 6,
		question: "My mom thinks you're too skinny/fat/loud/quiet.",
		category: "family",
		answers: [
			{
				text: "I'm sorry she said that. Her opinion doesn't change how perfect you are to me.",
				anger: -15,
				reaction: "Defending her while staying diplomatic! Boyfriend goals! 💕"
			},
			{
				text: "She's probably just concerned about you.",
				anger: 35,
				reaction: "You're taking MOM'S side?! Traitor! 😠"
			},
			{
				text: "Well, moms will be moms! Haha...",
				anger: 25,
				reaction: "Dismissive laughter? This hurt her feelings! 😔"
			},
			{
				text: "That was inappropriate of her. Want me to talk to her, or would you prefer to handle it?",
				anger: -8,
				reaction: "Standing up for her while respecting her autonomy! 🛡️"
			}
		]
	},
	{
		id: 7,
		question: "I dreamt you cheated on me last night.",
		category: "dreams",
		answers: [
			{
				text: "That sounds really upsetting. Come here, let me hold you.",
				anger: -12,
				reaction: "Validating her emotions even from a dream! Emotional IQ 💯"
			},
			{
				text: "It was just a dream! I would never do that!",
				anger: 18,
				reaction: "Defensive response to a DREAM? Suspicious... 🤨"
			},
			{
				text: "That's crazy, dreams don't mean anything.",
				anger: 28,
				reaction: "Calling her crazy AND dismissing her feelings? Bad move! 😤"
			},
			{
				text: "Dream me is an idiot. Real me knows I won the lottery with you.",
				anger: -5,
				reaction: "Humor + reassurance = winning combo! 😄"
			}
		]
	},
	{
		id: 8,
		question: "Which of my friends do you think is the prettiest?",
		category: "trap",
		answers: [
			{
				text: "They're all pretty in different ways, but none of them catch my attention like you do.",
				anger: -8,
				reaction: "Diplomatic AND romantic! Well played! 💕"
			},
			{
				text: "I honestly don't think about your friends that way.",
				anger: -3,
				reaction: "Simple, honest, direct. She believes you! ✅"
			},
			{
				text: "Why are you asking me this? It's a trap!",
				anger: 22,
				reaction: "Calling it a trap makes it worse! Just answer! 🙄"
			},
			{
				text: "Probably Emma, she's got that model look.",
				anger: 40,
				reaction: "You answered WAY too fast and specific! 😡"
			}
		]
	},
	{
		id: 9,
		question: "I've been thinking about our future...",
		category: "serious",
		answers: [
			{
				text: "Me too. What specifically have you been thinking about?",
				anger: -10,
				reaction: "Open, engaged, and ready for serious talk! 💑"
			},
			{
				text: "*Visible panic* Our future? Like... marriage?",
				anger: 20,
				reaction: "The panic in your eyes says everything! 😰"
			},
			{
				text: "Can we talk about this later? The game is on.",
				anger: 45,
				reaction: "THE GAME?! She's talking about your FUTURE! 📺😤"
			},
			{
				text: "I love thinking about our future. Tell me your thoughts.",
				anger: -7,
				reaction: "Enthusiastic and supportive! Green flag! 💚"
			}
		]
	},
	{
		id: 10,
		question: "I feel like you love your PlayStation more than me.",
		category: "priorities",
		answers: [
			{
				text: "I'm sorry you feel that way. Let's plan something special together.",
				anger: -5,
				reaction: "Acknowledging her feelings and offering solutions! 🎮❤️"
			},
			{
				text: "That's ridiculous! I only play like 4 hours a day!",
				anger: 30,
				reaction: "ONLY 4 hours?! You just proved her point! 🎮"
			},
			{
				text: "You're right, I have been gaming too much. What would you like to do together?",
				anger: -12,
				reaction: "Accountability AND initiative! Mature response! 🌟"
			},
			{
				text: "Come on, you know that's not true... right?",
				anger: 18,
				reaction: "Weak denial. Put down the controller! 🙄"
			}
		]
	},
	{
		id: 11,
		question: "We need to talk about your female coworker...",
		category: "jealousy",
		answers: [
			{
				text: "What about her? Has something made you uncomfortable?",
				anger: -8,
				reaction: "Direct, open, and focused on her feelings! 💼"
			},
			{
				text: "There's nothing going on! She's just a colleague!",
				anger: 25,
				reaction: "Too defensive! She didn't even accuse you yet! 😒"
			},
			{
				text: "You mean Lisa? What about her?",
				anger: 15,
				reaction: "Oh, so you know exactly who she means? Interesting... 🤔"
			},
			{
				text: "I understand why you might feel concerned. Let's talk about boundaries that make you comfortable.",
				anger: -15,
				reaction: "Empathetic AND proactive! Relationship expert! 💑"
			}
		]
	},
	{
		id: 12,
		question: "Rate my cooking from 1-10.",
		category: "honesty",
		answers: [
			{
				text: "Solid 8! The seasoning was perfect, maybe just cook the pasta 1 minute less next time.",
				anger: -10,
				reaction: "Specific, helpful feedback with compliments! Chef's kiss! 👨‍🍳"
			},
			{
				text: "10 out of 10! Best meal ever!",
				anger: 12,
				reaction: "She burnt the rice. Stop lying! 🙄"
			},
			{
				text: "Umm... 6? But I appreciate the effort!",
				anger: 25,
				reaction: "Only a 6?! She slaved over that stove! 😤"
			},
			{
				text: "The flavor was amazing - easily a 9! Just needed a bit more salt for my taste.",
				anger: -5,
				reaction: "Honest but encouraging! You're learning! 🧂"
			}
		]
	},
	{
		id: 13,
		question: "My period is late...",
		category: "serious",
		answers: [
			{
				text: "Okay. How are you feeling? Do you want to take a test together?",
				anger: -15,
				reaction: "Calm, supportive, and using 'together'. Husband material! 💑"
			},
			{
				text: "WHAT?! But we were careful!",
				anger: 35,
				reaction: "Your panic is NOT helping right now! 😰"
			},
			{
				text: "How late? Isn't that normal sometimes?",
				anger: 20,
				reaction: "Minimizing her concern? She knows her body! 🙄"
			},
			{
				text: "*Hold her hand* Whatever happens, we'll face it together.",
				anger: -12,
				reaction: "Perfect response. She feels supported! 🤝"
			}
		]
	},
	{
		id: 14,
		question: "Do you even listen when I talk?",
		category: "attention",
		answers: [
			{
				text: "I try to, but I know I can do better. What did I miss?",
				anger: -8,
				reaction: "Admitting fault and wanting to improve! Growth mindset! 📈"
			},
			{
				text: "Of course I do! You were just talking about... um...",
				anger: 28,
				reaction: "The 'um' gave you away! Busted! 😤"
			},
			{
				text: "Sorry, can you repeat that? I was distracted.",
				anger: 35,
				reaction: "You just proved her point! Pay attention! 🙄"
			},
			{
				text: "You're right, I was distracted. You deserve my full attention. Please, tell me again.",
				anger: -5,
				reaction: "Owning it and making amends. Respectful! 👂"
			}
		]
	},
	{
		id: 15,
		question: "Why don't you post pictures of us anymore?",
		category: "social",
		answers: [
			{
				text: "You're right, I should. Let's take a selfie right now!",
				anger: -10,
				reaction: "Action-oriented response! She likes the enthusiasm! 📸"
			},
			{
				text: "I'm just not really into social media lately.",
				anger: 20,
				reaction: "But you posted your lunch yesterday... 🤨"
			},
			{
				text: "Do I have to broadcast our relationship to everyone?",
				anger: 30,
				reaction: "Are you ashamed of her?! Red flag! 🚩"
			},
			{
				text: "I've been keeping our moments private, but if it's important to you, I'd love to share more.",
				anger: -5,
				reaction: "Explaining while validating her needs! Smooth! 💕"
			}
		]
	},
	{
		id: 16,
		question: "Your mom called me fat in a 'caring' way.",
		category: "family",
		answers: [
			{
				text: "That's completely unacceptable. I'll talk to her right now.",
				anger: -15,
				reaction: "Immediate defense mode! Her hero! 🦸‍♂️"
			},
			{
				text: "She means well, she's just old-fashioned.",
				anger: 40,
				reaction: "Making excuses for mom? Wrong team, buddy! 😡"
			},
			{
				text: "I'm so sorry. You're perfect and she had no right. How can I support you?",
				anger: -12,
				reaction: "Apologizing, affirming, and asking how to help! 💯"
			},
			{
				text: "What exactly did she say? That doesn't sound like her.",
				anger: 25,
				reaction: "Questioning HER story? Whose side are you on?! 😒"
			}
		]
	},
	{
		id: 17,
		question: "I think we should work out together!",
		category: "fitness",
		answers: [
			{
				text: "I'd love that! What kind of workouts are you thinking?",
				anger: -8,
				reaction: "Enthusiastic participation! Couple goals! 💪"
			},
			{
				text: "But you'll slow me down... I mean, we're at different levels.",
				anger: 35,
				reaction: "Basically called her weak. Motivating! NOT! 😤"
			},
			{
				text: "Sure! Fair warning though - I'll probably complain the whole time.",
				anger: 5,
				reaction: "At least you're honest about being whiny! 😅"
			},
			{
				text: "Great idea! We can motivate each other. Gym dates could be fun!",
				anger: -10,
				reaction: "Positive and seeing it as quality time! Perfect! 🏃‍♀️"
			}
		]
	},
	{
		id: 18,
		question: "I'm thinking about cutting all my hair off.",
		category: "appearance",
		answers: [
			{
				text: "Your hair, your choice! You'll look amazing either way.",
				anger: -5,
				reaction: "Supportive of her autonomy! Good answer! ✂️"
			},
			{
				text: "NOOOO! I love your long hair! Please don't!",
				anger: 30,
				reaction: "It's HER hair! Stop being controlling! 😡"
			},
			{
				text: "That's a big change. What's making you want to do it?",
				anger: -8,
				reaction: "Interested in her feelings behind the decision! Thoughtful! 💭"
			},
			{
				text: "Do whatever makes you happy, babe.",
				anger: 12,
				reaction: "Too passive! She wanted your actual opinion! 🤷"
			}
		]
	},
	{
		id: 19,
		question: "My best friend doesn't like you.",
		category: "social",
		answers: [
			{
				text: "That's tough. Have I done something to upset her?",
				anger: -10,
				reaction: "Mature response! Looking for solutions! 🤝"
			},
			{
				text: "Well, I don't like her either!",
				anger: 30,
				reaction: "Attacking her bestie? Bad strategy! 😤"
			},
			{
				text: "Why are you telling me this?",
				anger: 20,
				reaction: "Defensive instead of addressing the issue! 🙄"
			},
			{
				text: "I'm sorry to hear that. Maybe we could all hang out and she'll see the real me?",
				anger: -12,
				reaction: "Proactive problem-solving! Emotional maturity! 🌟"
			}
		]
	},
	{
		id: 20,
		question: "I love you.",
		category: "love",
		answers: [
			{
				text: "I love you too, more than words can say.",
				anger: -15,
				reaction: "Perfect response! Her heart melted! 💕"
			},
			{
				text: "Thanks!",
				anger: 45,
				reaction: "THANKS?! She said she LOVES you! 💔"
			},
			{
				text: "Love you too.",
				anger: 8,
				reaction: "A bit casual for her heartfelt confession! 😐"
			},
			{
				text: "*Pull her close* You're everything to me. I love you so much.",
				anger: -18,
				reaction: "Actions + words = complete meltdown! 🫠"
			}
		]
	},
	{
		id: 21,
		question: "Do you think marriage is important?",
		category: "future",
		answers: [
			{
				text: "For us? Absolutely. I can't imagine my future without you in it.",
				anger: -12,
				reaction: "Direct, romantic, and committed! Ring shopping time? 💍"
			},
			{
				text: "It's just a piece of paper, really.",
				anger: 35,
				reaction: "Way to kill the romance! She's reconsidering everything! 😒"
			},
			{
				text: "I think it's important when you're with the right person.",
				anger: 5,
				reaction: "Safe answer, but is SHE the right person?! 🤔"
			},
			{
				text: "Why? Are you thinking about it? Because I definitely am.",
				anger: -10,
				reaction: "Turning it around positively! She's blushing! 😊"
			}
		]
	},
	{
		id: 22,
		question: "I saw you looking at that girl.",
		category: "trap",
		answers: [
			{
				text: "You're right, I glanced. I'm sorry, that was disrespectful.",
				anger: -5,
				reaction: "Honest accountability! She appreciates the maturity! ✅"
			},
			{
				text: "What girl? I wasn't looking at anyone!",
				anger: 25,
				reaction: "Gaslighting won't work! She SAW you! 👀"
			},
			{
				text: "I was looking at her weird shirt, not her!",
				anger: 20,
				reaction: "Sure, her 'shirt'. Nice try! 🙄"
			},
			{
				text: "I notice people, but I only have eyes for you. I'll be more mindful.",
				anger: -8,
				reaction: "Honest but reassuring. Good recovery! 💕"
			}
		]
	},
	{
		id: 23,
		question: "Should I quit my job?",
		category: "support",
		answers: [
			{
				text: "What's making you consider it? Let's talk through the pros and cons.",
				anger: -10,
				reaction: "Supportive without pushing an agenda! Perfect partner! 📊"
			},
			{
				text: "In this economy? That's crazy!",
				anger: 30,
				reaction: "Dismissing her feelings AND calling her crazy! 😤"
			},
			{
				text: "If it's making you unhappy, your mental health comes first.",
				anger: -8,
				reaction: "Prioritizing her wellbeing! Keeper energy! 💚"
			},
			{
				text: "But you just got promoted!",
				anger: 18,
				reaction: "Money isn't everything! Listen to her concerns! 💰"
			}
		]
	},
	{
		id: 24,
		question: "What would you do if I got pregnant right now?",
		category: "serious",
		answers: [
			{
				text: "We'd figure it out together. You wouldn't be alone in this.",
				anger: -12,
				reaction: "Reassuring and partnership-focused! Daddy material! 👶"
			},
			{
				text: "Right NOW? We're not ready!",
				anger: 25,
				reaction: "Way to make her feel secure! Panic mode activated! 😰"
			},
			{
				text: "Whatever you decided, I'd support you completely.",
				anger: -10,
				reaction: "Respecting her choice while being supportive! Mature! 💕"
			},
			{
				text: "Is this your way of telling me something?",
				anger: 15,
				reaction: "Deflecting a hypothetical? Just answer the question! 🙄"
			}
		]
	},
	{
		id: 25,
		question: "Am I the best you've ever had?",
		category: "trap",
		answers: [
			{
				text: "You're not just the best, you're in a league of your own.",
				anger: -10,
				reaction: "Smooth AND avoiding comparisons! Expert level! 🏆"
			},
			{
				text: "Do we really need to talk about exes?",
				anger: 20,
				reaction: "Dodging means the answer is no! 😒"
			},
			{
				text: "Honestly? You're incredible but different from past relationships.",
				anger: 15,
				reaction: "Different? So others were better at some things?! 🤔"
			},
			{
				text: "Every day with you sets a new record for best ever.",
				anger: -8,
				reaction: "Cheesy but effective! She's smiling! 😊"
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
	classic: "Classic Traps",
	trap: "Ultimate Traps",
	memory: "Memory Tests",
	telepathy: "Mind Reading",
	family: "Family Matters",
	dreams: "Dream Logic",
	jealousy: "Jealousy Tests",
	serious: "Serious Talks",
	trust: "Trust Issues",
	priorities: "Priority Check",
	honesty: "Honesty Tests",
	attention: "Attention Tests",
	social: "Social Situations",
	appearance: "Appearance",
	fitness: "Health & Fitness",
	love: "Love & Romance",
	future: "Future Planning",
	support: "Being Supportive"
};