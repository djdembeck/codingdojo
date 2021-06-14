class RpgController < ApplicationController
  def index
  end

  def create
	# Initialize
	if !session[:activity_text]
		session[:activity_text] = "Hello world!"
	end
	if !session[:total_gold]
		session[:total_gold] = 0
	end

	val_dict = [
		{"area": "farm", "min_value": 10, "max_value": 20},
		{"area": "cave", "min_value": 5, "max_value": 10},
		{"area": "house", "min_value": 2, "max_value": 5},
		{"area": "casino", "min_value": -50, "max_value": 50}
	]

	key = params[:find_gold]
	rand_result = 0
	area = ""
	val_dict.each_with_index do |val, i|
		if key == val_dict[i][:area]
			area = val_dict[i][:area]
			min_value = val_dict[i][:min_value]
			max_value = val_dict[i][:max_value]
			rand_result = rand(min_value...max_value)
		end
	end

	session[:total_gold] += rand_result
	session[:activity_text] += "\nEarned #{rand_result} golds from the #{area}!"

	redirect_to '/rpg'
  end
end
