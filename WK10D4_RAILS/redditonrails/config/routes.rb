Rails.application.routes.draw do
  # get 'comments/create'
  # get 'comments/destroy'
  resource :session
  resources :users
  resources :posts do 
    resources :comments 
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
