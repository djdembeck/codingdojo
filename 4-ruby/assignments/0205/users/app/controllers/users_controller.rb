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
	@user = User.find(params[:id])
	@secrets = Secret.where(user: @user)
	@liked_secrets = @user.secrets_liked
  end

  def edit
	@user = User.find(params[:id])
  end

  def update
	@user = User.find(params[:id])
	@user.email = params[:email]
	@user.name = params[:name]
	if @user.valid?
		@user.save
		redirect_to controller: 'users', action: 'show', id: @user.id
	else
		flash[:errors] = @user.errors.full_messages
		redirect_to :back
	end
  end

  def destroy
	user = User.find(params[:id])
	user.destroy
	reset_session
	redirect_to new_user_path
	end
end
private
	def user_params
		params.require(:user).permit(:name, :email, :password, :password_confirmation)
	end