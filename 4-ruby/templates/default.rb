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
model_name = ask("What should the model name be called? (eg, User)") if yes?("Make a model?")

model_fields = ask("What should the model fields be? (eg, \"first_name:string\" \"last_name:string\" \"address:text\")") if model_name

# If no model mode
controller_name = ask("What should the controller name be? (eg, User)") if !model_name
###

puts "*********************************************************"
puts "Go grab some matcha tea (or coffee if that's your thing)"
puts "*********************************************************"

### Gems installation
puts "***********************************"
puts "Making Gemfile and adding to it..."
puts "***********************************"
run "touch Gemfile"

add_source "https://rubygems.org" do
	gem_group :development, :test do
		gem "rspec-rails"
		gem "listen"
	end
end

# Run 'rails generate rails_footnotes:install' after bundle install
gem 'rails-footnotes', '~> 4.0'
# run 'Hirb.enable' in 'rails console'
gem 'hirb'
# Use sqlite3 as the database for Active Record
gem 'sqlite3', '~> 1.3.13'
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
# gem 'bcrypt', '~> 3.1.7'

puts "****************************"
puts "Running bundle installer..."
puts "****************************"
run "bundle install"
###

### Generations
puts "********************" if model_name
puts "Generating model..." if model_name
puts "********************" if model_name
generate("model", model_name, model_fields) if model_name

puts "*************************"
puts "Generating controller..."
puts "*************************"

# Use model name if available
if !controller_name
	controller_name = model_name
end

generate("controller", controller_name.pluralize, "index", "new", "create", "show", "edit", "update", "destroy", "--skip-routes")

puts "******************************"
puts "Installing rails_footnotes..."
puts "******************************"
generate("rails_footnotes:install")

puts "******************************"
puts "Installing rspec..."
puts "******************************"
generate("rspec:install")

puts "**********************" if model_name
puts "Migrating database..." if model_name
puts "**********************" if model_name
run "rake db:migrate", abort_on_failure: true if model_name

run "sed -i '2i  resources :#{controller_name.downcase.pluralize}' config/routes.rb"
###

puts "*****"
puts "Done"
puts "*****"