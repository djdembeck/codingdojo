// floodFill(canvas, x, y, target)
// canvas is an array of array of numbers representing
// colored pixels (think MSPaint)
// x, y is your start point, target is your new "color"
// change the value at x, y on the canvas to
// the target value, then all points on the canvas 
// that were the original color and contiguous with the 
// point at x, y (no diagonals!) to the target color.
// example
// canvas is:
// [[3, 2, 4, 4, 4],
//  [4, 4, 4, 3, 3],
//  [4, 1, 1, 4, 4]]
// x, y is 2, 1  and target is 0
// canvas becomes:
// [[3, 2, 0, 0, 0],
//  [0, 0, 0, 3, 3],
//  [0, 1, 1, 4, 4]]
// another example, if canvas is:
// [[1, 0, 2, 0, 1],
//  [1, 0, 1, 1, 0],
//  [1, 0, 1, 0, 0],
//  [2, 0, 0, 2, 1]]
// x, y is 1, 2 and target is 9
// canvas[2][1]
// canvas becomes:
// [[1, 9, 2, 0, 1],
//  [1, 9, 1, 1, 0],
//  [1, 9, 1, 0, 0],
//  [2, 9, 9, 2, 1]]
// if x, y was intead 2, 1 and target was 9
// canvas would become:
// [[1, 0, 2, 0, 1],
//  [1, 0, 9, 9, 0],
//  [1, 0, 9, 0, 0],
//  [2, 0, 0, 2, 1]]
// you don't need to return anything,
// but if you feel the need to, use null or undefined
// make sure you don't go outside your canvas area

var sampleInput = [[1, 0, 2, 0, 1],
[1, 0, 9, 9, 0],
[1, 0, 9, 0, 0],
[2, 0, 0, 2, 1]]

function floodFill(canvas, x, y, target) {
	var original = canvas[y][x];
	canvas[y][x] = target;

	// clockwise

	// above
	if (y-1 >= 0){
		if (canvas[y-1][x] == original){
			floodFill(canvas, x, y-1, target);
		}
	}

	// right
	if (x+1 < canvas[y].length){
		if (canvas[y][x+1] == original){
			floodFill(canvas, x+1, y, target);
		}
	}

	// below
	if (y+1 < canvas.length) {
		if (canvas[y+1][x] == original){
			floodFill(canvas, x, y+1, target)
		}
	}

	// left
	if (x-1 >= 0){
		if (canvas[y][x-1] == original) {
			floodFill(canvas, x-1, y, target)
		}
	}

	return canvas;
}

console.log(sampleInput)
floodFill(sampleInput, 1, 1, 7)
console.log(sampleInput)