class UsersController < ApplicationController
	layout "application"
  def index
  end

  def new
  end

  def create
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
	redirect_to new_session_path
	end
end