const Greet = require('./greeting.js');

describe('Greet()', function () {
    test('should display', function () {
        expect(Greet()).toBe('Hello, ' + '' + '!');
    });

    test('should display', function () {
        expect(Greet.toUpperCase()).toBe('HELLO, ' + '' + '!');
    });

    test('should display', function () {
        expect(Greet(null)).toBe('Hello, there!');
    });

    test('should display', function () {
        expect(Greet([n])).toBe('Hello, ' + [n]);
    });
});