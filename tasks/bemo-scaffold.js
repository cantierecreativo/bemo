var colors = require('colors');
var rl = require('readline-sync');
var fs = require('node-fs-extra');
var path = require('path');
var glob = require('glob');

module.exports = function(grunt) {
  grunt.registerTask('bemo-scaffold', function() {

    function ask(question) {
      return rl.question(question + " ");
    };

    function yesNo(question) {
      var answer = ask('? '.yellow + question + " [y/n]").toLowerCase();
      return answer == 'y' || answer == 'yes';
    }

    function confirmCleanDir(path, force) {
      function cleanDir() {
        fs.mkdirpSync(path);
      }

      if (!fs.existsSync(path)) {
        cleanDir();
        return;
      }

      if (force || yesNo("Can I overwrite the dir " + path.underline + "?")) {
        fs.removeSync(path);
        cleanDir();
      } else {
        throw Error('Refused to clean dir!');
      }
    }

    function copyDirTo(src, dest, force) {
      confirmCleanDir(dest, force);
      fs.copySync(src, dest);
      console.log("✓".green + " Created the dir " + dest.underline);
    }

    var config = grunt.config.get('bemo');

    console.log();
    console.log("Bemo scaffolder".rainbow);
    console.log();

    copyDirTo(path.resolve(__dirname, '../bemo'), config.scaffold.sassRoot, config.scaffold.force);

    if (config.scaffold.sassExt) {
      var sassFiles = glob.sync(path.join(config.scaffold.sass, "**/*.sass"));
      for (var i = 0; i < sassFiles.length; i++) {
        var sassFile = sassFiles[i];
        var newPath = sassFile.replace(/\.sass$/, "." + config.scaffold.sassExt);
        fs.renameSync(sassFile, newPath);
      }
    }

    copyDirTo(path.resolve(__dirname, '../templates/svg'), config.webfonts.src, config.scaffold.force);
    copyDirTo(path.resolve(__dirname, '../templates/sprites'), config.sprites.src, config.scaffold.force);

    console.log();
    console.log("Hurray!".rainbow + " You should now be able to run the " + "grunt bemo".underline + " task!");
  });
};

