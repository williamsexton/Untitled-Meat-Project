class Api::InclusionsController < ApplicationController
    def create
        @inclusion = Inclusion.new(inclusion_params)
        if @inclusion.save
            render :show
        else
            render json: @inclusion.errors.full_messages, status: 422
        end
    end

    def update 
      @inclusion = Inclusion.find_by(id: params[:id])
      if @inclusion.update(inclusion_params)
            render :show
        else
            render json: @inclusion.errors.full_messages, status: 422
        end
    end

    def destroy 
      @inclusion = Inclusion.find_by(id: params[:id])
      if @inclusion.destroy
            render :show
        else
            render json: @inclusion.errors.full_messages, status: 422
        end
    end

    private
    def inclusion_params 
        params.require(:inclusion).permit(:includable_id, :includable_type, :product_id, :quantity)
    end
end
