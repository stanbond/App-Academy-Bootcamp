class SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if user
      login_user!(user)
      #flash[:notice] = "Welcome back"
      redirect_to bands_url
    else
      flash[:errors] = "You're not Too Short, but your password may be!"
      redirect_to new_session_url
    end
  end

  def destroy
    logout_user!
    redirect_to new_session_url
  end
  
  def new
    render :new
  end
end