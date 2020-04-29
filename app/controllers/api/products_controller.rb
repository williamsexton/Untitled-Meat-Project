class Api::ProductsController < ApplicationController

    def show
        @product = Product.find_by(id:params[:id])
        render :show
    end
end
