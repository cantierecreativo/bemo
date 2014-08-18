module.exports = {
  sourcesToTemp: {
    files: [
      {
        expand: true,
        cwd: '<%= package.paths.source %>/',
        src: '**/*',
        dest: '<%= package.paths.temp %>/stylesheets/'
      }
    ]
  }
};

