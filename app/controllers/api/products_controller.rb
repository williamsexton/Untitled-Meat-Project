class Api::ProductsController < ApplicationController

    def show
        @product = Product.find_by(id:params[:id])
        render :show
    end

    def index
        @products = Product.where("name ILIKE ?", "%#{params[:query]}%")
        @query = params[:query]
        render :index
    end
end