module.exports = {
  scaffold: {
    sassRoot:  "<%= package.paths.temp %>/stylesheets",
    force:     true
  },
  webfonts: {
    src:       "<%= package.paths.temp %>/fonts/svg",
    fontDest:  "<%= package.paths.build %>/fonts/",
    sassDest:  "<%= package.paths.temp %>/stylesheets/variables/_icon-glyphs.scss"
  },
  sprites: {
    src:       "<%= package.paths.temp %>/images/sprites",
    imageDest: "<%= package.paths.build %>/images/sprites-{{density}}.png",
    sassDest:  "<%= package.paths.temp %>/stylesheets/variables/_sprites.scss"
  }
};

