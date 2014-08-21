module.exports = {
  'buildSass': [
    'bemo-scaffold',
    'copy:replaceApplicationSass',
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
  'deploy': [
    'build',
    'gh-pages'
  ],
  'default': [
    'build'
  ]
}

