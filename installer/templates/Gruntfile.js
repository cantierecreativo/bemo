module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-bemo');

  grunt.initConfig({
    "bemo": {
      "scaffold": {
        "sass":       "app/stylesheets"
      },
      "webfonts": {
        "src":        "app/fonts/svg",
        "fontDest":   "app/fonts",
        "sassDest":   "app/stylesheets/variables/_icon-glyphs.sass"
      },
      "sprites": {
        "src":        "app/images/sprites",
        "imageDest":  "app/images/sprites-{{density}}.png",
        "sassDest":   "app/stylesheets/variables/_sprites.css.scss"
      }
    }
  });
};

