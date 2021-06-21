class UsersController < ApplicationController
  def index
  end

  def new
  end

  def create
	@user = User.find_by_email(user_params[:email]).try(:authenticate, user_params[:password])
	if @user
		session[:user_id] = @user.id
		flash[:success] = "User added successfully"
		redirect_to controller: 'users', action: 'show', id: @user.id
	else
		flash[:errors] = ['Invalid Combination']
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
		params.require(:user).permit(:email, :password)
	end