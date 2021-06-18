class PostsController < ApplicationController
	def index
		@users = User.all
		@user = session[:user]
		@posts = Post.all
		@comments = Comment.all
	end

  def new
  end

  def create
	@post = Post.create(content: post_params[:content], user_id: session[:user]['id'])
	if @post.valid?
		flash[:success] = "Post added successfully"
		redirect_to controller: 'posts', action: 'index'
	else
		flash[:errors] = @post.errors.full_messages
		redirect_to posts_path
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
	def post_params
		params.require(:post).permit(:content, :user_id)
	end