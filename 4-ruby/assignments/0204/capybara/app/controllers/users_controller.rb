class UsersController < ApplicationController
	def index
		@users = User.all
		@user = User.new
	end

	def new
	end

	def create
		@user = User.new(user_params)
		if @user.save
			flash[:success] = "User added successfully"
			redirect_to controller: 'users', action: 'show', id: User.last
		else
			flash[:errors] = @user.errors.full_messages
			redirect_to new_user_path
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
	def user_params
		params.require(:user).permit(:first_name, :last_name, :email)
	end