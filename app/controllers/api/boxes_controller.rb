class Api::BoxesController < ApplicationController
  def show
    user = User.find_by(id: params[:id])
    @box = user.box
    render :show
  end
end
