class DojoController < ApplicationController
  def index
	@dojos = Dojo.all
	@dojo_count = Dojo.all.count
  end

  def new
	@dojo = Dojo.new
  end

  def create
	@dojo = Dojo.new(dojo_params)
	if @dojo.save
		flash[:success] = "Dojo submitted successfully"
		redirect_to '/dojo'
	else
		render :new
	end
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end
end

private
	def dojo_params
		params.require(:dojo).permit(:branch, :street, :city, :state)
	end