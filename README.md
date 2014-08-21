# bemo

Bemo is a BEM SASS project starter meant to be a starting point and structural 
guide rather than a full framework. It's bare enough to not interfere with your 
custom styles or scripts, but yet has enough functioning modules to jumpstart 
a project in no time.

Bemo also features some Grunt tasks to easily generate a custom icon webfont
from a set of SVGs and retina-ready sprites.

## Demo

A preview of the BEM blocks available with Bemo is available here: http://stefanoverna.github.io/bemo/

## Super-quick setup for the lazy ones

Just type this into you project folder, and it will setup Grunt for you:

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/stefanoverna/bemo/master/installer/install)"
```

## grunt-bemo plugin

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-bemo --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-bemo');
```

### Configuration
In your project's Gruntfile, add a section named `bemo` to the data object passed into `grunt.initConfig()`.

```js
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
      sassDest:   "app/assets/stylesheets/variables/_sprites.css.scss"
    }
  }
});
```

* `scaffold.sass`: The path to your project stylesheets
* `webfonts.src`: The path containing your 512x512px SVGs
* `webfonts.fontDest`: The path where the custom webfont will be created
* `webfonts.sassDest`: The path where the SASS file containing infos about the icons will be created
* `sprites.src`: The path containing your PNG images
* `sprites.imageDest`: The path where the retina and non-retina sprite images will be created
* `sprites.sassDest`: The path where the SASS file containing infos about the sprites will be created

### 'bemo-scaffold' task

TBW :)

### 'bemo' task

TBW :)

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

