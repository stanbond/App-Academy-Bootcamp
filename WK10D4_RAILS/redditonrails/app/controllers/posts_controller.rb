class PostsController < ApplicationController
  before_action :require_login 

  def index
    @posts = Post.all 
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id

    if @post.save
      redirect_to ##
    else
      flash[:errors] = @post.errors.full_messages
      render :new
    end
  end

  def update
    @post = current_user.posts.find(params[:id])
    if @post.update_attributes(post_params)
      redirect_to ##
    else
      flash[:errors] = @post.errors.full_messages
      redirect_to ###
    end
  end

  def edit
    @post = Post.find(params[:id])
  end

  def destroy
  end

  def post_params
    params.require(:post).permit(:title, :url)
  end
end
