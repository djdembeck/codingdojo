// Taco Truck
// Joe drives a taco truck in the booming town of Squaresburg. He uses an array of [x,y] coordinates corresponding to locations of his customers. They walk to his truck, but he is fair-minded so he wants to minimize total distance from truck to customers. City blocks are perfect squares, and every street is two-way, at perfect right angles. He only parks by street corners (coordinates like [37,-16]). Customers only travel on streets: coordinate [2,-2] is distance 4 from [0,0]. Joe checks the array before deciding where to park.

// Given a customer coordinate array, return an optimal taco truck location. Example: given [ [10,0], [-1,-10], [2,4] ], return [2,0], as total distance is 25 (8+13+4).

function tacoTruck(arr) {
	// x & y columns
	var dist_x = 0;
	var dist_y = 0;
	// absolutes
	var abs_x = 0;
	var abs_y = 0;
	arr.forEach(customer => {
		// Customers
		let custx = customer[0]
		let custy = customer[1]
		// true distances
		dist_x += custx
		dist_y += custy
		// positive distances
		abs_x += Math.abs(custx)
		abs_y += Math.abs(custy)
	});
	// Total positive distance
	let total_distance = abs_y + abs_x

	// Main mafs
	let result_x = Math.ceil(((dist_x / arr.length) / 2))
	let result_y = Math.ceil(((dist_y / arr.length) / 2)) + 1

	// absolute x and y result, and subtract from total absolute
	let final_distance = total_distance - (Math.abs(result_x) + Math.abs(result_y))
	
	console.log(`Total distance was ${final_distance}`)
	return [result_x, result_y]
}

array = [ 
	[10,0],
	[-1,-10],
	[2,4]
]
console.log(tacoTruck(array))