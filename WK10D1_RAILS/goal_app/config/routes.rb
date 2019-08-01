Rails.application.routes.draw do
  # get 'sessions/new'
  # get 'sessions/create'
  resource :sessions, only: [:new, :create]

  # get 'links/index'
  # get 'links/show'
  # get 'links/new'
  # get 'links/create'
  # get 'links/update'
  # get 'links/edit'
  # get 'links/destroy'
  resources :links

  # get 'users/new'
  # get 'users/create'
  resources :users, only: [:new, :create]
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
