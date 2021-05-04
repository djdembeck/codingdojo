$.get("https://opentdb.com/api.php?amount=10&category=14&difficulty=medium", getTrivia)
// Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
function getTrivia(data) {
	var count = 0;
	for (let i = 0; i < data.results.length; i++) {
		question = data.results[i].question
		answer = data.results[i].correct_answer
		if (count % 5 == 0) {
			$("#bigbox").append(`<div class="columns is-vcentered" id="${count}"></div>`);
			var lastelem = count;
		}
		$(`#${lastelem}`).append(`<div class="column is-one-fifth"><div class="box"><p>${question}</p><div class="box answer has-background-warning" style="display: none;">${answer}</div></div></div>`);
		count++
	}
}

function getAnswers() {
	$(".answer").show();
}