# Bemo

Bemo is a Sass-based project starter meant to be a starting point and structural 
guide rather than a full framework. It's bare enough to not interfere with your 
custom styles or scripts, but yet has enough functioning modules to jumpstart 
a project in no time.

Bemo strictly follows the [BEM naming methodology](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/),
and is heavily inspired by the [inuit.css framework](https://github.com/csswizardry/inuit.css/).

Bemo is accompanied by a Grunt task that easily lets you generate:

1. custom icon webfonts starting from a set of SVGs
2. retina-ready, resizable sprites

## Structure

A Bemo project will look like this:

```
.
├── fonts
│   └── svg
│ 
├── images
│   └── sprites
│ 
└── stylesheets
    ├── blocks
    ├── formats
    ├── functions
    ├── keyframes
    ├── mixins
    ├── variables
    └── application.sass
```

The fulcrum of the whole tree lies in the `stylesheets/blocks` directory,
which will contain all the blocks that compose your frontend styling.

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
      sassRoot:   "app/assets/stylesheets"
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

* `scaffold.sassRoot`: The path to your project stylesheets
* `scaffold.sassExt`: The extension to give to the Sass files (default: `sass`)
* `webfonts.src`: The path containing your 512x512px SVGs
* `webfonts.fontDest`: The path where the custom webfont will be created
* `webfonts.sassDest`: The path where the SASS file containing infos about the icons will be created
* `sprites.src`: The path containing your PNG images
* `sprites.imageDest`: The path where the retina and non-retina sprite images will be created
* `sprites.sassDest`: The path where the SASS file containing infos about the sprites will be created

### 'bemo-scaffold' task

Once configured, you can easily scaffold the skeleton of you Bemo project with the `grunt bemo-scaffold`,
which will copy all of the files for you.

```
> grunt bemo-scaffold

Running "bemo-scaffold" task

Bemo scaffolder

✓ Created the dir app/assets/stylesheets
✓ Created the dir app/assets/fonts/svg
✓ Created the dir app/assets/images/sprites

Hurray! You should now be able to run the `grunt bemo` task!
```

### 'bemo' task

Every time a new SVG icon or sprite image is added to the project, you'll need to run the `grunt bemo` task
to generate the new assets, and refresh two Sass files:

#### variables/_sprites.scss

```scss
$sprite-size: (
  width   478px,
  height  250px
);

$sprite-images: (
  first-sprite (
    x             0px,
    y             0px,
    width         85px,
    height        250px
  ),
  [...]
);
```

#### variables/_sprites.scss

```scss
$icon-glyphs: (
  checkmark "\f102",
  cross "\f103",
  [...]
);
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

