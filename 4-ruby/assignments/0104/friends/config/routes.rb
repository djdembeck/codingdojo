Rails.application.routes.draw do
	get "hello" => "hello#Say"
	get "say/hello" => "hello"
	get "say/hello/joe" => "hello"
	get "say/hello/michael" => "hello"
	get "" => "hello"
	get "times" => "times"
	get "times/restart" => "restart"
end
