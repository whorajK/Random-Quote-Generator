// VARIABLES
const quoteEl = document.querySelector("#quote-text");
const authorEl = document.querySelector("#author-text");
const container = document.querySelector(".quote_container");
const toHide = document.querySelector(".main__text");
const generateBtn = document.querySelector("#generate-btn");

generateBtn.addEventListener("click", () => {
	getQuote();
	container.classList.remove("hidden");
	toHide.classList.add("hidden");
});

// GENERATES RANDOM QUOTES
const getQuote = async () => {
	let url = "https://type.fit/api/quotes"; // API URL

	// FETCH DATA FROM THE API
	const response = await fetch(url);

	// CONVERT RESPONSE TO JSON
	const quotes = await response.json();
	// RANDOMISE THE RESPONSE
	const random = Math.floor(Math.random() * quotes.length);

	const quoteText = quotes[random].text;
	const author = quotes[random].author;
	if (author == null) {
		author = "Anonymous";
	}

	quoteEl.textContent = `"${quoteText}"`;
	authorEl.textContent = ` ~ ${author}`;
};
