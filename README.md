# Smart Outline [![CircleCI](https://circleci.com/gh/ambassify/smart-outline/tree/master.svg?style=svg&circle-token=447bceb7dddfa4e6972d0044e4157626199a31b1)](https://circleci.com/gh/ambassify/smart-outline/tree/master)
Disabling focus outline without breaking accessibility.
This library will only disable the focus outline when the user is using his mouse
to navigate your web page. Once a users starts using his keyboard the outline is activated again
resulting in the best of both worlds, visually and accessibility wise.

## Demo

[View online demo](https://ambassify.github.io/smart-outline/)

## Usage
This library supports both **AMD** and **CommonJS** module loading and it falls back
to a global `smartOutline` object.

### Loading the module
>var smartOutline = require('smartOutline');
or
>import smartOutline from 'smartOutline';
or
><script src="https://cdn.rawgit.com/ambassify/smart-outline/master/main.js"></script>

### Initialize
smartOutline.init();

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
| .init() | `HTMLElement` | Check is smart outline is active |
| .isKeyboardUser() | `boolean` | Return `true` if the current user is a keyboard user |
| .isEnabled() | `boolean` | Check is smart outline is active |
| .destroy() | `null` | Disable smart outline by remove injected style element and all event listeners |

## Browser Support
* Chrome
* Firefox
* Safari
* Opera
* IE 9+
* Edge
