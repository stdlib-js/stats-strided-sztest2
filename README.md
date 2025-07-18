<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

<!-- lint disable max-heading-length -->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# sztest2

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute a two-sample Z-test for two single-precision floating-point strided arrays.

<section class="intro">

A Z-test commonly refers to a two-sample location test which compares the means of two independent sets of measurements `X` and `Y` when the population standard deviations are known. A Z-test supports testing three different null hypotheses `H0`:

-   `H0: μX - μY ≥ Δ` versus the alternative hypothesis `H1: μX - μY < Δ`.
-   `H0: μX - μY ≤ Δ` versus the alternative hypothesis `H1: μX - μY > Δ`.
-   `H0: μX - μY = Δ` versus the alternative hypothesis `H1: μX - μY ≠ Δ`.

Here, `μX` and `μY` are the true population means of samples `X` and `Y`, respectively, and `Δ` is the hypothesized difference in means (typically `0` by default).

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-strided-sztest2
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var sztest2 = require( '@stdlib/stats-strided-sztest2' );
```

#### sztest2( NX, NY, alternative, alpha, diff, sigmax, x, strideX, sigmay, y, strideY, out )

Computes a two-sample Z-test for two single-precision floating-point strided arrays.

```javascript
var Results = require( '@stdlib/stats-base-ztest-two-sample-results-float32' );
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
var y = new Float32Array( [ 3.0, 3.0, 5.0, 7.0, 7.0 ] );

var results = new Results();
var out = sztest2( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 2.0, y, 1, results );
// returns {...}

var bool = ( out === results );
// returns true
```

The function has the following parameters:

-   **NX**: number of indexed elements in `x`.
-   **NY**: number of indexed elements in `y`.
-   **alternative**: [alternative hypothesis][@stdlib/stats/base/ztest/alternatives].
-   **alpha**: significance level.
-   **diff**: difference in means under the null hypothesis.
-   **sigmax**: known standard deviation of `x`.
-   **x**: first input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: stride length for `x`.
-   **sigmay**: known standard deviation of `y`.
-   **y**: second input [`Float32Array`][@stdlib/array/float32].
-   **strideY**: stride length for `y`.
-   **out**: output [results object][@stdlib/stats/base/ztest/two-sample/results/float32].

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to perform a two-sample Z-test over every other element in `x` and `y`,

```javascript
var Results = require( '@stdlib/stats-base-ztest-two-sample-results-float32' );
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 4.0, 0.0, 4.0, 0.0, 6.0, 0.0, 6.0, 0.0, 5.0, 0.0 ] );
var y = new Float32Array( [ 3.0, 0.0, 3.0, 0.0, 5.0, 0.0, 7.0, 0.0, 7.0, 0.0 ] );

var results = new Results();
var out = sztest2( 5, 5, 'two-sided', 0.05, 0.0, 1.0, x, 2, 2.0, y, 2, results );
// returns {...}

var bool = ( out === results );
// returns true
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Results = require( '@stdlib/stats-base-ztest-two-sample-results-float32' );
var Float32Array = require( '@stdlib/array-float32' );

var x0 = new Float32Array( [ 0.0, 4.0, 4.0, 6.0, 6.0, 5.0 ] );
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var y0 = new Float32Array( [ 0.0, 3.0, 3.0, 5.0, 7.0, 7.0 ] );
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var results = new Results();
var out = sztest2( 5, 5, 'two-sided', 0.05, 0.0, 1.0, x1, 1, 2.0, y1, 1, results );
// returns {...}

var bool = ( out === results );
// returns true
```

#### sztest2.ndarray( NX, NY, alternative, alpha, diff, sigmax, x, strideX, offsetX, sigmay, y, strideY, offsetY, out )

Computes a two-sample Z-test for two single-precision floating-point strided arrays using alternative indexing semantics.

```javascript
var Results = require( '@stdlib/stats-base-ztest-two-sample-results-float32' );
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 4.0, 4.0, 6.0, 6.0, 5.0 ] );
var y = new Float32Array( [ 3.0, 3.0, 5.0, 7.0, 7.0 ] );

var results = new Results();
var out = sztest2.ndarray( x.length, y.length, 'two-sided', 0.05, 0.0, 1.0, x, 1, 0, 2.0, y, 1, 0, results );
// returns {...}

var bool = ( out === results );
// returns true
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, offset parameters support indexing semantics based on starting indices. For example, to perform a two-sample Z-test over every other element in `x` and `y` starting from the second element

```javascript
var Results = require( '@stdlib/stats-base-ztest-two-sample-results-float32' );
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 0.0, 4.0, 0.0, 4.0, 0.0, 6.0, 0.0, 6.0, 0.0, 5.0 ] );
var y = new Float32Array( [ 0.0, 3.0, 0.0, 3.0, 0.0, 5.0, 0.0, 7.0, 0.0, 7.0 ] );

var results = new Results();
var out = sztest2.ndarray( 5, 5, 'two-sided', 0.05, 0.0, 1.0, x, 2, 1, 2.0, y, 2, 1, results );
// returns {...}

var bool = ( out === results );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   As a general rule of thumb, a Z-test is most reliable when `N >= 50`. For smaller sample sizes or when the standard deviations are unknown, prefer a t-test.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Results = require( '@stdlib/stats-base-ztest-two-sample-results-float32' );
var normal = require( '@stdlib/random-array-normal' );
var sztest2 = require( '@stdlib/stats-strided-sztest2' );

var x = normal( 1000, 4.0, 2.0, {
    'dtype': 'float32'
});
var y = normal( 800, 3.0, 2.0, {
    'dtype': 'float32'
});

var results = new Results();
var out = sztest2( x.length, y.length, 'two-sided', 0.05, 1.0, 2.0, x, 1, 2.0, y, 1, results );
// returns {...}

console.log( out.toString() );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/strided/sztest2.h"
```

#### stdlib_strided_sztest2( NX, NY, alternative, alpha, diff, sigmax, \*X, strideX, sigmay, \*Y, strideY, \*results )

Computes a two-sample Z-test for two single-precision floating-point strided arrays.

```c
#include "stdlib/stats/base/ztest/two-sample/results/float32.h"
#include "stdlib/stats/base/ztest/alternatives.h"

struct stdlib_stats_ztest_two_sample_float32_results results = {
    .rejected = false,
    .alpha = 0.0f,
    .alternative = STDLIB_STATS_ZTEST_TWO_SIDED,
    .pValue = 0.0f,
    .statistic = 0.0f,
    .ci = { 0.0f, 0.0f },
    .nullValue = 0.0f,
    .xmean = 0.0f,
    .ymean = 0.0f
};

const float x[] = { 4.0f, 4.0f, 6.0f, 6.0f, 5.0f };
const float y[] = { 3.0f, 3.0f, 5.0f, 7.0f, 7.0f };

stdlib_strided_sztest2( 5, 5, STDLIB_STATS_ZTEST_TWO_SIDED, 0.05f, 0.0f, 1.0f, x, 1, 2.0f, y, 1, &results );
```

The function accepts the following arguments:

-   **NX**: `[in] CBLAS_INT` number of indexed elements in `x`.
-   **NY**: `[in] CBLAS_INT` number of indexed elements in `y`.
-   **alternative**: `[in] enum STDLIB_STATS_ZTEST_ALTERNATIVE` [alternative hypothesis][@stdlib/stats/base/ztest/alternatives].
-   **alpha**: `[in] float` significance level.
-   **diff**: `[in] float` difference in means under the null hypothesis.
-   **sigmax** `[in] float` known standard deviation of `x`.
-   **X**: `[in] float*` first input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **sigmay** `[in] float` known standard deviation of `y`.
-   **Y**: `[in] float*` second input [`Float32Array`][@stdlib/array/float32].
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.
-   **results**: `[out] struct stdlib_stats_ztest_two_sample_results_float32*` output [results object][@stdlib/stats/base/ztest/two-sample/results/float32].

```c
void stdlib_strided_sztest2( const CBLAS_INT NX, const CBLAS_INT NY, const enum STDLIB_STATS_ZTEST_ALTERNATIVE alternative, const float alpha, const float diff, const float sigmax, const float *X, const CBLAS_INT strideX, const float sigmay, const float *Y, const CBLAS_INT strideY, struct stdlib_stats_ztest_two_sample_float32_results *results );
```

#### stdlib_strided_sztest2_ndarray( NX, NY, alternative, alpha, diff, sigmax, \*X, strideX, offsetX, sigmay, \*Y, strideY, offsetY, \*results )

Computes a two-sample Z-test for two single-precision floating-point strided arrays using alternative indexing semantics.

```c
#include "stdlib/stats/base/ztest/two-sample/results/float32.h"
#include "stdlib/stats/base/ztest/alternatives.h"

struct stdlib_stats_ztest_two_sample_float32_results results = {
    .rejected = false,
    .alpha = 0.0f,
    .alternative = STDLIB_STATS_ZTEST_TWO_SIDED,
    .pValue = 0.0f,
    .statistic = 0.0f,
    .ci = { 0.0f, 0.0f },
    .nullValue = 0.0f,
    .xmean = 0.0f,
    .ymean = 0.0f
};

const float x[] = { 4.0f, 4.0f, 6.0f, 6.0f, 5.0f };
const float y[] = { 3.0f, 3.0f, 5.0f, 7.0f, 7.0f };

stdlib_strided_sztest2_ndarray( 5, 5, STDLIB_STATS_ZTEST_TWO_SIDED, 0.05f, 0.0f, 1.0f, x, 1, 0, 2.0f, y, 1, 0, &results );
```

The function accepts the following arguments:

-   **NX**: `[in] CBLAS_INT` number of indexed elements in `x`.
-   **NY**: `[in] CBLAS_INT` number of indexed elements in `y`.
-   **alternative**: `[in] enum STDLIB_STATS_ZTEST_ALTERNATIVE` [alternative hypothesis][@stdlib/stats/base/ztest/alternatives].
-   **alpha**: `[in] float` significance level.
-   **diff**: `[in] float` difference in means under the null hypothesis.
-   **sigmax** `[in] float` known standard deviation of `x`.
-   **X**: `[in] float*` first input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **sigmay** `[in] float` known standard deviation of `y`.
-   **Y**: `[in] float*` second input [`Float32Array`][@stdlib/array/float32].
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.
-   **offsetY**: `[in] CBLAS_INT` starting index for `Y`.
-   **results**: `[out] struct stdlib_stats_ztest_two_sample_results_float32*` output [results object][@stdlib/stats/base/ztest/two-sample/results/float32].

```c
void stdlib_strided_sztest2_ndarray( const CBLAS_INT NX, const CBLAS_INT NY, const enum STDLIB_STATS_ZTEST_ALTERNATIVE alternative, const float alpha, const float diff, const float sigmax, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const float sigmay, const float *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY, struct stdlib_stats_ztest_two_sample_float32_results *results );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/strided/sztest2.h"
#include "stdlib/stats/base/ztest/two-sample/results/float32.h"
#include "stdlib/stats/base/ztest/alternatives.h"
#include <stdbool.h>
#include <stdio.h>

int main( void ) {
    // Create a strided arrays:
    const float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };
    const float y[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };

    // Specify the number of elements:
    const int NX = 4;
    const int NY = 4;

    // Specify the stride lengths:
    const int strideX = 2;
    const int strideY = 2;

    // Initialize a results object:
    struct stdlib_stats_ztest_two_sample_float32_results results = {
        .rejected = false,
        .alpha = 0.0f,
        .alternative = STDLIB_STATS_ZTEST_TWO_SIDED,
        .pValue = 0.0f,
        .statistic = 0.0f,
        .ci = { 0.0f, 0.0f },
        .nullValue = 0.0f,
        .xmean = 0.0f,
        .ymean = 0.0f
    };

    // Compute a Z-test:
    stdlib_strided_sztest2( NX, NY, STDLIB_STATS_ZTEST_TWO_SIDED, 0.05f, 5.0f, 3.0f, x, strideX, 3.0f, y, strideY, &results );

    // Print the result:
    printf( "Statistic: %f\n", results.statistic );
    printf( "Null hypothesis was %s\n", ( results.rejected ) ? "rejected" : "not rejected" );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-strided-sztest2.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-strided-sztest2

[test-image]: https://github.com/stdlib-js/stats-strided-sztest2/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-strided-sztest2/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-strided-sztest2/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-strided-sztest2?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-strided-sztest2.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-strided-sztest2/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-strided-sztest2/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-strided-sztest2/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-strided-sztest2/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-strided-sztest2/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-strided-sztest2/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-strided-sztest2/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-strided-sztest2/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-strided-sztest2/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[@stdlib/stats/base/ztest/alternatives]: https://github.com/stdlib-js/stats-base-ztest-alternatives

[@stdlib/stats/base/ztest/two-sample/results/float32]: https://github.com/stdlib-js/stats-base-ztest-two-sample-results-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
