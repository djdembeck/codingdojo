users = [
	{
		fname: "Kermit",
		lname: "the Frog",
		languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
		interests: {
			music: ["guitar", "flute"],
			dance: ["tap", "salsa"],
			television: ["Black Mirror", "Stranger Things"]
		}
	},
	{
		fname: "Winnie",
		lname: "the Pooh",
		languages: ["Python", "Swift", "Java"],
		interests: {
			food: ["honey", "honeycomb"],
			flowers: ["honeysuckle"],
			mysteries: ["Heffalumps"]
		}
	},
	{
		fname: "Arthur",
		lname: "Dent",
		languages: ["JavaScript", "HTML", "Go"],
		interests: {
			space: ["stars", "planets", "improbability"],
			home: ["tea", "yellow bulldozers"]
		}
	}
]

function userLanguages(input) {
	var ret_string = ""
	// Loop for users
	for (let i = 0; i < input.length; i++) {
		var lang_string = ""
		// Loop for languages
		for (let j = 0; j < input[i]['languages'].length; j++) {
			lang_string += input[i]['languages'][j] 
			if (j != input[i]['languages'].length - 1 && j != input[i]['languages'].length - 2) {
				lang_string += ", "
			} else if (j == input[i]['languages'].length - 2) {
				lang_string += " and "
			}
		}
		ret_string += `${input[i]['fname']} ${input[i]['lname']} knows ${lang_string} \n`;
	}
	return ret_string
}

console.log(userLanguages(users))