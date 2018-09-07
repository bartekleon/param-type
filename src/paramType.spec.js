"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paramType_1 = require("./paramType");
/* tslint:disable no-construct only-arrow-functions no-empty */
describe("paramType", () => {
    describe("null and undefined", () => {
        it("should work for undefined", () => {
            expect(paramType_1.default(undefined)).toBe("undefined");
        });
        it("should work for null", () => {
            expect(paramType_1.default(null)).toBe("null");
        });
    });
    describe("primitives", () => {
        it("should work for booleans", () => {
            expect(paramType_1.default(true)).toBe("boolean");
            expect(paramType_1.default(false)).toBe("boolean");
            expect(paramType_1.default(new Boolean(true))).toBe("boolean");
        });
        it("should work for numbers", () => {
            expect(paramType_1.default(42)).toBe("number");
            expect(paramType_1.default(new Number(42))).toBe("number");
        });
        it("should work for strings", () => {
            expect(paramType_1.default("str")).toBe("string");
            expect(paramType_1.default(new String("str"))).toBe("string");
        });
    });
    describe("objects", () => {
        it("should work for arguments", () => {
            (function () {
                expect(paramType_1.default(arguments)).toBe("arguments");
            })();
        });
        it("should work for buffers", () => {
            expect(paramType_1.default(Buffer.from(""))).toBe("buffer");
        });
        it("should work for objects", () => {
            class Test {
                get() {
                    return "hi";
                }
            }
            const instance = new Test();
            const literal = {};
            const createdNull = Object.create(null);
            const createdObj = Object.create({});
            expect(paramType_1.default(instance)).toBe("object");
            expect(paramType_1.default(literal)).toBe("object");
            expect(paramType_1.default(createdNull)).toBe("object");
            expect(paramType_1.default(createdObj)).toBe("object");
        });
        it("should work for dates", () => {
            expect(paramType_1.default(new Date())).toBe("date");
        });
        it("should work for arrays", () => {
            expect(paramType_1.default([])).toBe("array");
            expect(paramType_1.default([1, 2, 3])).toBe("array");
            expect(paramType_1.default(new Array())).toBe("array");
        });
        it("should work for regular expressions", () => {
            expect(paramType_1.default(/./)).toBe("regexp");
            expect(paramType_1.default(new RegExp("^foo$"))).toBe("regexp");
        });
        it("should work for functions", () => {
            expect(paramType_1.default(() => { })).toBe("function");
            expect(paramType_1.default(new Function())).toBe("function");
        });
        it("should work for Errors", () => {
            expect(paramType_1.default(new Error(""))).toBe("error");
            expect(paramType_1.default(new TypeError(""))).toBe("typeerror");
            expect(paramType_1.default(new SyntaxError(""))).toBe("syntaxerror");
            expect(paramType_1.default(new ReferenceError(""))).toBe("referenceerror");
            expect(paramType_1.default(new RangeError(""))).toBe("rangeerror");
        });
    });
    describe("es6 features", () => {
        it("should work for resolved promises", () => {
            const promise = Promise.resolve(123);
            expect(paramType_1.default(promise)).toBe("promise");
        });
        it("should work for rejected promises", () => {
            const promise = Promise.reject(new Error("foo bar"));
            promise.catch(() => { });
            expect(paramType_1.default(promise)).toBe("promise");
        });
        it("should work for generator functions", () => {
            const gen = function* named() {
                return true;
            };
            expect(paramType_1.default(gen)).toBe("generatorfunction");
        });
        it("should work for generator objects", () => {
            const gen = function* named() {
                return true;
            };
            expect(paramType_1.default(gen())).toBe("generator");
        });
        it("should work for template strings", () => {
            const name = "Foo";
            expect(paramType_1.default(`Welcome ${name} buddy`)).toBe("string");
        });
        it("should work for Map", () => {
            const map = new Map();
            expect(paramType_1.default(map)).toBe("map");
            expect(paramType_1.default(map.set)).toBe("function");
            expect(paramType_1.default(map.get)).toBe("function");
        });
        it("should work for WeakMap", () => {
            const weakmap = new WeakMap();
            expect(paramType_1.default(weakmap)).toBe("weakmap");
            expect(paramType_1.default(weakmap.set)).toBe("function");
            expect(paramType_1.default(weakmap.get)).toBe("function");
        });
        it("should work for Set", () => {
            const set = new Set();
            expect(paramType_1.default(set)).toBe("set");
            expect(paramType_1.default(set.add)).toBe("function");
        });
        it("should work for WeakSet", () => {
            const weakset = new WeakSet();
            expect(paramType_1.default(weakset)).toBe("weakset");
            expect(paramType_1.default(weakset.add)).toBe("function");
        });
        it("should work for Set Iterator", () => {
            const SetValuesIterator = new Set().values();
            expect(paramType_1.default(SetValuesIterator)).toBe("setiterator");
        });
        it("should work for Map Iterator", () => {
            const MapValuesIterator = new Map().values();
            expect(paramType_1.default(MapValuesIterator)).toBe("mapiterator");
        });
        it("should work for Array Iterator", () => {
            const ArrayEntriesIterator = [].entries();
            expect(paramType_1.default(ArrayEntriesIterator)).toBe("arrayiterator");
        });
        it("should work for String Iterator", () => {
            const StringCharIterator = ""[Symbol.iterator]();
            expect(paramType_1.default(StringCharIterator)).toBe("stringiterator");
        });
        it("should work for Symbol", () => {
            expect(paramType_1.default(Symbol("foo"))).toBe("symbol");
            expect(paramType_1.default(Symbol.prototype)).toBe("symbol");
        });
        it("should work for Int8Array", () => {
            const int8array = new Int8Array(1);
            expect(paramType_1.default(int8array)).toBe("int8array");
        });
        it("should work for Uint8Array", () => {
            const uint8array = new Uint8Array(1);
            expect(paramType_1.default(uint8array)).toBe("uint8array");
        });
        it("should work for Uint8ClampedArray", () => {
            const uint8clampedarray = new Uint8ClampedArray(1);
            expect(paramType_1.default(uint8clampedarray)).toBe("uint8clampedarray");
        });
        it("should work for Int16Array", () => {
            const int16array = new Int16Array(1);
            expect(paramType_1.default(int16array)).toBe("int16array");
        });
        it("should work for Uint16Array", () => {
            const uint16array = new Uint16Array(1);
            expect(paramType_1.default(uint16array)).toBe("uint16array");
        });
        it("should work for Int32Array", () => {
            const int32array = new Int32Array(1);
            expect(paramType_1.default(int32array)).toBe("int32array");
        });
        it("should work for Uint32Array", () => {
            const uint32array = new Uint32Array(1);
            expect(paramType_1.default(uint32array)).toBe("uint32array");
        });
        it("should work for Float32Array", () => {
            const float32array = new Float32Array(1);
            expect(paramType_1.default(float32array)).toBe("float32array");
        });
        it("should work for Float64Array", () => {
            const float64array = new Float64Array(1);
            expect(paramType_1.default(float64array)).toBe("float64array");
        });
    });
});
//# sourceMappingURL=paramType.spec.js.map