class UsersController < ApplicationController
  # def index
  #   @users = User.all
  #   render :index
  # end

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      flash[:notice] = "Welcome to the Jungle"
      redirect_to bands_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end