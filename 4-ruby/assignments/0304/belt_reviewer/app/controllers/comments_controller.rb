class CommentsController < ApplicationController
  def index
  end

  def new
  end

  def create
		comment = Comment.new(content: params[:content], event_id: params[:event_id], user_id: current_user.id)
		if comment.save
			redirect_to :back
		else
			flash[:errors] = ['Not able to write a comment']
			redirect_to :back
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