/** @license Apache-2.0 */

'use strict';

/**
* Define a non-enumerable read-write accessor.
*
* @module @stdlib/utils-define-nonenumerable-read-write-accessor
*
* @example
* var setNonEnumerableReadWriteAccessor = require( '@stdlib/utils-define-nonenumerable-read-write-accessor' );
*
* function getter() {
*     return name + ' foo';
* }
*
* function setter( v ) {
*     name = v;
* }
*
* var name = 'bar';
* var obj = {};
*
* setNonEnumerableReadWriteAccessor( obj, 'foo', getter, setter );
*
* var v = obj.foo;
* // returns 'bar foo'
*
* obj.foo = 'beep';
*
* v = obj.foo;
* // returns 'beep foo'
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
