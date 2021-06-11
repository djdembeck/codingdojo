Rails.application.routes.draw do
	root "hello#index"
	get "hello" => "hello#Say"
	get "say/hello" => "hello#Say1"
	get "say/hello/joe" => "hello#Say2"
	get "say/hello/michael" => "hello#Say3"
	get "times" => "hello#Times"
	get "times/restart" => "hello#restart"
	get "users/total" => "users#total"

	resources :users
end
