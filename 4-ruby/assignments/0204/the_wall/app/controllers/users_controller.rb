class UsersController < ApplicationController
	def index
		@users = User.all
		@user = User.new
	end

	def new
	end

	def create
		@user = User.find_by(username: user_params[:username])
		if @user
			session[:user] = @user
			redirect_to posts_path
		else
			@user = User.new(user_params)
			if @user.save
				session[:user] = @user
				flash[:success] = "User added successfully"
				redirect_to controller: 'posts', action: 'index'
			else
				flash[:errors] = @user.errors.full_messages
				redirect_to new_user_path
			end
		end
	end

	def show
	end

	def edit
	end

	def update
	end

	def destroy
		session[:user] = nil
		redirect_to new_user_path
	end
end
private
	def user_params
		params.require(:user).permit(:username)
	end