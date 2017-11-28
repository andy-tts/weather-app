Rails.application.routes.draw do
  get 'welcome/text'

  get 'welcome/index'

  get 'locations/show'
  get 'show' => 'locations#show'
  get 'location' => 'locations#show'

  get 'index' => 'welcome#index'
  post 'index' => 'welcome#index'

  root 'welcome#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
