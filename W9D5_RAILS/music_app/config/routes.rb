Rails.application.routes.draw do


  
    resources :users, only: [:new, :create, :index]
    resource :session, only: [:new, :create, :destroy]

    resources :bands do
      resources :albums, only: [:new]
    end
  
end




# get 'bands/index'
#   get 'bands/new'
#   get 'bands/create'
#   get 'bands/show'
#   get 'bands/edit'
#   get 'bands/update'
#   get 'bands/destroy'
# get 'sessions/create'
  # get 'sessions/destroy
  # get 'users/index'
  # get 'users/show'
  # get 'users/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html