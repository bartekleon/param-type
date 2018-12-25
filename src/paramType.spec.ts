import { expect } from 'chai';
import paramType from './paramType';
/* tslint:disable */
describe('paramType', () => {

  describe('null and undefined', () => {
  it('should work for undefined', () => {
    expect(paramType(undefined)).to.be.equal('undefined');
  });

  it('should work for null', () => {
    expect(paramType(null)).to.be.equal('null');
  });
  });

  describe('primitives', () => {
    it('should work for booleans', () => {
      expect(paramType(true)).to.be.equal('boolean');
      expect(paramType(false)).to.be.equal('boolean');
      expect(paramType(new Boolean(true))).to.be.equal('boolean');
    });

    it('should work for numbers', () => {
      expect(paramType(42)).to.be.equal('number');
      expect(paramType(new Number(42))).to.be.equal('number');
    });

    it('should work for strings', () => {
      expect(paramType('str')).to.be.equal('string');
      expect(paramType(new String('str'))).to.be.equal('string');
    });
  });

  describe('objects', () => {
    it('should work for arguments', () => {
      (function() {
        expect(paramType(arguments)).to.be.equal('arguments');
      })();
    });

    it('should work for buffers', () => {
      expect(paramType(Buffer.from(''))).to.be.equal('buffer');
    });

    it('should work for classes', () => {
      class Test {
        public get() {
          return this;
        }
      }
      const instance = new Test();
      expect(paramType(instance)).to.be.equal('class');
    });

    it('should work for objects', () => {
      const literal = {};
      const createdNull = Object.create(null);
      const createdObj = Object.create({});

      expect(paramType(literal)).to.be.equal('object');
      expect(paramType(createdNull)).to.be.equal('object');
      expect(paramType(createdObj)).to.be.equal('object');
    });

    it('should work for dates', () => {
      expect(paramType(new Date())).to.be.equal('date');
    });

    it('should work for arrays', () => {
      expect(paramType([])).to.be.equal('array');
      expect(paramType([ 1, 2, 3 ])).to.be.equal('array');
      expect(paramType(new Array())).to.be.equal('array');
    });

    it('should work for regular expressions', () => {
      expect(paramType(/./)).to.be.equal('regexp');
      expect(paramType(new RegExp('^foo$'))).to.be.equal('regexp');
    });

    it('should work for functions', () => {
      expect(paramType(() => {})).to.be.equal('function');
      expect(paramType(new Function())).to.be.equal('function');
    });

    it('should work for Errors', () => {
      expect(paramType(new Error(''))).to.be.equal('error');
      expect(paramType(new TypeError(''))).to.be.equal('typeerror');
      expect(paramType(new SyntaxError(''))).to.be.equal('syntaxerror');
      expect(paramType(new ReferenceError(''))).to.be.equal('referenceerror');
      expect(paramType(new RangeError(''))).to.be.equal('rangeerror');
    });
  });

  describe('es6 features', () => {
    it('should work for resolved promises', () => {
      const promise = Promise.resolve(123);

      expect(paramType(promise)).to.be.equal('promise');
    });

    it('should work for rejected promises', () => {
      const promise = Promise.reject(new Error('foo bar'));

      promise.catch(() => {});

      expect(paramType(promise)).to.be.equal('promise');
    });

    it('should work for generator functions', () => {
      const gen = function *named() {
        return true;
      };

      expect(paramType(gen)).to.be.equal('generatorfunction');
    });

    it('should work for generator objects', () => {
      const gen = function *named() {
        return true;
      };

      expect(paramType(gen())).to.be.equal('generator');
    });

    it('should work for template strings', () => {
      const name = 'Foo';

      expect(paramType(`Welcome ${name} buddy`)).to.be.equal('string');
    });

    it('should work for Map', () => {
      const map = new Map();

      expect(paramType(map)).to.be.equal('map');
      expect(paramType(map.set)).to.be.equal('function');
      expect(paramType(map.get)).to.be.equal('function');
    });

    it('should work for WeakMap', () => {
      const weakmap = new WeakMap();

      expect(paramType(weakmap)).to.be.equal('weakmap');
      expect(paramType(weakmap.set)).to.be.equal('function');
      expect(paramType(weakmap.get)).to.be.equal('function');
    });

    it('should work for Set', () => {
      const set = new Set();

      expect(paramType(set)).to.be.equal('set');
      expect(paramType(set.add)).to.be.equal('function');
    });

    it('should work for WeakSet', () => {
      const weakset = new WeakSet();

      expect(paramType(weakset)).to.be.equal('weakset');
      expect(paramType(weakset.add)).to.be.equal('function');
    });

    it('should work for Set Iterator', () => {
      const SetValuesIterator = new Set().values();

      expect(paramType(SetValuesIterator)).to.be.equal('setiterator');
    });

    it('should work for Map Iterator', () => {
      const MapValuesIterator = new Map().values();

      expect(paramType(MapValuesIterator)).to.be.equal('mapiterator');
    });

    it('should work for Array Iterator', () => {
      const ArrayEntriesIterator = [].entries();

      expect(paramType(ArrayEntriesIterator)).to.be.equal('arrayiterator');
    });

    it('should work for String Iterator', () => {
      const StringCharIterator = ''[Symbol.iterator]();

      expect(paramType(StringCharIterator)).to.be.equal('stringiterator');
    });

    it('should work for Symbol', () => {
      expect(paramType(Symbol('foo'))).to.be.equal('symbol');
      expect(paramType(Symbol.prototype)).to.be.equal('symbol');
    });

    it('should work for Int8Array', () => {
      const int8array = new Int8Array(1);

      expect(paramType(int8array)).to.be.equal('int8array');
    });

    it('should work for Uint8Array', () => {
      const uint8array = new Uint8Array(1);

      expect(paramType(uint8array)).to.be.equal('uint8array');
    });

    it('should work for Uint8ClampedArray', () => {
      const uint8clampedarray = new Uint8ClampedArray(1);

      expect(paramType(uint8clampedarray)).to.be.equal('uint8clampedarray');
    });

    it('should work for Int16Array', () => {
      const int16array = new Int16Array(1);

      expect(paramType(int16array)).to.be.equal('int16array');
    });

    it('should work for Uint16Array', () => {
      const uint16array = new Uint16Array(1);

      expect(paramType(uint16array)).to.be.equal('uint16array');
    });

    it('should work for Int32Array', () => {
      const int32array = new Int32Array(1);

      expect(paramType(int32array)).to.be.equal('int32array');
    });

    it('should work for Uint32Array', () => {
      const uint32array = new Uint32Array(1);

      expect(paramType(uint32array)).to.be.equal('uint32array');
    });

    it('should work for Float32Array', () => {
      const float32array = new Float32Array(1);

      expect(paramType(float32array)).to.be.equal('float32array');
    });

    it('should work for Float64Array', () => {
      const float64array = new Float64Array(1);

      expect(paramType(float64array)).to.be.equal('float64array');
    });
  });
});
