class Api::BenchesController < ApplicationController
  def index
    # @benches = bounds ? Bench.in_bounds(bounds) : Bench.all
    
    @benches = Bench.in_bounds(bounds)
    if params[:max_seating] && params[:min_seating]
      @benches.where("seating >= ?", params[:min_seating])
      .where("seating <= ?", params[:max_seating])
    end
    
    render :index
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render :show
    else
      render json: ['Something is wrong']
    end
  end

  def show
    @bench = Bench.find_by(id: params[:id])
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating, :max_seating, :min_seating)
  end

  def bounds 
    params[:bounds]
  end
end
