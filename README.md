# Smart Outline
[![CircleCI](https://circleci.com/gh/ambassify/smart-outline/tree/master.svg?style=svg&circle-token=447bceb7dddfa4e6972d0044e4157626199a31b1)](https://circleci.com/gh/ambassify/smart-outline/tree/master)

Disabling focus outline without breaking accessibility.
This library will only disable the focus outline when the user is using his mouse
to navigate your web page. Once a users starts using his keyboard the outline is activated again
resulting in the best of both worlds, visually and accessibility wise.

## Demo

* [View online demo](https://ambassify.github.io/smart-outline/)
* [View JSFiddle demo](https://jsfiddle.net/sitebase/ss2g0aj7/)

## Usage
This library supports both **AMD** and **CommonJS** module loading and it falls back
to a global `smartOutline` object.

```
// use RequireJS
var smartOutline = require('smartOutline');

// ES6
import smartOutline from 'smartOutline';

// Load via script tag
<script src="https://cdn.rawgit.com/ambassify/smart-outline/master/main.js"></script>

smartOutline.init();
```

### Initialize with custom configuration
>smartOutline.init({
>    domId: 'my-custom-id'
>});

## Run demo page
Execute following command:
>npm run serve

and navigate to `http://127.0.0.1:7000`.

## Unit Tests
>npm test

You can also [view the online QUnit test page](https://ambassify.github.io/smart-outline/qunit.html).

## Options

| Option   |      Type      |  Description |
|----------|:-------------:|------|
| domId | `string` | ID that is assigned to the style element that gets injected in the DOM |
| hideFocusCSS | `string` | Overwrite the default CSS to hide the focus outline when a user is using the mouse |

## Methods

| Method   |      Return      |  Description |
|----------|:-------------:|------|
| .init() | `HTMLElement` | Initialize the smart outline module |
| .isKeyboardUser() | `boolean` | Return `true` if the current user is a keyboard user |
| .isEnabled() | `boolean` | Check if smart outline is active |
| .destroy() | `null` | Disable smart outline by remove injected style element and all event listeners |

## Browser Support
* Chrome
* Firefox
* Safari
* Opera
* IE 9+
* Edge

## Contributing

If you have some issue or code you would like to add, feel free to open a Pull Request or Issue and we will look into it as soon as we can.

## License

We are releasing this under a MIT License.

## About us

If you would like to know more about us, be sure to have a look at [our website](https://www.ambassify.com), or our Twitter accounts [Ambassify](https://twitter.com/Ambassify), [Sitebase](https://twitter.com/Sitebase), [JorgenEvens](https://twitter.com/JorgenEvens)
