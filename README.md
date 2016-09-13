# Bemo

Bemo is a Sass-based project starter meant to be a starting point and structural 
guide rather than a full framework. It's bare enough to not interfere with your 
custom styles or scripts, but yet has enough functioning modules to jumpstart 
a project in no time.

Bemo strictly follows the [BEM naming methodology](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/),
and is heavily inspired by the [inuit.css framework](https://github.com/csswizardry/inuit.css/).

Bemo is accompanied by a couple of CLI tools let you easily generate:

1. a basic bemo skeleton
1. custom icon webfonts starting from a set of SVGs

## Structure

A Bemo project will look like this:

```
.
├── fonts
│   └── svg
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

A preview of the BEM blocks available with Bemo is available here: http://cantierecreativo.github.io/bemo/

## Rails one-liner setup (for the lazy ones)

Just type this into you project folder:

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/cantierecreativo/bemo/master/installer/install)"
```

## bemo-webfont, bemo-scaffold

Please take a look at the following repositories if you want to setup 
build tools manually:

* https://github.com/cantierecreativo/bemo-scaffold
* https://github.com/cantierecreativo/bemo-webfonts

## Development

    npm install
    npm link
    cd docs && npm link grunt-bemo
    npm install
    bower install
    grunt dev

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
