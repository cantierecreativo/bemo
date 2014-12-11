# v1.0.10

### Major changes to BEMO default style blocks!

Default styles sucked, now they don't.

* [`f4587bf`](http://github.com/stefanoverna/bemo/commit/f4587bf) Optimize legibility
* [`5a3f991`](http://github.com/stefanoverna/bemo/commit/5a3f991) Change default color of links
* [`9cbd1ec`](http://github.com/stefanoverna/bemo/commit/9cbd1ec) Fix outline
* [`e16b9e6`](http://github.com/stefanoverna/bemo/commit/e16b9e6) Change fields focus default color
* [`3a8f81f`](http://github.com/stefanoverna/bemo/commit/3a8f81f) Style legend
* [`c136485`](http://github.com/stefanoverna/bemo/commit/c136485) Export wrap width into global variable
* [`1de6945`](http://github.com/stefanoverna/bemo/commit/1de6945) Change buttons default style
* [`2620e8b`](http://github.com/stefanoverna/bemo/commit/2620e8b) Change flash default styling
* [`0287119`](http://github.com/stefanoverna/bemo/commit/0287119) Small tweaks to .hero style
* [`07071f6`](http://github.com/stefanoverna/bemo/commit/07071f6) Better .nav-breadcrumbs
* [`e1b503f`](http://github.com/stefanoverna/bemo/commit/e1b503f) Rename $space-amounts to $vertical-space-amounts
* [`447e01b`](http://github.com/stefanoverna/bemo/commit/447e01b) Better responsive .table
* [`e4fa832`](http://github.com/stefanoverna/bemo/commit/e4fa832) Change color palette
* [`01af4f6`](http://github.com/stefanoverna/bemo/commit/01af4f6) Change default heading styles
* [`30bdbdb`](http://github.com/stefanoverna/bemo/commit/30bdbdb) Add new icons (Material Design Icons by Google)
* [`36a8e8e`](http://github.com/stefanoverna/bemo/commit/36a8e8e) Make .input use icons
* [`9bbcdbf`](http://github.com/stefanoverna/bemo/commit/9bbcdbf) Minor changes

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


### Normalize `.grid__item` width classes syntax

[view commit](http://github.com/stefanoverna/bemo/commit/ac13a7b3749c4e5d74ed62b585cfd06d1fe8adda)

Since these classes are not BEM modifiers, let's make it clear and drop the
double hypen:

* `.width--3-12` becomes `.width-3-12`
* `.desk--3-12` becomes `.desk-3-12`
* `.desk--push-3-12` becomes `.desk-push-3-12`
* `.desk--pull-3-12` becomes `.desk-pull-3-12`

### Remove Bourbon as BEMO dependency

[view commit](http://github.com/stefanoverna/bemo/commit/cb78698cab4dcc4cb8c2188cd90c58f43b26a66e)

Autoprefixer is the way to go regarding vendor prefixes! We don't need CSS3 mixins any more!

* Add `+inline-block` helper mixin
* Import some useful helper functions and mixins from Bourbon, most notably:
  - `+clearfix`
  - `+size`
  - `+position`
  - `+triangle`

### Make it compatible with node-sass 1.2.3 (libsass)

[view commit](http://github.com/stefanoverna/bemo/commit/02f1761f182670c10017162c9772cac2b5f6843b)

* Drop `sass-list-maps` polyfill, use native Sass 3.3 hashes
* Remove globbing from `application.sass` (Rails apps will change it manually)

PS. In order to use Sass 3.3+, Rails apps need to replace `sass-rails` gem
with `sass`.

# v1.0.8

* Last release without a changelog

