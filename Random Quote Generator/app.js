const quotes = [
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
    { text: "If you are working on something exciting, it will keep you motivated.", author: "Steve Jobs" },
    { text: "Success doesn’t come from what you do occasionally, it comes from what you do consistently.", author: "Marie Forleo" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "Do what you can with all you have, wherever you are.", author: "Theodore Roosevelt" },
    { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Try not to become a man of success but rather try to become a man of value.", author: "Albert Einstein" },
    { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "Limit your ‘always’ and your ‘nevers’.", author: "Amy Poehler" },
    { text: "Everything you can imagine is real.", author: "Pablo Picasso" }
];

const quoteEl = document.querySelector('.quote');
const authorEl = document.querySelector('.author');
const generateBtn = document.querySelector('.generateBtn');

const selectQuote = () => {
    let randIndx = Math.floor(Math.random() * quotes.length); // 🔁 more flexible
    let quote = quotes[randIndx];

    quoteEl.textContent = `❝${quote.text}❞`;
    authorEl.textContent = `— ${quote.author}`;
};

selectQuote(); // shows one at start
generateBtn.addEventListener('click', selectQuote);