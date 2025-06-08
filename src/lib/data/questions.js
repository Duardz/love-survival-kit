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
				anger: 15,
				reaction: "Oh sweetie, 'fine' NEVER means fine! 📺💔"
			},
			{
				text: "You don't look fine. What's wrong?",
				anger: 8,
				reaction: "Now she's mad that she looks upset! Thanks! 😤"
			},
			{
				text: "Is this about something I did?",
				anger: 10,
				reaction: "So you DID do something wrong! Guilty conscience much? 🤨"
			},
			{
				text: "*Pretend you didn't hear and slowly back away*",
				anger: 12,
				reaction: "Oh, so now you're IGNORING her? Bold strategy! 🙄"
			}
		]
	},
	{
		id: 2,
		question: "Do I look fat in this?",
		category: "appearance",
		answers: [
			{
				text: "No, you look perfect!",
				anger: 7,
				reaction: "That was too fast! You didn't even look! 😠"
			},
			{
				text: "*Pause to think* ...No, honey.",
				anger: 14,
				reaction: "YOU HAD TO THINK ABOUT IT?! 😤"
			},
			{
				text: "You look beautiful in everything!",
				anger: 9,
				reaction: "That's not what she asked! Answer the question! 🙄"
			},
			{
				text: "That dress doesn't do you justice. Try the blue one?",
				anger: 12,
				reaction: "So it DOES make her look fat! Thanks a lot! 😡"
			}
		]
	},
	{
		id: 3,
		question: "My best friend Sarah is having relationship problems again.",
		category: "social",
		answers: [
			{
				text: "She should just dump him already.",
				anger: 10,
				reaction: "Don't talk about her friends like that! Rude! 😒"
			},
			{
				text: "That's tough. How can you help her?",
				anger: 5,
				reaction: "Why is she suddenly Sarah's therapist?! 🙄"
			},
			{
				text: "Didn't she just get back with him last week?",
				anger: 12,
				reaction: "Stop keeping track of her friend's drama! Creepy! 😠"
			},
			{
				text: "*Heavy sigh* Here we go again...",
				anger: 14,
				reaction: "Her friends are NOT a burden! How dare you! 😤"
			}
		]
	},
	{
		id: 4,
		question: "I ran into my ex at Starbucks today.",
		category: "trust",
		answers: [
			{
				text: "Which ex? The tall one?",
				anger: 12,
				reaction: "Why do you remember her ex's height?! 🤨"
			},
			{
				text: "Oh. How was that?",
				anger: 7,
				reaction: "Too casual! Show some concern! 😒"
			},
			{
				text: "What?! What did they want?!",
				anger: 10,
				reaction: "Jealous much? It was just Starbucks! 🙄"
			},
			{
				text: "I hope you didn't talk to them.",
				anger: 9,
				reaction: "Controlling! She can talk to whoever she wants! 😤"
			}
		]
	},
	{
		id: 5,
		question: "Your mom just called me while you were out.",
		category: "family",
		answers: [
			{
				text: "Oh god, what did she say now?",
				anger: 8,
				reaction: "Way to throw mom under the bus! 😠"
			},
			{
				text: "That's nice! You two are bonding!",
				anger: 10,
				reaction: "Nice?! Your mom called to complain about her! 😤"
			},
			{
				text: "I'll talk to her about boundaries.",
				anger: 6,
				reaction: "Or you could just defend your girlfriend! 🙄"
			},
			{
				text: "Just ignore her, she means well.",
				anger: 12,
				reaction: "IGNORE her?! That's your solution?! 😡"
			}
		]
	},
	{
		id: 6,
		question: "I think we should talk about our anniversary plans.",
		category: "memory",
		answers: [
			{
				text: "Already? Isn't that in a few months?",
				anger: 14,
				reaction: "A FEW MONTHS?! It's next week! 😤"
			},
			{
				text: "Of course! What were you thinking?",
				anger: 8,
				reaction: "So you forgot and have no plans. Cool. 😒"
			},
			{
				text: "I've already made reservations!",
				anger: 10,
				reaction: "Without asking her first?! How thoughtful! 🙄"
			},
			{
				text: "Anniversary of... what exactly?",
				anger: 18,
				reaction: "ARE YOU SERIOUS RIGHT NOW?! 🤬"
			}
		]
	},
	{
		id: 7,
		question: "I'm thinking about cutting my hair really short.",
		category: "appearance",
		answers: [
			{
				text: "But I love your long hair!",
				anger: 12,
				reaction: "It's HER hair, not yours! 😤"
			},
			{
				text: "That would look amazing on you!",
				anger: 7,
				reaction: "So you don't like her current hair?! 😠"
			},
			{
				text: "How short are we talking?",
				anger: 8,
				reaction: "Why does it matter? Not supportive! 🙄"
			},
			{
				text: "It's your hair, do what makes you happy.",
				anger: 10,
				reaction: "She wanted your OPINION, not permission! 😒"
			}
		]
	},
	{
		id: 8,
		question: "Did you notice anything different about me?",
		category: "trap",
		answers: [
			{
				text: "Your hair looks great!",
				anger: 10,
				reaction: "She didn't touch her hair. Try again! 😤"
			},
			{
				text: "New dress?",
				anger: 12,
				reaction: "She's worn this dress 10 times! Pay attention! 😠"
			},
			{
				text: "You look extra beautiful today?",
				anger: 8,
				reaction: "Generic compliment = you noticed nothing! 🙄"
			},
			{
				text: "*Panic scanning* Um... new earrings?",
				anger: 14,
				reaction: "The panic in your eyes says everything! 😒"
			}
		]
	},
	{
		id: 9,
		question: "My friend Emma just got engaged!",
		category: "future",
		answers: [
			{
				text: "That's great! Good for her!",
				anger: 7,
				reaction: "That's it? No thoughts about US? 🙄"
			},
			{
				text: "Already? They've only been dating a year!",
				anger: 12,
				reaction: "We've been dating for THREE years... 😤"
			},
			{
				text: "Wow, everyone's getting married lately...",
				anger: 10,
				reaction: "Everyone except her, apparently! 😠"
			},
			{
				text: "*Nervous laughter* That's... that's nice...",
				anger: 14,
				reaction: "Your fear of commitment is showing! 😒"
			}
		]
	},
	{
		id: 10,
		question: "Can you pick up some things from the store?",
		category: "domestic",
		answers: [
			{
				text: "Sure! Text me a list.",
				anger: 5,
				reaction: "She has to do EVERYTHING, even make the list?! 😤"
			},
			{
				text: "Can't you just order delivery?",
				anger: 12,
				reaction: "Too lazy to help with ONE thing?! 😠"
			},
			{
				text: "I just went yesterday!",
				anger: 10,
				reaction: "Once a week is too much? Really?! 🙄"
			},
			{
				text: "What things? Be specific.",
				anger: 8,
				reaction: "You know what she needs! You live here too! 😒"
			}
		]
	},
	{
		id: 11,
		question: "Why don't you ever take photos of me?",
		category: "attention",
		answers: [
			{
				text: "I do! Check my phone!",
				anger: 10,
				reaction: "Those 3 blurry photos from last year don't count! 😤"
			},
			{
				text: "You always say you look bad in photos.",
				anger: 12,
				reaction: "So you AGREE she looks bad?! Wow! 😠"
			},
			{
				text: "I prefer living in the moment.",
				anger: 8,
				reaction: "That's a fancy way of saying you don't care! 🙄"
			},
			{
				text: "Want me to take one now?",
				anger: 6,
				reaction: "NOW?! When she's not ready?! No! 😒"
			}
		]
	},
	{
		id: 12,
		question: "Do you think Jessica is pretty?",
		category: "trap",
		answers: [
			{
				text: "Who's Jessica?",
				anger: 8,
				reaction: "The girl you stare at every Monday at the gym! 😤"
			},
			{
				text: "Not as pretty as you!",
				anger: 10,
				reaction: "So she IS pretty, just LESS pretty?! 😠"
			},
			{
				text: "I honestly never noticed.",
				anger: 12,
				reaction: "LIAR! She sits right across from you at work! 🙄"
			},
			{
				text: "Why are you asking me this?",
				anger: 7,
				reaction: "Deflecting! Just answer the question! 😒"
			}
		]
	},
	{
		id: 13,
		question: "We never go out anymore.",
		category: "priorities",
		answers: [
			{
				text: "We went out last week!",
				anger: 9,
				reaction: "Once a week isn't enough! Try harder! 😤"
			},
			{
				text: "Let's plan something this weekend!",
				anger: 7,
				reaction: "She has to tell you to plan dates?! 🙄"
			},
			{
				text: "But we're saving money, remember?",
				anger: 11,
				reaction: "So money is more important than her happiness? 😠"
			},
			{
				text: "Where would you like to go?",
				anger: 8,
				reaction: "YOU should be planning romantic surprises! 😒"
			}
		]
	},
	{
		id: 14,
		question: "Do you remember what I told you yesterday?",
		category: "memory",
		answers: [
			{
				text: "Of course! About your... thing?",
				anger: 12,
				reaction: "Her THING?! It was important! 😤"
			},
			{
				text: "Yesterday was crazy, remind me?",
				anger: 10,
				reaction: "Too crazy to listen to your girlfriend? 😠"
			},
			{
				text: "The work drama with your boss?",
				anger: 14,
				reaction: "That was LAST WEEK! You never listen! 🙄"
			},
			{
				text: "*Confident* About Sarah's birthday party!",
				anger: 9,
				reaction: "Wrong, but at least you tried? Still mad though. 😒"
			}
		]
	},
	{
		id: 15,
		question: "What would you do if I got pregnant right now?",
		category: "serious",
		answers: [
			{
				text: "Is... is this hypothetical?",
				anger: 8,
				reaction: "Way to dodge the question! Answer it! 😤"
			},
			{
				text: "We'd figure it out together!",
				anger: 6,
				reaction: "That's vague! What does that mean?! 🙄"
			},
			{
				text: "But we're not ready!",
				anger: 12,
				reaction: "So you'd panic? Not reassuring! 😠"
			},
			{
				text: "*Visible panic* Right NOW?!",
				anger: 14,
				reaction: "Your face just told her everything! 😒"
			}
		]
	},
	{
		id: 16,
		question: "My mother wants us to visit this weekend.",
		category: "family",
		answers: [
			{
				text: "Again? We just saw her!",
				anger: 11,
				reaction: "Family is important! Stop complaining! 😤"
			},
			{
				text: "Sure, what time?",
				anger: 6,
				reaction: "No enthusiasm? Her family matters! 🙄"
			},
			{
				text: "Can we make it a short visit?",
				anger: 9,
				reaction: "Already planning your escape? Rude! 😠"
			},
			{
				text: "I actually had plans...",
				anger: 12,
				reaction: "Plans more important than her family?! 😒"
			}
		]
	},
	{
		id: 17,
		question: "Am I overreacting?",
		category: "trap",
		answers: [
			{
				text: "No, your feelings are valid.",
				anger: 8,
				reaction: "So you DO think she's overreacting! 😤"
			},
			{
				text: "Maybe a little bit?",
				anger: 15,
				reaction: "A LITTLE BIT?! How dare you! 😠"
			},
			{
				text: "What makes you think that?",
				anger: 9,
				reaction: "Deflecting! Just say she's not! 🙄"
			},
			{
				text: "You? Overreact? Never!",
				anger: 11,
				reaction: "The sarcasm is NOT appreciated! 😒"
			}
		]
	},
	{
		id: 18,
		question: "Should I text him back?",
		category: "jealousy",
		answers: [
			{
				text: "Who's 'him'?",
				anger: 7,
				reaction: "You should know who she's talking about! 😤"
			},
			{
				text: "If you want to?",
				anger: 10,
				reaction: "Show some backbone! Have an opinion! 🙄"
			},
			{
				text: "Why is he texting you?",
				anger: 12,
				reaction: "Jealous AND controlling? Attractive! 😠"
			},
			{
				text: "I don't think you should.",
				anger: 9,
				reaction: "She can make her own decisions! 😒"
			}
		]
	},
	{
		id: 19,
		question: "I had the worst day at work.",
		category: "support",
		answers: [
			{
				text: "What happened?",
				anger: 5,
				reaction: "Finally asking 10 minutes later? 🙄"
			},
			{
				text: "At least you have a job!",
				anger: 14,
				reaction: "Way to minimize her feelings! 😤"
			},
			{
				text: "Want to talk about it?",
				anger: 7,
				reaction: "Obviously! Why else would she bring it up?! 😠"
			},
			{
				text: "Tomorrow will be better!",
				anger: 11,
				reaction: "Toxic positivity! Let her vent! 😒"
			}
		]
	},
	{
		id: 20,
		question: "I love you.",
		category: "love",
		answers: [
			{
				text: "Love you too!",
				anger: 6,
				reaction: "Where's the 'I'? Lazy response! 🙄"
			},
			{
				text: "Aww, thanks babe!",
				anger: 15,
				reaction: "THANKS?! She said she LOVES you! 💔"
			},
			{
				text: "*Kiss her instead of responding*",
				anger: 8,
				reaction: "Use your words! She needs to hear it! 😤"
			},
			{
				text: "I know.",
				anger: 12,
				reaction: "Okay Han Solo, how romantic! 😠"
			}
		]
	},
	{
		id: 21,
		question: "What are you thinking about?",
		category: "attention",
		answers: [
			{
				text: "Nothing.",
				anger: 10,
				reaction: "How can you think about NOTHING?! 😤"
			},
			{
				text: "Just work stuff.",
				anger: 8,
				reaction: "Always thinking about work, never her! 🙄"
			},
			{
				text: "How beautiful you are!",
				anger: 7,
				reaction: "Too cheesy! What were you REALLY thinking? 😒"
			},
			{
				text: "The game later.",
				anger: 12,
				reaction: "THE GAME?! While cuddling with her?! 😠"
			}
		]
	},
	{
		id: 22,
		question: "Do you think we spend too much time together?",
		category: "trap",
		answers: [
			{
				text: "No! I love our time together!",
				anger: 6,
				reaction: "That was too quick. Be honest! 🙄"
			},
			{
				text: "Sometimes we could use space...",
				anger: 13,
				reaction: "So she's CLINGY now?! Wow! 😤"
			},
			{
				text: "Why? Do YOU think that?",
				anger: 9,
				reaction: "Don't turn this around on her! 😠"
			},
			{
				text: "Quality over quantity, right?",
				anger: 11,
				reaction: "So the quantity is too much? Thanks! 😒"
			}
		]
	},
	{
		id: 23,
		question: "I think your friend Jake likes me.",
		category: "jealousy",
		answers: [
			{
				text: "Jake's always been weird.",
				anger: 8,
				reaction: "Don't insult her admirers! Jealous much? 😤"
			},
			{
				text: "Can't blame him!",
				anger: 6,
				reaction: "So you're okay with this?! 🙄"
			},
			{
				text: "I'll talk to him.",
				anger: 11,
				reaction: "Territorial much? She can handle it! 😠"
			},
			{
				text: "Are you sure?",
				anger: 9,
				reaction: "Questioning her intuition? She KNOWS! 😒"
			}
		]
	},
	{
		id: 24,
		question: "We should work out together!",
		category: "fitness",
		answers: [
			{
				text: "But you hate the gym?",
				anger: 10,
				reaction: "She's trying! Be supportive! 😤"
			},
			{
				text: "I like working out alone...",
				anger: 12,
				reaction: "Too good to exercise with her? 😠"
			},
			{
				text: "Sure! When do you want to start?",
				anger: 5,
				reaction: "Tomorrow? That's too soon! 🙄"
			},
			{
				text: "We could try yoga instead?",
				anger: 8,
				reaction: "Why? Think she can't handle real exercise? 😒"
			}
		]
	},
	{
		id: 25,
		question: "How many kids do you want?",
		category: "future",
		answers: [
			{
				text: "Whoa, let's slow down!",
				anger: 12,
				reaction: "It's a normal question! Why panic?! 😤"
			},
			{
				text: "How many do YOU want?",
				anger: 8,
				reaction: "She asked first! Stop deflecting! 🙄"
			},
			{
				text: "Two seems nice?",
				anger: 6,
				reaction: "She wants three. You'd know if you listened! 😠"
			},
			{
				text: "Kids? In THIS economy?",
				anger: 10,
				reaction: "Way to kill the romance with reality! 😒"
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
	support: "Being Supportive",
	domestic: "Home Life"
};