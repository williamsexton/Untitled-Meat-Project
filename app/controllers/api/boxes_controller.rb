class Api::BoxesController < ApplicationController
  def show
    @box = Box.find_by(id: params[:id])
    render :show
  end
end
