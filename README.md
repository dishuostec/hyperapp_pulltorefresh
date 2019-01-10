# @dishuostec/hyperapp-pulltorefresh

A pull to refresh component for [Hyperapp](https://github.com/hyperapp/hyperapp) forked from [PulltoRefresh.js](http://www.boxfactura.com/pulltorefresh.js/).

> ![Hyperapp-PulltoRefresh](https://raw.githubusercontent.com/BoxFactura/pulltorefresh.js/master/img/pulltorefresh.gif)
>
> [**PulltoRefresh.js**](http://www.boxfactura.com/pulltorefresh.js/) • [Demos](http://www.boxfactura.com/pulltorefresh.js/demos/basic.html)
>
> A small, but powerful Javascript library crafted to power your webapp's pull to refresh feature. No markup needed, highly customizable and dependency-free!

## Install

Install it from npm:
```bash
npm install @dishuostec/hyperapp-pulltorefresh --save-dev
```

Or yarn:
```bash
yarn add --dev @dishuostec/hyperapp-pulltorefresh
```

## Usage

```js
import { h, app } from 'hyperapp';
import PullToRefresh from '@dishuostec/hyperapp-pulltorefresh';
import '@dishuostec/hyperapp-pulltorefresh/dist/hyperapp_pulltorefresh.scss';

const state = {};

const actions = {};

const view = (state, actions) => (
  <PullToRefresh>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  </PullToRefresh>
);

app(state, actions, view, document.body);
```

## Options

- **`distThreshold`** (integer)
  Minimum distance required to trigger the refresh.
  <br />&mdash; Defaults to `60`
- **`distMax`** (integer)
  Maximum distance possible for the element.
  <br />&mdash; Defaults to `80`
- **`distReload`** (integer)
  After the `distThreshold` is reached and released, the element will have this height.
  <br />&mdash; Defaults to `50`
- **`distIgnore`** (integer)
  After which distance should we start pulling?
  <br />&mdash; Defaults to `0`
- ~~**`mainElement`**~~
- **`triggerElement`** (string)
  Which element should trigger the pull to refresh?
  <br />&mdash; Defaults to `body`
- ~~**`ptrElement`**~~
- ~~**`classPrefix`**~~
- **`cssProp`** (string)
  Which property will be usedto calculate the element's proportions?
  <br />&mdash; Defaults to `min-height`
- **`iconArrow`** (string)
  The icon for both `instructionsPullToRefresh` and `instructionsReleaseToRefresh`
  <br />&mdash; Defaults to `&#8675;`
- **`iconRefreshing`** (string)
  The icon when the refresh is in progress.
  <br />&mdash; Defaults to `&hellip;`
- **`instructionsPullToRefresh`** (string)
  The initial instructions string.
  <br />&mdash; Defaults to `Pull down to refresh`
- **`instructionsReleaseToRefresh`** (string)
  The instructions string when the `distThreshold` has been reached.
  <br />&mdash; Defaults to `Release to refresh`
- **`instructionsRefreshing`** (string)
  The refreshing text.
  <br />&mdash; Defaults to `Refreshing`
- **`refreshTimeout`** (integer)
  The delay, in milliseconds before the `onRefresh` is triggered.
  <br />&mdash; Defaults to `500`
- ~~**`getMarkup`**~~
- ~~**`getStyles`**~~
- ~~**`onInit`**~~
- **`onRefresh`** (function)
  What will the pull to refresh trigger? You can return a promise.
  <br />&mdash; Defaults to `window.location.reload()`
- **`resistanceFunction`** (function)
  The resistance function, accepts one parameter, must return a number, capping at 1.
  <br />&mdash; Defaults to `t => Math.min(1, t / 2.5)`
- **`shouldPullToRefresh`** (function)
  Which condition should be met for pullToRefresh to trigger?
  <br />&mdash; Defaults to `!window.scrollY`
