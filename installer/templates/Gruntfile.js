module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-bemo');

  grunt.initConfig({
    bemo: {
      scaffold: {
        sass:       "app/assets/stylesheets"
      },
      webfonts: {
        src:        "app/assets/fonts/svg",
        fontDest:   "app/assets/fonts",
        sassDest:   "app/assets/stylesheets/variables/_icon-glyphs.sass"
      },
      sprites: {
        src:        "app/assets/images/sprites",
        imageDest:  "app/assets/images/sprites-{{density}}.png",
        sassDest:   "app/assets/stylesheets/variables/_sprites.scss"
      }
    }
  });
};

