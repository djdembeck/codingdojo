class UsersController < ApplicationController
	def index
		render json: User.all
	end

	def new
		
	end

	def create
		@user = User.create(user_params)
		redirect_to '/users'
	end

	def edit
		@user = User.find(params[:id])
	end

	def update
		@user = User.find(params[:id])
		@user.update(user_params)
	end

	def show
		render json: User.find(params[:id])
	end

	def destroy
		
	end

	def total
		@count = User.all.count
	end
	private
		def user_params
			params.require(:user).permit(:first_name, :last_name)
		end
end