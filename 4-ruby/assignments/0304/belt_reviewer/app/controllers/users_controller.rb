class UsersController < ApplicationController
  def index
  end

  def new
  end

  def create
    # Login
    if params[:form_action] == "login"
      @user = User.find_by_email(user_params[:email]).try(:authenticate, user_params[:password])
      if @user
        session[:user_id] = @user.id
        flash[:success] = "Login successful"
        redirect_to events_path
      else
        flash[:errors] = ['Invalid Combination']
        redirect_to new_user_path
      end
    # Register
    else
      @user = User.new(user_params)
      if @user.save
        session[:user_id] = @user.id
        flash[:success] = "Registered successfully"
        redirect_to events_path
      else
        flash[:errors] = ["Form can't be blank"]
        redirect_to new_user_path
      end
    end
  end

  def show
    @user = User.find(params[:id])
    @events = Event.where(user: @user)
    # @liked_secrets = @user.secrets_liked
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    @user.first_name = params[:first_name]
    @user.last_name = params[:last_name]
    @user.email = params[:email]
    @user.city = params[:city]
    @user.state = params[:state]
    if @user.valid?
      @user.save
      redirect_to events_path
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to :back
    end
  end

  def destroy
    reset_session
    redirect_to new_user_path
  end
end
private
	def user_params
		params.require(:user).permit(:first_name, :last_name, :email, :city, :state, :password, :password_confirmation)
	end