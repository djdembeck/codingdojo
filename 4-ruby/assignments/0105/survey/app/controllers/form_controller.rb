class FormController < ApplicationController
  def index
  end

  def create
	@form = Form.create(form_params)
	if !session[:count] 
		session[:count] = 1
	else
		session[:count] += 1
	end
	redirect_to '/show'
  end

  def show
	@count = session[:count]
	flash[:success] = "Thanks for submitting this form! You have submitted this form #{@count} times now."
	@result = Form.last
  end

  private
  def form_params
	  params.require(:form).permit(:name, :location, :favlang, :comment)
  end
end
