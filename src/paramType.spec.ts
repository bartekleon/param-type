import paramType from "./paramType";
/* tslint:disable no-construct only-arrow-functions no-empty */
describe("paramType", () => {

    describe("null and undefined", () => {
        it("should work for undefined", () => {
            expect(paramType(undefined)).toBe("undefined");
        });

        it("should work for null", () => {
            expect(paramType(null)).toBe("null");
        });
    });

    describe("primitives", () => {
        it("should work for booleans", () => {
            expect(paramType(true)).toBe("boolean");
            expect(paramType(false)).toBe("boolean");
            expect(paramType(new Boolean(true))).toBe("boolean");
        });

        it("should work for numbers", () => {
            expect(paramType(42)).toBe("number");
            expect(paramType(new Number(42))).toBe("number");
        });

        it("should work for strings", () => {
            expect(paramType("str")).toBe("string");
            expect(paramType(new String("str"))).toBe("string");
        });
    });

    describe("objects", () => {
        it("should work for arguments", () => {
            (function() {
                expect(paramType(arguments)).toBe("arguments");
            })();
        });

        it("should work for buffers", () => {
            expect(paramType(Buffer.from(""))).toBe("buffer");
        });

        it("should work for objects", () =>  {
            class Test {
                public get() {
                    return "hi";
                }
            }
            const instance = new Test();
            const literal = {};
            const createdNull = Object.create(null);
            const createdObj = Object.create({});

            expect(paramType(instance)).toBe("object");
            expect(paramType(literal)).toBe("object");
            expect(paramType(createdNull)).toBe("object");
            expect(paramType(createdObj)).toBe("object");
        });

        it("should work for dates", () => {
            expect(paramType(new Date())).toBe("date");
        });

        it("should work for arrays", () => {
            expect(paramType([])).toBe("array");
            expect(paramType([ 1, 2, 3 ])).toBe("array");
            expect(paramType(new Array())).toBe("array");
        });

        it("should work for regular expressions", () => {
            expect(paramType(/./)).toBe("regexp");
            expect(paramType(new RegExp("^foo$"))).toBe("regexp");
        });

        it("should work for functions", () => {
            expect(paramType(() => {})).toBe("function");
            expect(paramType(new Function())).toBe("function");
        });

        it("should work for Errors", () => {
            expect(paramType(new Error(""))).toBe("error");
            expect(paramType(new TypeError(""))).toBe("typeerror");
            expect(paramType(new SyntaxError(""))).toBe("syntaxerror");
            expect(paramType(new ReferenceError(""))).toBe("referenceerror");
            expect(paramType(new RangeError(""))).toBe("rangeerror");
        });
    });

    describe("es6 features", () => {
        it("should work for resolved promises", () => {
            const promise = Promise.resolve(123);

            expect(paramType(promise)).toBe("promise");
        });

        it("should work for rejected promises", () => {
            const promise = Promise.reject(new Error("foo bar"));

            promise.catch(() => {});

            expect(paramType(promise)).toBe("promise");
        });

        it("should work for generator functions", () => {
            const gen = function *named() {
                return true;
            };

            expect(paramType(gen)).toBe("generatorfunction");
        });

        it("should work for generator objects", () => {
            const gen = function *named() {
                return true;
            };

            expect(paramType(gen())).toBe("generator");
        });

        it("should work for template strings", () => {
            const name = "Foo";

            expect(paramType(`Welcome ${name} buddy`)).toBe("string");
        });

        it("should work for Map", () => {
            const map = new Map();

            expect(paramType(map)).toBe("map");
            expect(paramType(map.set)).toBe("function");
            expect(paramType(map.get)).toBe("function");
        });

        it("should work for WeakMap", () => {
            const weakmap = new WeakMap();

            expect(paramType(weakmap)).toBe("weakmap");
            expect(paramType(weakmap.set)).toBe("function");
            expect(paramType(weakmap.get)).toBe("function");
        });

        it("should work for Set", () => {
            const set = new Set();

            expect(paramType(set)).toBe("set");
            expect(paramType(set.add)).toBe("function");
        });

        it("should work for WeakSet", () => {
            const weakset = new WeakSet();

            expect(paramType(weakset)).toBe("weakset");
            expect(paramType(weakset.add)).toBe("function");
        });

        it("should work for Set Iterator", () => {
            const SetValuesIterator = new Set().values();

            expect(paramType(SetValuesIterator)).toBe("setiterator");
        });

        it("should work for Map Iterator", () => {
            const MapValuesIterator = new Map().values();

            expect(paramType(MapValuesIterator)).toBe("mapiterator");
        });

        it("should work for Array Iterator", () => {
            const ArrayEntriesIterator = [].entries();

            expect(paramType(ArrayEntriesIterator)).toBe("arrayiterator");
        });

        it("should work for String Iterator", () => {
            const StringCharIterator = ""[Symbol.iterator]();

            expect(paramType(StringCharIterator)).toBe("stringiterator");
        });

        it("should work for Symbol", () => {
            expect(paramType(Symbol("foo"))).toBe("symbol");
            expect(paramType(Symbol.prototype)).toBe("symbol");
        });

        it("should work for Int8Array", () => {
            const int8array = new Int8Array(1);

            expect(paramType(int8array)).toBe("int8array");
        });

        it("should work for Uint8Array", () => {
            const uint8array = new Uint8Array(1);

            expect(paramType(uint8array)).toBe("uint8array");
        });

        it("should work for Uint8ClampedArray", () => {
            const uint8clampedarray = new Uint8ClampedArray(1);

            expect(paramType(uint8clampedarray)).toBe("uint8clampedarray");
        });

        it("should work for Int16Array", () => {
            const int16array = new Int16Array(1);

            expect(paramType(int16array)).toBe("int16array");
        });

        it("should work for Uint16Array", () => {
            const uint16array = new Uint16Array(1);

            expect(paramType(uint16array)).toBe("uint16array");
        });

        it("should work for Int32Array", () => {
            const int32array = new Int32Array(1);

            expect(paramType(int32array)).toBe("int32array");
        });

        it("should work for Uint32Array", () => {
            const uint32array = new Uint32Array(1);

            expect(paramType(uint32array)).toBe("uint32array");
        });

        it("should work for Float32Array", () => {
            const float32array = new Float32Array(1);

            expect(paramType(float32array)).toBe("float32array");
        });

        it("should work for Float64Array", () => {
            const float64array = new Float64Array(1);

            expect(paramType(float64array)).toBe("float64array");
        });
    });
});
