// Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.

let students = [
	{name: 'Remy', cohort: 'Jan'},
	{name: 'Genevieve', cohort: 'March'},
	{name: 'Chuck', cohort: 'Jan'},
	{name: 'Osmund', cohort: 'June'},
	{name: 'Nikki', cohort: 'June'},
	{name: 'Boris', cohort: 'June'}
];

function studentLoop(arr) {
	for (let i = 0; i < arr.length; i++) {
		console.log(`Name: ${students[i].name}, Cohort: ${students[i].cohort}`)
	}
}

studentLoop(students)

// Write a function that accepts an object of users divided into employees and managers, and display the number of characters per employee/manager's name, as shown below, and logs the information to the console.

let users = {
	employees: [
		{'first_name':  'Miguel', 'last_name' : 'Jones'},
		{'first_name' : 'Ernie', 'last_name' : 'Bertson'},
		{'first_name' : 'Nora', 'last_name' : 'Lu'},
		{'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
	],
	managers: [
		{'first_name' : 'Lillian', 'last_name' : 'Chambers'},
		{'first_name' : 'Gordon', 'last_name' : 'Poe'}
	]
};

function printUser(arr) {
	for (let i = 0; i < Object.keys(arr).length; i++) {
		key = Object.keys(arr)[i]
		console.log(key.toUpperCase());
		count = 1;
		for (let j = 0; j < arr[key].length; j++) {
			full_name = arr[key][j].last_name + arr[key][j].first_name
			console.log(`${count} - ${arr[key][j].last_name.toUpperCase()}, ${arr[key][j].first_name.toUpperCase()} ${full_name.length}`)
			count++
		}
	}
}

printUser(users)