Rails.application.routes.draw do
  resources :contacts, only: %i[create index destroy]
  root to: 'contacts#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
