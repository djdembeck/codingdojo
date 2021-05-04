$.get("https://api.github.com/users/djdembeck", displayName)
// Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
function displayName(data) {
	$(".button").click(function () {
		$(".box").append(`<div>${data.name}</div>`);
	});
}