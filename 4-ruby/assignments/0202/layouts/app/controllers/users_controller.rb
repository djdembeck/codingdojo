class UsersController < ApplicationController
  def index
	@users = User.all
	@user = User.new
	render layout: "two_column"
  end

  def new
  end

  def create
	@user = User.new(user_params)
	if @user.save
		flash[:success] = "User added successfully"
		redirect_to controller: 'users', action: 'index'
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
	def user_params
		params.require(:user).permit(:first_name, :last_name, :fav_lang)
	end