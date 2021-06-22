class SecretsController < ApplicationController
	before_action :require_login
  def index
	@secrets = Secret.all
  end

  def create
	@secret = Secret.new(content: secret_params[:content], user: current_user)
	if @secret.save
		flash[:success] = "Secret added successfully"
		redirect_to :back
	else
		flash[:errors] = ['Invalid Combination']
		redirect_to new_session_path
	end
  end

def destroy
	secret = Secret.find(params[:id])
	secret.destroy
	redirect_to controller: 'users', action: 'show', id: secret.user.id
	end
end
private
	def secret_params
		params.require(:secret).permit(:content)
	end