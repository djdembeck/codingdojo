class UsersController < ApplicationController
	layout "application"
  def index
  end

  def new
  end

  def create
	@user = User.new(user_params)
	if @user.save
		session[:user_id] = @user.id
		flash[:success] = "User added successfully"
		redirect_to new_session_path
	else
		flash[:errors] = ["can't be blank"]
		redirect_to new_user_path
	end
  end

  def show
	@user = session[:user]
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
		params.require(:user).permit(:name, :email, :password, :password_confirmation)
	end