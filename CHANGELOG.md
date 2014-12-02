# v1.0.9

### Change breakpoint names to facilitate mobile-first approach

[view commit](http://github.com/stefanoverna/bemo/commit/676d1c8373f21692d789821d9bbc4438ec3cde55)

* `gte-lap` becomes simply `lap`
* `lap` becomes `eq-lap`

Mandatory ASCII art:

```
0px            480px           1024x           1500px         ∞px
|               |               |                |              |
|               |<-- lap -------------------------------------->|
|               |               |<-- desk --------------------->|
|               |               |                |<-- wall ---->|
|               |               |                |              |
|<-- eq-palm -->|               |                |              |
|               |<-- eq-lap --->|                |              |
|               |               |<-- eq-desk --->|              |
|               |               |                |              |
|<------------------ lte-lap -->|                |              |
|<---------------------------------- lte-desk -->|              |
|               |               |                |              |
0px            480x           1024px          1500px          ∞px
```


### Normalize `.grid__item` width setter classes syntax

[view commit](http://github.com/stefanoverna/bemo/commit/ac13a7b3749c4e5d74ed62b585cfd06d1fe8adda)

* `.width--3-12` becomes `.width-3-12`
* `.desk--3-12` becomes `.desk-3-12`
* `.desk--push-3-12` becomes `.desk-push-3-12`
* `.desk--pull-3-12` becomes `.desk-pull-3-12`

### Remove Bourbon as BEMO dependency

[view commit](http://github.com/stefanoverna/bemo/commit/cb78698cab4dcc4cb8c2188cd90c58f43b26a66e)

Autoprefixer is the way to go regarding vendor prefixes! We don't need CSS3 mixins any more!

* Import some useful helper functions and mixins from Bourbon, most notably:
  - `+clearfix`
  - `+size`
  - `+position`
  - `+triangle`
* Add `+inline-block` helper mixin

### Make it compatible with node-sass 1.2.3 (libsass)

[view commit](http://github.com/stefanoverna/bemo/commit/02f1761f182670c10017162c9772cac2b5f6843b)

* Drop `sass-list-maps` polyfill, use native Sass 3.3 hashes
* Remove globbing from `application.sass` (Rails apps will change it manually)

# v1.0.8

* Last release without a changelog