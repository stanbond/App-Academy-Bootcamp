Rails.application.routes.draw do


    resources :users, only: [:new, :create, :index]
    resource :session, only: [:new, :create, :destroy]
  
end

# get 'sessions/create'
  # get 'sessions/destroy
  # get 'users/index'
  # get 'users/show'
  # get 'users/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html