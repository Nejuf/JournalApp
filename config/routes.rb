JournalApp::Application.routes.draw do
  # resources :posts, only: [:index, :create, :destroy], defaults: {format: "json"}
  resources :posts, only: [:index, :create, :destroy, :show]

  root to: "posts#index"
end
