class DojosController < ApplicationController
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
		redirect_to '/dojos'
	else
		render :new
	end
  end

  def show
	@dojo = Dojo.find(params[:id])
  end

  def edit
	@dojo = Dojo.find(params[:id])
  end

  def update
	@dojo = Dojo.find_by(id: params[:id])
	@dojo.update(dojo_params)
	redirect_to '/dojos'
  end

  def destroy
	Dojo.find(params[:id]).destroy
	redirect_to '/dojos'
  end
end

private
	def dojo_params
		params.require(:dojo).permit(:branch, :street, :city, :state)
	end