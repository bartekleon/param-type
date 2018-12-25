"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const paramType_1 = require("./paramType");
/* tslint:disable */
describe('paramType', () => {
    describe('null and undefined', () => {
        it('should work for undefined', () => {
            chai_1.expect(paramType_1.default(undefined)).to.be.equal('undefined');
        });
        it('should work for null', () => {
            chai_1.expect(paramType_1.default(null)).to.be.equal('null');
        });
    });
    describe('primitives', () => {
        it('should work for booleans', () => {
            chai_1.expect(paramType_1.default(true)).to.be.equal('boolean');
            chai_1.expect(paramType_1.default(false)).to.be.equal('boolean');
            chai_1.expect(paramType_1.default(new Boolean(true))).to.be.equal('boolean');
        });
        it('should work for numbers', () => {
            chai_1.expect(paramType_1.default(42)).to.be.equal('number');
            chai_1.expect(paramType_1.default(new Number(42))).to.be.equal('number');
        });
        it('should work for strings', () => {
            chai_1.expect(paramType_1.default('str')).to.be.equal('string');
            chai_1.expect(paramType_1.default(new String('str'))).to.be.equal('string');
        });
    });
    describe('objects', () => {
        it('should work for arguments', () => {
            (function () {
                chai_1.expect(paramType_1.default(arguments)).to.be.equal('arguments');
            })();
        });
        it('should work for buffers', () => {
            chai_1.expect(paramType_1.default(Buffer.from(''))).to.be.equal('buffer');
        });
        it('should work for classes', () => {
            class Test {
                get() {
                    return this;
                }
            }
            const instance = new Test();
            chai_1.expect(paramType_1.default(instance)).to.be.equal('class');
        });
        it('should work for objects', () => {
            const literal = {};
            const createdNull = Object.create(null);
            const createdObj = Object.create({});
            chai_1.expect(paramType_1.default(literal)).to.be.equal('object');
            chai_1.expect(paramType_1.default(createdNull)).to.be.equal('object');
            chai_1.expect(paramType_1.default(createdObj)).to.be.equal('object');
        });
        it('should work for dates', () => {
            chai_1.expect(paramType_1.default(new Date())).to.be.equal('date');
        });
        it('should work for arrays', () => {
            chai_1.expect(paramType_1.default([])).to.be.equal('array');
            chai_1.expect(paramType_1.default([1, 2, 3])).to.be.equal('array');
            chai_1.expect(paramType_1.default(new Array())).to.be.equal('array');
        });
        it('should work for regular expressions', () => {
            chai_1.expect(paramType_1.default(/./)).to.be.equal('regexp');
            chai_1.expect(paramType_1.default(new RegExp('^foo$'))).to.be.equal('regexp');
        });
        it('should work for functions', () => {
            chai_1.expect(paramType_1.default(() => { })).to.be.equal('function');
            chai_1.expect(paramType_1.default(new Function())).to.be.equal('function');
        });
        it('should work for Errors', () => {
            chai_1.expect(paramType_1.default(new Error(''))).to.be.equal('error');
            chai_1.expect(paramType_1.default(new TypeError(''))).to.be.equal('typeerror');
            chai_1.expect(paramType_1.default(new SyntaxError(''))).to.be.equal('syntaxerror');
            chai_1.expect(paramType_1.default(new ReferenceError(''))).to.be.equal('referenceerror');
            chai_1.expect(paramType_1.default(new RangeError(''))).to.be.equal('rangeerror');
        });
    });
    describe('es6 features', () => {
        it('should work for resolved promises', () => {
            const promise = Promise.resolve(123);
            chai_1.expect(paramType_1.default(promise)).to.be.equal('promise');
        });
        it('should work for rejected promises', () => {
            const promise = Promise.reject(new Error('foo bar'));
            promise.catch(() => { });
            chai_1.expect(paramType_1.default(promise)).to.be.equal('promise');
        });
        it('should work for generator functions', () => {
            const gen = function* named() {
                return true;
            };
            chai_1.expect(paramType_1.default(gen)).to.be.equal('generatorfunction');
        });
        it('should work for generator objects', () => {
            const gen = function* named() {
                return true;
            };
            chai_1.expect(paramType_1.default(gen())).to.be.equal('generator');
        });
        it('should work for template strings', () => {
            const name = 'Foo';
            chai_1.expect(paramType_1.default(`Welcome ${name} buddy`)).to.be.equal('string');
        });
        it('should work for Map', () => {
            const map = new Map();
            chai_1.expect(paramType_1.default(map)).to.be.equal('map');
            chai_1.expect(paramType_1.default(map.set)).to.be.equal('function');
            chai_1.expect(paramType_1.default(map.get)).to.be.equal('function');
        });
        it('should work for WeakMap', () => {
            const weakmap = new WeakMap();
            chai_1.expect(paramType_1.default(weakmap)).to.be.equal('weakmap');
            chai_1.expect(paramType_1.default(weakmap.set)).to.be.equal('function');
            chai_1.expect(paramType_1.default(weakmap.get)).to.be.equal('function');
        });
        it('should work for Set', () => {
            const set = new Set();
            chai_1.expect(paramType_1.default(set)).to.be.equal('set');
            chai_1.expect(paramType_1.default(set.add)).to.be.equal('function');
        });
        it('should work for WeakSet', () => {
            const weakset = new WeakSet();
            chai_1.expect(paramType_1.default(weakset)).to.be.equal('weakset');
            chai_1.expect(paramType_1.default(weakset.add)).to.be.equal('function');
        });
        it('should work for Set Iterator', () => {
            const SetValuesIterator = new Set().values();
            chai_1.expect(paramType_1.default(SetValuesIterator)).to.be.equal('setiterator');
        });
        it('should work for Map Iterator', () => {
            const MapValuesIterator = new Map().values();
            chai_1.expect(paramType_1.default(MapValuesIterator)).to.be.equal('mapiterator');
        });
        it('should work for Array Iterator', () => {
            const ArrayEntriesIterator = [].entries();
            chai_1.expect(paramType_1.default(ArrayEntriesIterator)).to.be.equal('arrayiterator');
        });
        it('should work for String Iterator', () => {
            const StringCharIterator = ''[Symbol.iterator]();
            chai_1.expect(paramType_1.default(StringCharIterator)).to.be.equal('stringiterator');
        });
        it('should work for Symbol', () => {
            chai_1.expect(paramType_1.default(Symbol('foo'))).to.be.equal('symbol');
            chai_1.expect(paramType_1.default(Symbol.prototype)).to.be.equal('symbol');
        });
        it('should work for Int8Array', () => {
            const int8array = new Int8Array(1);
            chai_1.expect(paramType_1.default(int8array)).to.be.equal('int8array');
        });
        it('should work for Uint8Array', () => {
            const uint8array = new Uint8Array(1);
            chai_1.expect(paramType_1.default(uint8array)).to.be.equal('uint8array');
        });
        it('should work for Uint8ClampedArray', () => {
            const uint8clampedarray = new Uint8ClampedArray(1);
            chai_1.expect(paramType_1.default(uint8clampedarray)).to.be.equal('uint8clampedarray');
        });
        it('should work for Int16Array', () => {
            const int16array = new Int16Array(1);
            chai_1.expect(paramType_1.default(int16array)).to.be.equal('int16array');
        });
        it('should work for Uint16Array', () => {
            const uint16array = new Uint16Array(1);
            chai_1.expect(paramType_1.default(uint16array)).to.be.equal('uint16array');
        });
        it('should work for Int32Array', () => {
            const int32array = new Int32Array(1);
            chai_1.expect(paramType_1.default(int32array)).to.be.equal('int32array');
        });
        it('should work for Uint32Array', () => {
            const uint32array = new Uint32Array(1);
            chai_1.expect(paramType_1.default(uint32array)).to.be.equal('uint32array');
        });
        it('should work for Float32Array', () => {
            const float32array = new Float32Array(1);
            chai_1.expect(paramType_1.default(float32array)).to.be.equal('float32array');
        });
        it('should work for Float64Array', () => {
            const float64array = new Float64Array(1);
            chai_1.expect(paramType_1.default(float64array)).to.be.equal('float64array');
        });
    });
});
//# sourceMappingURL=paramType.spec.js.map