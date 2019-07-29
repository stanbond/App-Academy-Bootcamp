Rails.application.routes.draw do
  get 'sessions/new'
  get 'sessions/create'
  get 'links/index'
  get 'links/show'
  get 'links/new'
  get 'links/create'
  get 'links/update'
  get 'links/edit'
  get 'links/destroy'
  get 'users/new'
  get 'users/create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
