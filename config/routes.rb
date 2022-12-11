Rails.application.routes.draw do
<<<<<<< HEAD

  resources :public_letters, only: [:index, :show, :create]
=======
  
  resources :public_letters, only: [:index, :show]
>>>>>>> 51397f7f421d2a5712db92c40055cd42e2dfbed8
  resources :private_letters, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :show, :create, :destroy, :update]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post "/login", to: "users#login"
end
