# Smart Outline
Disabling focus outline without breaking accessibility.
This library will only disable the focus outline when the user is using his mouse
to navigate. Once a users starts using his keyboard the outline is activated again
resulting in the best of both worlds, visually and accessibility wise.

## Usage
This library supports both **AMD** and **CommonJS** module loading and it falls back
it creates a global `smartOutline` object on window.

### RequireJS
>var smartOutline = require('smartOutline');

### ES6
>import smartOutline from 'smartOutline';

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
