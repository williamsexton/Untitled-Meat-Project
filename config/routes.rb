Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do

    #MVP #1 USER AUTH
    resources :users, only: [:create]
    resource :session, only:[ :create, :destroy]
    
    #MVP #2 & 5 PRODUCT DISPLAY AND NAVIGATION
    resources :products, only: [:show, :index]
    resources :categories, only: [:index, :show]
    
    #MVP #3 & 4 BOXES AND ORDERS
    resources :inclusions, only: [:create, :update, :destroy]
    resources :boxes, only: [:show]
    resources :orders, only: [:index, :show, :create]



  end

end
