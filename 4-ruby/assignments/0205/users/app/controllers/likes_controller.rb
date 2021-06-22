class LikesController < ApplicationController
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
	Like.where(secret_id: params[:id], user_id: current_user.id).destroy_all
	redirect_to :back
  end
end
