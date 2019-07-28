class UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login_user!(@user)
      flash[:notice] = "Welcome to the Jungle"
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def new
      @user = User.new
      render :new
  end


  def show
    render :show
  end

  def user_params
    params.require(:user).permit(:password, :email)
  end

end

# def index
  #   @users = User.all
  #   render :index
  # end