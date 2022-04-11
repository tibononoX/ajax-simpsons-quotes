function fetchQuoteJSON() {
	axios
		.get("https://simpsons-quotes-api.herokuapp.com/quotes")
		.then(function (response) {
			return response.data;
		})
		.then(function (quote) {
			const quoteHtml = `
        <p><strong>${quote[0].quote}</strong></p>
        <h6><i>- ${quote[0].character}</i></h6>
        <img src="${quote[0].image}" />
      `;
			document.querySelector("#simpson").innerHTML = quoteHtml;
		});
}

fetchQuoteJSON();

document
	.querySelector(".refreshButton")
	.addEventListener("click", () => fetchQuoteJSON());
