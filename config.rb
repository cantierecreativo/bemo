activate :relative_assets
activate :gzip

set :relative_links, true
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

compass_config do |config|
  # config.output_style = :compressed
end

activate :deploy do |deploy|
  deploy.method = :git
  deploy.strategy = :force_push
  deploy.build_before = true
end

