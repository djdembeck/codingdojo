// telephoneWords(str, ... ?)
// input is a string of digits -> '83461'
// output is an array of all 'words' representable by those digits on a telephone keypad
// ITU E.161 standard (modified for 0)
// order of output does not matter
// '746024' -> ['PGM AG', 'RHO CH'...]
// all output strings should be the same length
// what does the output for '309' look like?
// ['D W', 'D X', 'D Y', 'D Z', 'E X', ...]
// 1: _,@
// 2: ABC
// 3: DEF
// 4: GHI
// 5: JKL
// 6: MNO
// 7: PQRS
// 8: TUV
// 9: WXYZ
// 0: ' ' (a space)

function telephoneWords(input, partial = '', position = 0, output = []) {
	var keypad = {
		1: '_,@',
		2: 'ABC',
		3: 'DEF',
		4: 'GHI',
		5: 'JKL',
		6: 'MNO',
		7: 'PQRS',
		8: 'TUV',
		9: 'WXYZ',
		0: ' '
	};
	
	// Push partial to end
	if (position == input.length) {
		output.push(partial);
	}
	else {
		for (let i = 0; i < keypad[input[position]].length; i++) {
			telephoneWords(input, partial + keypad[input[position]][i], position + 1, output);
		}
	}
	return output;
}
input = '309';
console.log(telephoneWords(input))