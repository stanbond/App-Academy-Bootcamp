Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
  # Your routes here
    resources :parties, only: [:show, :index]
    resources :guests, only: [:show, :index] do
      resources :gifts, only: [:index]
    end
    resources :gifts, only: [:show] 
  end
end
