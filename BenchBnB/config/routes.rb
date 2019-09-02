Rails.application.routes.draw do
  namespace :api do
    get 'benches/index'
    get 'benches/create'
  end
  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do    
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :benches, only: [:create, :index]
  end
end
