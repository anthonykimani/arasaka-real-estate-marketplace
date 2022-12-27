Rails.application.routes.draw do
  resources :properties
  resources :purchases
  resources :users
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
