module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-bemo');

  grunt.initConfig({
    bemo: {
      scaffold: {
        sassRoot:   "app/assets/stylesheets",
        sassExt:    "css.sass",
      },
      webfonts: {
        src:        "app/assets/fonts/svg",
        fontDest:   "app/assets/fonts",
        sassDest:   "app/assets/stylesheets/variables/_icon-glyphs.scss"
      },
      sprites: {
        src:        "app/assets/images/sprites",
        imageDest:  "app/assets/images/sprites-{{density}}.png",
        sassDest:   "app/assets/stylesheets/variables/_sprites.scss"
      }
    }
  });
};

