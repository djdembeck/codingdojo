class PostsController < ApplicationController
  def index
	@posts = Post.all
	@post = Post.new
	render layout: "three_column"
  end

  def new
  end

  def create
	@post = Post.new(post_params)
	if @post.save
		flash[:success] = "Post submitted successfully"
		redirect_to '/posts'
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
	def post_params
		params.require(:post).permit(:title, :content, :user_id)
	end