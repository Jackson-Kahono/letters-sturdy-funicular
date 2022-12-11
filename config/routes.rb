Rails.application.routes.draw do

  resources :public_letters, only: [:index, :show, :create, :destroy]
  resources :private_letters, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :show, :create, :destroy, :update]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post "/login", to: "users#login"
end
