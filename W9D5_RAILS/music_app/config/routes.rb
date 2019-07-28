Rails.application.routes.draw do
    root to: redirect('/bands')
    resources :users, only: [:new, :create, :show]#, :index]
    resource :session, only: [:new, :create, :destroy]
    # resources :bands 
    resources :bands do
      resources :albums, only: [:new]
    end
end



#   resource :session, only: [:new, :create, :destroy]

#   resources :users, only: [:show, :new, :create] do
#     get :activate, on: :collection
#   end

#   resources :bands do
#     resources :albums, only: [:new]
#   end

#   resources :albums, only: [:show, :create, :edit, :update, :destroy] do
#     resources :tracks, only: [:new]
#   end

#   resources :tracks, only: [:show, :create, :edit, :update, :destroy,]

#   resources :notes, only: [:create, :destroy]
# end



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