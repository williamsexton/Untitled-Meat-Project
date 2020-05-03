class Api::OrdersController < ApplicationController

  def index
    puts params
    user = User.find_by(id: params[:id])
    if user.nil?
      render json: ['Error - There are no Orders for this user'], status: 422
    else
    @orders = user.orders
    render :index
    end
  end

  def show
     @order = Order.find_by(id:params[:id])
     render :show
  end

  def create
    @order = Order.new(order_params)
    if @order.save
      render :show
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  private
  def order_params
    params.require(:order).permit(:user_id, :price)
  end
end
