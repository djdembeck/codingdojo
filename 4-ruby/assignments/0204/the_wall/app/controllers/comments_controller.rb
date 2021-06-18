class CommentsController < ApplicationController
  def create
	@comment = Comment.create(content: comment_params[:content], post_id: comment_params[:post_id], user_id: session[:user]['id'])
	if @comment.valid?
		flash[:success] = "Comment added successfully"
		redirect_to controller: 'posts', action: 'index'
	else
		flash[:errors] = @comment.errors.full_messages
		redirect_to posts_path
	end
  end

end
private
	def comment_params
		params.require(:comment).permit(:content, :user_id, :post_id)
	end