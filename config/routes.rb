Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]

    resources :songs, only: [:show, :index, :create, :destroy] do 
      resources :comments, only: [:index]
    end       
    resources :comments, only: [:create, :destroy]
  end 

  post "api/session/validate", to: "api/sessions#validate_email", defaults: {format: :json}

end
