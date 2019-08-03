class CommentsController < ApplicationController
  before_action :require_login

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id 
    @comment.post_id = params[:post_id]
    @comment.save
    flash[:errors] = @comment.errors.full_messages
    redirect_to post_url(@comment.post_id)
  end

  # IS THE CREATE FROM POST EQUIVALENT????

  # def create
  #   @post = Post.new(post_params)
  #   @post.user_id = current_user.id

  #   if @post.save
  #     redirect_to ##
  #   else
  #     flash[:errors] = @post.errors.full_messages
  #     render :new
  #   end
  # end


  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    redirect_to post_url
  end

  def comment_params
    params.require(:comment).permit(:body)
  end
end
