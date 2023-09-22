<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Non-Enumerable Read-Write Accessor

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Define][@stdlib/utils/define-property] a non-enumerable **read-write** accessor.



<section class="usage">

## Usage

<!-- eslint-disable id-length -->

To use in Observable,

```javascript
setNonEnumerableReadWriteAccessor = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var setNonEnumerableReadWriteAccessor = require( 'path/to/vendor/umd/utils-define-nonenumerable-read-write-accessor/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.0-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.setNonEnumerableReadWriteAccessor;
})();
</script>
```

#### setNonEnumerableReadWriteAccessor( obj, prop, getter, setter )

[Defines][@stdlib/utils/define-property] a non-enumerable **read-write** accessor.

<!-- eslint-disable id-length -->

```javascript
var word = 'bar';
var obj = {};

function getter() {
    return word + ' foo';
}

function setter( v ) {
    word = v;
}

setNonEnumerableReadWriteAccessor( obj, 'foo', getter, setter );

var v = obj.foo;
// returns 'bar foo'

obj.foo = 'beep';

v = obj.foo;
// returns 'beep foo'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Non-enumerable read-write accessors are **non-configurable**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.0-umd/browser.js"></script>
<script type="text/javascript">
(function () {

function Foo( name ) {
    if ( !(this instanceof Foo) ) {
        return new Foo( name );
    }
    setNonEnumerableReadWriteAccessor( this, 'name', getName, setName );
    return this;

    function getName() {
        return 'Hello, ' + name;
    }

    function setName( v ) {
        name = v;
    }
}

var foo = new Foo( 'Grace' );
console.log( foo.name );

foo.name = 'Ada';
console.log( foo.name );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-define-nonenumerable-property`][@stdlib/utils/define-nonenumerable-property]</span><span class="delimiter">: </span><span class="description">define a non-enumerable property.</span>
-   <span class="package-name">[`@stdlib/utils-define-nonenumerable-read-only-accessor`][@stdlib/utils/define-nonenumerable-read-only-accessor]</span><span class="delimiter">: </span><span class="description">define a non-enumerable read-only accessor.</span>
-   <span class="package-name">[`@stdlib/utils-define-nonenumerable-read-only-property`][@stdlib/utils/define-nonenumerable-read-only-property]</span><span class="delimiter">: </span><span class="description">define a non-enumerable read-only property.</span>
-   <span class="package-name">[`@stdlib/utils-define-nonenumerable-write-only-accessor`][@stdlib/utils/define-nonenumerable-write-only-accessor]</span><span class="delimiter">: </span><span class="description">define a non-enumerable write-only accessor.</span>
-   <span class="package-name">[`@stdlib/utils-define-read-write-accessor`][@stdlib/utils/define-read-write-accessor]</span><span class="delimiter">: </span><span class="description">define a read-write accessor.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-define-nonenumerable-read-write-accessor.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-define-nonenumerable-read-write-accessor

[test-image]: https://github.com/stdlib-js/utils-define-nonenumerable-read-write-accessor/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/utils-define-nonenumerable-read-write-accessor/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-define-nonenumerable-read-write-accessor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-define-nonenumerable-read-write-accessor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-define-nonenumerable-read-write-accessor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-define-nonenumerable-read-write-accessor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-define-nonenumerable-read-write-accessor/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-define-nonenumerable-read-write-accessor/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-define-nonenumerable-read-write-accessor/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-define-nonenumerable-read-write-accessor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-define-nonenumerable-read-write-accessor/main/LICENSE

[@stdlib/utils/define-property]: https://github.com/stdlib-js/utils-define-property/tree/umd

<!-- <related-links> -->

[@stdlib/utils/define-nonenumerable-property]: https://github.com/stdlib-js/utils-define-nonenumerable-property/tree/umd

[@stdlib/utils/define-nonenumerable-read-only-accessor]: https://github.com/stdlib-js/utils-define-nonenumerable-read-only-accessor/tree/umd

[@stdlib/utils/define-nonenumerable-read-only-property]: https://github.com/stdlib-js/utils-define-nonenumerable-read-only-property/tree/umd

[@stdlib/utils/define-nonenumerable-write-only-accessor]: https://github.com/stdlib-js/utils-define-nonenumerable-write-only-accessor/tree/umd

[@stdlib/utils/define-read-write-accessor]: https://github.com/stdlib-js/utils-define-read-write-accessor/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
