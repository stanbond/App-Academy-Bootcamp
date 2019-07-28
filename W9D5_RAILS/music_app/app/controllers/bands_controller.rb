class BandsController < ApplicationController
  #before_action :require_logged_in
  #before_action :require_user!, only: %i(new create edit update)

  def index
    @bands = Band.all
    # render :index
  end

  def show
    @band = Band.find(params[:name])
    render :show
  end

  def new
    @band = Band.new
    render :new
  end

  def create
    @band = current_user.bands.new(band_params)

    if @band.save
      flash[:notice] = "Success"
      redirect_to band_url
    else
      flash[:errors] = @band.errors.full_messages
      render :new
    end
  end

  def edit
    @band = Band.find(params[:name])

    if @band
      render :edit
    else
      flash[:errors] = "Band not found"
      redirect_to bands_url
    end
  end

  def update
    @band = Band.find(params[:name])

    if @band.update_attributes(band_params)
      redirect_to band_url(@band)
    else
      flash[:errors] = "Invalid Input"
      redirect_to band_url(@band)
    end
  end

  def destroy
    @band = Band.find(params[:name])

    if @band.destroy
      redirect_to bands_url
    end
  end

  private

  def band_params
    params.require(:band).permit(:name)
  end
end