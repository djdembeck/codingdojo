#### Description
# - This runs all the modifications to Gemfile we make (hirb, versions for rails and sqlite, and rails_footnotes)
# - Runs `bundle install` for you
# - Sets up first model if you want
# - Sets up controller (either using model name or asks for a name if no-model mode)
# - Installs rails_footnotes
# - Runs `rake db:migrate` after making a model
# - Sets up RESTful routes
####

### User interaction
model_iterations = ask("How many models do you need?") if yes?("Make a model?")
###

puts "*********************************************************"
puts "Go grab some matcha tea (or coffee if that's your thing)"
puts "*********************************************************"

### Gems installation
puts "***********************************"
puts "Making Gemfile and adding to it..."
puts "***********************************"
run "touch Gemfile"

# Run 'rails generate rails_footnotes:install' after bundle install
gem 'rails-footnotes', '~> 4.0'
# run 'Hirb.enable' in 'rails console'
gem 'hirb'
# Use sqlite3 as the database for Active Record
# gem 'sqlite3', '~> 1.3.13'
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby
# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc
# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.16'

gem 'pg', '~> 0.20'

puts "****************************"
puts "Running bundle installer..."
puts "****************************"
run "bundle install"
###

# add_source "https://rubygems.org"

gem_group :development, :test do
	gem 'rspec'
	gem 'rspec-rails'
	gem 'factory_bot_rails'
	gem 'capybara'
end

run "bundle install"

run "rake db:create"

## run through model iterations
def ordinal(number)
abs_number = number.to_i.abs

	if (11..13).include?(abs_number % 100)
		"th"
	else
		case abs_number % 10
		when 1; "st"
		when 2; "nd"
		when 3; "rd"
		else    "th"
		end
	end
end
def ordinalize(number)
	number += 1
	"#{number}#{ordinal(number)}"
end

model_iterations.to_i.times do |num|
	model_name = ask("What should the #{ordinalize(num)} model name be called? (eg, User)") 

	model_fields = ask("What should the #{ordinalize(num)} model fields be? (eg, \"first_name:string\" \"last_name:string\" \"email:string\")") if model_name

	### Generations
	puts "********************" if model_name
	puts "Generating #{ordinalize(num)} model..." if model_name
	puts "********************" if model_name
	generate("model", model_name, model_fields) if model_name

	puts "*************************"
	puts "Generating #{ordinalize(num)} controller..."
	puts "*************************"

	controller_name = model_name if yes?("Create controller for #{model_name}?")

	generate("controller", controller_name.pluralize, "index", "new", "create", "show", "edit", "update", "destroy", "--skip-routes") if controller_name

	run "sed -i '2i  resources :#{controller_name.downcase.pluralize}' config/routes.rb" if controller_name
end

puts "******************************"
puts "Installing rails_footnotes..."
puts "******************************"
generate("rails_footnotes:install")

puts "******************************"
puts "Installing rspec..."
puts "******************************"
generate("rspec:install")

puts "**********************" if model_iterations
puts "Migrating database..." if model_iterations
puts "**********************" if model_iterations
run "rake db:migrate", abort_on_failure: true if model_iterations

###

puts "*****"
puts "Done"
puts "*****"