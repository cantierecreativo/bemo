var fs = require('fs');
var path = require('path');
var _ = require('lodash');

var prefix = "app/assets/";

var config = {
  icons: {
    src:       path.join(prefix, "fonts/svg/*.svg"),
    fontDest:  path.join(prefix, "fonts/"),
    sassDest:  path.join(prefix, "stylesheets/lib/variables/_icon-glyphs.css.sass)")
  },
  sprites: {
    src:       path.join(prefix, "images/sprites/"),
    imageDest: path.join(prefix, "images/sprites-{{density}}.png"),
    sassDest:  path.join(prefix, "stylesheets/lib/variables/_sprites.css.scss")
  }
};

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webfont: {
      icons: {
        src: config.icons.src,
        dest: config.icons.fontDest,
        destCss: path.dirname(config.icons.sassDest),
        options: {
          hashes: false,
          relativeFontPath: '',
          htmlDemo: false,
          font: 'icons',
          template: './.icon-glyphs-template.css',
          types: ['eot', 'woff', 'ttf', 'svg']
        },
      }
    },
    sprite: {
      retina: {
        padding: 3,
        algorithm: 'binary-tree',
        src: path.join(config.sprites.src, "*.png"),
        destImg: config.sprites.imageDest.replace('{{density}}', '2x'),
        destCSS: config.sprites.sassDest + ".tmp"
      },
      non_retina: {
        padding: 3,
        algorithm: 'binary-tree',
        src: path.join(config.sprites.src, "1x", "*.png"),
        destImg: config.sprites.imageDest.replace('{{density}}', '1x'),
        destCSS: config.sprites.sassDest,
        cssTemplate: function(context) {
          var templatePath = path.join(__dirname, '.sprites-template.css');
          var template = fs.readFileSync(templatePath, 'utf8');
          return _.template(template, context);
        }
      }
    },
    image_resize: {
      options: {
        width: "50%"
      },
      resize: {
        files: [{
          expand: true,
          cwd: config.sprites.src,
          src: "*.png",
          dest: path.join(config.sprites.src, "1x")
        }]
      }
    },
    clean: [ 
      path.join(config.sprites.src, "1x"),
      config.sprites.sassDest + ".tmp"
    ],
    moveIconsSassFile: {}
  });

  grunt.registerTask('moveIconsSassFile', 'Fix generated name', function() {
    fs.rename(
      path.join(path.dirname(config.icons.sassDest), 'icons.css'),
      config.icons.sassDest
    );
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-image-resize');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['webfont', 'moveIconsSassFile', 'image_resize', 'sprite', 'clean']);
};

