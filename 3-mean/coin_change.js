function coin_change(input){
	var val_dict = {
		'dollars': 100,
		'quarters': 25,
		'dimes': 10,
		'nickels': 5,
		'pennies': 1
	};
	var return_dict = {};
	while (input != 0) {
		if (input - val_dict['dollars'] >= 0) {
			if (!("dollars" in return_dict)) {
				return_dict['dollars'] = 0;
			}
			return_dict['dollars'] += 1;
			input -= val_dict['dollars']
		} else if (input - val_dict['quarters'] >= 0) {
			if (!("quarters" in return_dict)) {
				return_dict['quarters'] = 0;
			}
			return_dict['quarters'] += 1;
			input -= val_dict['quarters']
		} else if (input - val_dict['dimes'] >= 0) {
			if (!("dimes" in return_dict)) {
				return_dict['dimes'] = 0;
			}
			return_dict['dimes'] += 1;
			input -= val_dict['dimes']
		} else if (input - val_dict['nickels'] >= 0) {
			if (!("nickels" in return_dict)) {
				return_dict['nickels'] = 0;
			}
			return_dict['nickels'] += 1;
			input -= val_dict['nickels']
		} else if (input - val_dict['pennies'] >= 0) {
			if (!("pennies" in return_dict)) {
				return_dict['pennies'] = 0;
			}
			return_dict['pennies'] += 1;
			input -= val_dict['pennies']
		}
	}
	return return_dict;
}

console.log(coin_change(312))