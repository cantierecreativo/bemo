# grunt-bemo

> Grunt task to easily setup a Bemo-powered frontend project.

## Super-quick setup for the lazy ones

Just type this into you project folder, and it will setup Grunt for you:

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/stefanoverna/bemo/master/installer/install)"
```

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-bemo --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-bemo');
```

## The "bemo" task

### Overview
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

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

