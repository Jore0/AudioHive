Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end 

  post "api/session/validate", to: "api/sessions#validate_email", defaults: {format: :json}

  resources :songs, only:[:show]
end
