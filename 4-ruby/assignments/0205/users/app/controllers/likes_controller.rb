class LikesController < ApplicationController
	before_action :require_login
	def create
		secret = Secret.find(params[:secret_id])
		like = Like.new(secret: secret, user: current_user)
		if like.save
			redirect_to :back
		else
			flash[:errors] = ['Already liked']
			redirect_to :back
		end
	end

  def destroy
	like = Like.where(secret_id: params[:id], user_id: current_user.id)
	unless like.count == 1
		flash[:errors] = ["Cannot delete a like you don't own"]
		redirect_to secrets_path
	else
		like.destroy_all
		redirect_to secrets_path
	end
  end
end
