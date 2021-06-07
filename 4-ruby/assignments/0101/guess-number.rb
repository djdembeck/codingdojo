def guess_number guess
	number = 25
	unless guess != number
		"You answered correctly!"
	else
		if guess > number
			"Guess was too high!"
		elsif guess < number
			"Guess was too low!"
		end
	end
	
end
puts guess_number 24
puts guess_number 26
puts guess_number 25