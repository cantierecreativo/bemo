module.exports = {
  webfonts: {
    src:      "<%= package.paths.templates %>/svg/*.svg",
    fontDest: "<%= package.paths.build %>/fonts/",
    sassDest: "<%= package.paths.temp %>/stylesheets/variables/_icon-glyphs.sass"
  },
  sprites: {
    src:       "<%= package.paths.templates %>/sprites/*.png",
    imageDest: "<%= package.paths.build %>/images/sprites-{{density}}.png",
    sassDest:  "<%= package.paths.temp %>/stylesheets/variables/_sprites.css.scss"
  }
};

