module.exports = {
  'buildSass': [
    'copy:sourcesToTemp',
    'bemo',
    'bower:install',
    'sass'
  ],
  'buildStyleguide': [
    'jade:compile'
  ],
  'serve': [
    'connect:serve'
  ],
  'build': [
    'clean:tempDir',
    'clean:buildDir',
    'buildSass',
    'buildStyleguide',
    'clean:tempDir'
  ],
  'dev': [
    'build',
    'connect:serveWithoutKeepalive',
    'watch'
  ],
  'default': [
    'build'
  ],
  'deploy': [
    'build',
    'gh-pages'
  ]
}

