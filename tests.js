'use strict';

function emulateClick() {
    smartOutline._clickListener();
}

QUnit.module('Smart Outline Tests', function( hooks ) {

    hooks.afterEach( function() {
        smartOutline.destroy();
    });

    QUnit.test('smart outline should be available on window', function( assert ) {
        assert.ok( window.hasOwnProperty('smartOutline'), 'Passed!' );
    });

    QUnit.test('Method call before init should throw error', function( assert ) {
        assert.throws(smartOutline.isKeyboardUser, 'Passed!');
    });

    QUnit.test('Init should inject style element', function( assert ) {
        var el = smartOutline.init();

        assert.ok(el.innerHTML === '', 'Should be empty');
        emulateClick();
        assert.ok(el.innerHTML.indexOf(':focus') > -1, 'Should contain focus style');
    });

    QUnit.test('Custom domId option', function( assert ) {
        var el = smartOutline.init({domId: 'customid'});
        assert.ok(el.id === 'customid', 'Passed!');
    });


    QUnit.test('Custom hideFocusCSS option', function( assert ) {
        var el = smartOutline.init({hideFocusCSS: 'bla'});

        emulateClick();
        assert.ok(el.innerHTML === 'bla', 'Passed!');
    });

    QUnit.test('Get options', function( assert ) {
        var customOptions = {domId: 'test'};
        smartOutline.init(customOptions);
        var options = smartOutline.getOptions();

        assert.ok(options.hasOwnProperty('domId'), 'Passed!');
        assert.ok(options.hasOwnProperty('hideFocusCSS'), 'Passed!');
        assert.ok(options.domId === customOptions.domId, 'Passed!');
    });

});
