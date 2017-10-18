# BEMO2 Middleman Test site

Just a middleman env to quickly test bemo.

## Install

    $ bundle install
    $ npm install

# Choose the style to be tested

Within the `source/stylesheet`folder, you will find just a single file `application.sass` that loads bemo files from the root folder of the project.

Set the theme you want to load in middleman and change the second block of the loaders

    @import '../../../bemo/[bemo-style]/variables/**/*'  // Variables
