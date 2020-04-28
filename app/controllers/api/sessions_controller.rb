class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
          render json: ["Hold up there pardner, thems not the right credentials."], status: 404
        else
            login!(@user)
            render 'api/users/show'
        end
    end
    def destroy
    if logged_in?
      logout!
      render json: {  }
    else
      render json: { message: "Hold up there pardner, you ain't logged in." }, status: 404
    end
  end
end
