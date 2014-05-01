activate :relative_assets

set :relative_links, true
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

activate :deploy do |deploy|
  deploy.method = :git
  deploy.strategy = :force_push
  deploy.build_before = true
end

