import { Suite } from 'benchmark';

import paramType from './src/paramType';

const map = new Map();
const weakmap = new WeakMap();
const set = new Set();
const weakset = new WeakSet();
class Test {
  public get() {
    return this;
  }
}
/* tslint:disable */
const targets = [
    undefined, null, true, new Boolean(false), 42, new Number(42), "str", new String("str"), Buffer.from(""), new Test(), {}, Object.create(null), Object.create({}), new Date(), [], [ 1, 2, 3 ], new Array(), /./, new RegExp("^foo$"), () => {}, new Function(), new Error(""), new TypeError(""), new SyntaxError(""), new ReferenceError(""), new RangeError(""), Promise.resolve(123), Promise.reject(new Error("foo bar")).catch(() => {}), function *named() {
        return true;
    }, map, map.set, map.get, weakmap, weakmap.set, weakmap.get, set, set.add, weakset, weakset.add, set.values(), map.values(), [].entries(), ""[Symbol.iterator](), Symbol("foo"), Symbol.prototype, new Int8Array(1), new Uint8Array(1), new Uint8ClampedArray(1), new Int16Array(1), new Uint16Array(1), new Int32Array(1), new Uint32Array(1), new Float32Array(1), new Float64Array(1)
];

targets.forEach((target, index) => {
  console.log(`\n${index + 1} of ${targets.length};`, `paramType: ${paramType(target)}`, target);
  new Suite()
    .add("typeOf", () => {
      paramType(target);
    })
    .on("cycle", (event: Event) => {
      console.log(`${String(event.target)}`);
    })
    .run();
});
