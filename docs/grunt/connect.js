module.exports = {
  options: {
    port: 8000,
    hostname: '*',
    base: '<%= package.paths.build %>',
    open: true
  },
  serve: {
    keepalive: true
  },
  serveWithoutKeepalive: {
    keepalive: false
  }
};

