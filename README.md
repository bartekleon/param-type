# param-type [![NPM version](https://img.shields.io/npm/v/param-type.svg?style=flat)](https://www.npmjs.com/package/param-type)

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save param-type
```

## Why use this instead of kind-of?

1. [it's faster](#benchmarks)
2. [even better type checking](#better-type-checking)

```js
import paramType from 'param-type';
or
const paramType = require('param-type').default;

paramType(undefined); //=> 'undefined'

paramType(null); //=> 'null'

paramType(true); //=> 'boolean'

paramType(false); //=> 'boolean'

paramType(new Buffer('')); //=> 'buffer'

paramType(42); //=> 'number'

paramType('str'); //=> 'string'

paramType(arguments); //=> 'arguments'

paramType({}); //=> 'object'

paramType(Object.create(null)); //=> 'object'

paramType(new Test()); //=> 'object'

paramType(new Date()); //=> 'date'

paramType([1, 2, 3]); //=> 'array'

paramType(/foo/); //=> 'regexp'

paramType(new RegExp('foo')); //=> 'regexp'

paramType(new Error('error')); //=> 'error'

paramType(new TypeError('error')); //=> 'TypeError'

paramType(function () {}); //=> 'function'

paramType(function * () {}); //=> 'generatorfunction'

paramType(Symbol('str')); //=> 'symbol'

paramType(new Map()); //=> 'map'

paramType(new WeakMap()); //=> 'weakmap'

paramType(new Set()); //=> 'set'

paramType(new WeakSet()); //=> 'weakset'

paramType(new Int8Array()); //=> 'int8array'

paramType(new Uint8Array()); //=> 'uint8array'

paramType(new Uint8ClampedArray()); //=> 'uint8clampedarray'

paramType(new Int16Array()); //=> 'int16array'

paramType(new Uint16Array()); //=> 'uint16array'

paramType(new Int32Array()); //=> 'int32array'

paramType(new Uint32Array()); //=> 'uint32array'

paramType(new Float32Array()); //=> 'float32array'

paramType(new Float64Array()); //=> 'float64array'

```

## Benchmarks

```bash

1 of 54; paramType: undefined, kindOf: undefined; undefined
paramType x 232,529,580 ops/sec ±0.25% (96 runs sampled)
kindOf x 232,828,210 ops/sec ±0.22% (95 runs sampled)

2 of 54; paramType: null, kindOf: null; null
paramType x 861,366,755 ops/sec ±0.08% (94 runs sampled)
kindOf x 860,534,655 ops/sec ±0.09% (90 runs sampled)

3 of 54; paramType: boolean, kindOf: boolean; true
paramType x 859,796,084 ops/sec ±0.08% (96 runs sampled)
kindOf x 859,137,398 ops/sec ±0.12% (93 runs sampled)

4 of 54; paramType: boolean, kindOf: boolean; [Boolean: false]
paramType x 11,456,708 ops/sec ±2.08% (92 runs sampled)
kindOf x 7,743,944 ops/sec ±0.35% (91 runs sampled)

5 of 54; paramType: number, kindOf: number; 42
paramType x 854,180,837 ops/sec ±0.32% (92 runs sampled)
kindOf x 844,934,313 ops/sec ±0.43% (92 runs sampled)

6 of 54; paramType: number, kindOf: number; [Number: 42]
paramType x 11,825,460 ops/sec ±0.49% (93 runs sampled)
kindOf x 7,782,055 ops/sec ±0.94% (94 runs sampled)

7 of 54; paramType: string, kindOf: string; str
paramType x 856,236,138 ops/sec ±0.08% (96 runs sampled)
kindOf x 850,086,443 ops/sec ±0.15% (93 runs sampled)

8 of 54; paramType: string, kindOf: string; [String: 'str']
paramType x 11,176,581 ops/sec ±2.26% (90 runs sampled)
kindOf x 7,201,272 ops/sec ±0.61% (93 runs sampled)

9 of 54; paramType: buffer, kindOf: buffer; <Buffer >
paramType x 843,157,940 ops/sec ±1.37% (94 runs sampled)
kindOf x 845,896,308 ops/sec ±0.08% (96 runs sampled)

10 of 54; paramType: object, kindOf: object; Test {}
paramType x 10,311,092 ops/sec ±0.78% (92 runs sampled)
kindOf x 16,222,608 ops/sec ±0.41% (95 runs sampled)

11 of 54; paramType: object, kindOf: object; {}
paramType x 9,502,126 ops/sec ±1.86% (91 runs sampled)
kindOf x 6,589,771 ops/sec ±0.35% (90 runs sampled)

12 of 54; paramType: object, kindOf: object; {}
paramType x 58,496,946 ops/sec ±0.62% (93 runs sampled)
kindOf x 7,072,641 ops/sec ±0.37% (93 runs sampled)

13 of 54; paramType: object, kindOf: object; {}
paramType x 11,931,658 ops/sec ±0.40% (94 runs sampled)
kindOf x 9,396,057 ops/sec ±1.02% (93 runs sampled)

14 of 54; paramType: date, kindOf: date; 2018-08-30T14:06:11.084Z
paramType x 854,501,424 ops/sec ±0.07% (96 runs sampled)
kindOf x 835,282,391 ops/sec ±0.13% (94 runs sampled)

15 of 54; paramType: array, kindOf: array; []
paramType x 855,124,500 ops/sec ±0.12% (96 runs sampled)
kindOf x 851,350,257 ops/sec ±0.08% (96 runs sampled)

16 of 54; paramType: array, kindOf: array; [ 1, 2, 3 ]
paramType x 855,533,418 ops/sec ±0.08% (95 runs sampled)
kindOf x 851,269,708 ops/sec ±0.09% (94 runs sampled)

17 of 54; paramType: array, kindOf: array; []
paramType x 855,693,176 ops/sec ±0.08% (93 runs sampled)
kindOf x 844,913,453 ops/sec ±1.42% (90 runs sampled)

18 of 54; paramType: regexp, kindOf: regexp; /./
paramType x 854,200,203 ops/sec ±0.04% (96 runs sampled)
kindOf x 827,346,536 ops/sec ±0.11% (95 runs sampled)

19 of 54; paramType: regexp, kindOf: regexp; /^foo$/
paramType x 852,697,504 ops/sec ±0.09% (97 runs sampled)
kindOf x 827,161,399 ops/sec ±0.17% (92 runs sampled)

20 of 54; paramType: function, kindOf: function; () => { }
paramType x 44,005,853 ops/sec ±0.27% (94 runs sampled)
kindOf x 23,147,781 ops/sec ±0.30% (95 runs sampled)

21 of 54; paramType: function, kindOf: function; function anonymous() { }
paramType x 44,012,200 ops/sec ±0.15% (96 runs sampled)
kindOf x 23,131,852 ops/sec ±0.33% (94 runs sampled)

22 of 54; paramType: error, kindOf: error; Error
paramType x 854,936,723 ops/sec ±0.21% (95 runs sampled)
kindOf x 826,491,491 ops/sec ±0.10% (95 runs sampled)

23 of 54; paramType: typeerror, kindOf: error; TypeError
paramType x 848,079,116 ops/sec ±0.29% (94 runs sampled)
kindOf x 823,982,705 ops/sec ±0.08% (94 runs sampled)

24 of 54; paramType: syntaxerror, kindOf: error; SyntaxError
paramType x 848,539,406 ops/sec ±0.22% (96 runs sampled)
kindOf x 787,520,028 ops/sec ±2.13% (93 runs sampled)

25 of 54; paramType: referenceerror, kindOf: error; ReferenceError
paramType x 849,306,191 ops/sec ±0.15% (94 runs sampled)
kindOf x 822,882,350 ops/sec ±0.09% (98 runs sampled)

26 of 54; paramType: rangeerror, kindOf: error; RangeError
paramType x 848,792,554 ops/sec ±0.17% (96 runs sampled)
kindOf x 822,489,308 ops/sec ±0.09% (95 runs sampled)

27 of 54; paramType: promise, kindOf: promise; Promise { 123 }
paramType x 38,624,211 ops/sec ±0.38% (93 runs sampled)
kindOf x 30,413,884 ops/sec ±1.48% (93 runs sampled)

28 of 54; paramType: promise, kindOf: promise; Promise { <pending> }
paramType x 38,842,016 ops/sec ±0.14% (96 runs sampled)
kindOf x 30,605,588 ops/sec ±0.34% (96 runs sampled)

29 of 54; paramType: generatorfunction, kindOf: generatorfunction; function* named() { return true; }
paramType x 42,513,717 ops/sec ±1.31% (96 runs sampled)
kindOf x 39,970,558 ops/sec ±0.27% (95 runs sampled)

30 of 54; paramType: map, kindOf: map; Map {}
paramType x 20,892,524 ops/sec ±0.36% (97 runs sampled)
kindOf x 6,675,789 ops/sec ±0.65% (92 runs sampled)

31 of 54; paramType: function, kindOf: function; function set() { [native code] }
paramType x 42,471,400 ops/sec ±0.27% (98 runs sampled)
kindOf x 23,045,797 ops/sec ±0.46% (94 runs sampled)

32 of 54; paramType: function, kindOf: function; function get() { [native code] }
paramType x 41,915,516 ops/sec ±1.34% (94 runs sampled)
kindOf x 22,035,007 ops/sec ±1.98% (92 runs sampled)

33 of 54; paramType: weakmap, kindOf: weakmap; WeakMap { [items unknown] }
paramType x 38,271,040 ops/sec ±0.82% (93 runs sampled)
kindOf x 26,519,721 ops/sec ±0.42% (94 runs sampled)

34 of 54; paramType: function, kindOf: function; function set() { [native code] }
paramType x 42,474,601 ops/sec ±0.49% (97 runs sampled)
kindOf x 23,089,446 ops/sec ±0.39% (92 runs sampled)

35 of 54; paramType: function, kindOf: function; function get() { [native code] }
paramType x 42,493,569 ops/sec ±0.29% (95 runs sampled)
kindOf x 22,965,640 ops/sec ±0.66% (95 runs sampled)

36 of 54; paramType: set, kindOf: set; Set {}
paramType x 37,147,866 ops/sec ±0.29% (94 runs sampled)
kindOf x 20,203,494 ops/sec ±0.41% (93 runs sampled)

37 of 54; paramType: function, kindOf: function; function add() { [native code] }
paramType x 42,542,313 ops/sec ±0.18% (93 runs sampled)
kindOf x 23,099,553 ops/sec ±0.30% (95 runs sampled)

38 of 54; paramType: weakset, kindOf: weakset; WeakSet { [items unknown] }
paramType x 38,111,152 ops/sec ±0.92% (95 runs sampled)
kindOf x 23,624,576 ops/sec ±0.58% (94 runs sampled)

39 of 54; paramType: function, kindOf: function; function add() { [native code] }
paramType x 42,512,212 ops/sec ±0.33% (97 runs sampled)
kindOf x 23,121,852 ops/sec ±0.34% (94 runs sampled)

40 of 54; paramType: setiterator, kindOf: setiterator; [Set Iterator] {  }
paramType x 3,119,704 ops/sec ±0.34% (92 runs sampled)
kindOf x 2,374,588 ops/sec ±2.74% (96 runs sampled)

41 of 54; paramType: mapiterator, kindOf: mapiterator; [Map Iterator] {  }
paramType x 3,549,362 ops/sec ±0.25% (94 runs sampled)
kindOf x 3,590,369 ops/sec ±1.46% (93 runs sampled)

42 of 54; paramType: arrayiterator, kindOf: arrayiterator; Object [Array Iterator] {}
paramType x 3,106,207 ops/sec ±0.29% (96 runs sampled)
kindOf x 3,530,001 ops/sec ±0.29% (94 runs sampled)

43 of 54; paramType: stringiterator, kindOf: stringiterator; Object [String Iterator] {}
paramType x 3,033,089 ops/sec ±1.72% (96 runs sampled)
kindOf x 3,596,716 ops/sec ±0.36% (94 runs sampled)

44 of 54; paramType: symbol, kindOf: symbol; Symbol(foo)
paramType x 854,952,179 ops/sec ±0.10% (97 runs sampled)
kindOf x 851,428,920 ops/sec ±0.07% (92 runs sampled)

45 of 54; paramType: symbol, kindOf: symbol; Symbol {}
paramType x 38,830,190 ops/sec ±0.19% (96 runs sampled)
kindOf x 34,718,953 ops/sec ±0.52% (92 runs sampled)

46 of 54; paramType: int8array, kindOf: int8array; Int8Array [  ]
paramType x 37,600,628 ops/sec ±0.31% (93 runs sampled)
kindOf x 18,568,330 ops/sec ±2.19% (91 runs sampled)

47 of 54; paramType: uint8array, kindOf: uint8array; Uint8Array [  ]
paramType x 17,607,559 ops/sec ±2.58% (88 runs sampled)
kindOf x 5,571,822 ops/sec ±1.41% (88 runs sampled)

48 of 54; paramType: uint8clampedarray, kindOf: uint8clampedarray; Uint8ClampedArray [  ]
paramType x 35,503,774 ops/sec ±2.23% (90 runs sampled)
kindOf x 16,473,845 ops/sec ±0.44% (94 runs sampled)

49 of 54; paramType: int16array, kindOf: int16array; Int16Array [  ]
paramType x 35,284,544 ops/sec ±0.30% (94 runs sampled)
kindOf x 14,742,312 ops/sec ±1.64% (93 runs sampled)

50 of 54; paramType: uint16array, kindOf: uint16array; Uint16Array [  ]
paramType x 36,774,376 ops/sec ±0.17% (95 runs sampled)
kindOf x 14,369,110 ops/sec ±0.61% (93 runs sampled)

51 of 54; paramType: int32array, kindOf: int32array; Int32Array [  ]
paramType x 36,343,115 ops/sec ±0.34% (91 runs sampled)
kindOf x 13,334,695 ops/sec ±0.36% (91 runs sampled)

52 of 54; paramType: uint32array, kindOf: uint32array; Uint32Array [  ]
paramType x 36,202,306 ops/sec ±1.00% (94 runs sampled)
kindOf x 12,709,154 ops/sec ±0.39% (93 runs sampled)

53 of 54; paramType: float32array, kindOf: float32array; Float32Array [  ]
paramType x 35,642,803 ops/sec ±0.55% (94 runs sampled)
kindOf x 12,137,500 ops/sec ±0.43% (92 runs sampled)

54 of 54; paramType: float64array, kindOf: float64array; Float64Array [  ]
paramType x 35,708,504 ops/sec ±0.30% (94 runs sampled)
kindOf x 11,517,890 ops/sec ±0.39% (96 runs sampled)
```

## Better type checking

Returns specific `Error` (TypeError, ReferenceError) type instead of `error`

## Test

- Unit tests:
```sh
$ npm install && npm test
```
- Benchmarking:
Import your favourite type checking library in `benchmark.ts` and add it to test
```javascript
targets.forEach((target, index) => {
  console.log(`\n${index + 1} of ${targets.length};`, `paramType: ${paramType(target)}`, target);
  new Suite()
    .add("typeOf", () => {
      paramType(target);
    })
    .add(Your library name, () => {
      Your_library(target);
    })
    .on("cycle", (event: Event) => {
      console.log(`${String(event.target)}`);
    })
    .run();
});
```

### Author

**kmdrGroch**

### License
Copyright © 2018, [kmdrGroch](https://github.com/kmdrgroch).
Released under the [MIT License](LICENSE).