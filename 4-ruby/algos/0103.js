function removeDupes(arr) {
	var newObj = {};
	for (let i = arr.length; i > 0; i--) {
		let count = 0;
		while (count < Object.keys(newObj).length) {
			if (newObj[arr[i]]) {
				console.log(`Plus 1 of ${newObj[arr[i]]}`)
				newObj[arr[i]] += 1
				break
			}
			count++
			if (count == Object.keys(newObj).length) {
				newObj[arr[i]] = 1
			}
		}
	}
	let count = arr.length - 1
	console.log(newObj)
	while (Object.keys(newObj).length > 0) {
		console.log(`Here's a key ${newObj[arr[count]]}`)
		if (newObj[arr[count]]) {
			console.log("Key exist")
			if (newObj[arr[count]].value > 1) {
				arr.pop()
				newObj[arr[count]] -= 1
			} else {
				delete newObj[arr[count]]
			}
			count--
		} else {
			break
		}
	}
	return arr;
}

array = [1, 2, 1, 3, 4, 2]
console.log(removeDupes(array))