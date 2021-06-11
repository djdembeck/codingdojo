class HelloController < ApplicationController
  def Say

  end

  def Say2
	
  end

  def Say3
	redirect_to "/say/hello/joe"
  end

  def Times
	if !session[:count] 
		session[:count] = 1
	else
		session[:count] += 1
	end
	@count = session[:count]
  end

  def restart
	session[:count] = nil
	redirect_to "/times"
  end

  def index

  end
end
