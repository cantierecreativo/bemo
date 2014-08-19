module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-bemo');

  grunt.initConfig({
    bemo: {
      scaffold: {
        sass:     "stylesheets"
      },
      webfonts: {
        src:      "fonts/svg",
        fontDest: "fonts",
        sassDest: "stylesheets/variables/_icon-glyphs.sass"
      },
      sprites: {
        src:       "images/sprites",
        imageDest: "images/sprites-{{density}}.png",
        sassDest:  "stylesheets/variables/_sprites.css.scss"
      }
    }
  });
};

