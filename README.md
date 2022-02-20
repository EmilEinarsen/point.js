
# Point.js

Point.js is a JavaScript library for point calculations. Point.js has a general definition of "point" and most methods takes multiple parameters, allowing for complex, interdependent chaining and transformations.

## Install

```sh
npm i point.js
```

## Usage

Point.js is exported as a named export, under `P`. It can be instantiated with or without using the `new` operator.

```js
import { P } from 'point.js';

const point = P()
// const point = new P()

// Do some math with multiple parameters and different point signatures
point.add([ 20, 33 ], { x: 2, y: 5 }, 5)
// => P { x: 27, y: 43 }

// Can be chained
point.mult(1.5).floor()
// => P { x: 40, y: 64 }

// End with transformnation
point.toArray()
// => [ 40, 64 ]
```

## API
- [Static methods](#static-methods)
  - [`P.add(...points: GeneralPoint[]): Point`](#paddpoints-generalpoint-point)
  - [`P.sub(...points: GeneralPoint[]): Point`](#psubpoints-generalpoint-point)
  - [`P.mult(...points: GeneralPoint[]): Point`](#pmultpoints-generalpoint-point)
  - [`P.div(...points: GeneralPoint[]): Point`](#pdivpoints-generalpoint-point)
  - [`P.mod(...points: GeneralPoint[]): Point`](#pmodpoints-generalpoint-point)
  - [`P.pow(...points: GeneralPoint[]): Point`](#ppowpoints-generalpoint-point)
  - [`P.random(...args: [max: number] | [min: number, max: number]): Point`](#prandomargs-max-number--min-number-max-number-point)
  - [`P.min(...points: GeneralPoint[]): Point`](#pminpoints-generalpoint-point)
  - [`P.max(...points: GeneralPoint[]): Point`](#pmaxpoints-generalpoint-point)
- [Instance methods](#instance-methods)'
  - [`p.set(...point: [GeneralPoint] | [x: number, y: number] | undefined[]): this`](#psetpoint-generalpoint--x-number-y-number--undefined-this)
  - [`p.add(...points: GeneralPoint[]): this`](#paddpoints-generalpoint-this)
  - [`p.sub(...points: GeneralPoint[]): this`](#psubpoints-generalpoint-this)
  - [`p.mult(...points: GeneralPoint[]): this`](#pmultpoints-generalpoint-this)
  - [`p.div(...points: GeneralPoint[]): this`](#pdivpoints-generalpoint-this)
  - [`p.mod(...points: GeneralPoint[]): this`](#pmodpoints-generalpoint-this)
  - [`p.pow(...points: GeneralPoint[]): this`](#ppowpoints-generalpoint-this)
  - [`p.ceil(precision?: number): thisl`](#pceilprecision-number-this)
  - [`p.floor(precision?: number): this`](#pfloorprecision-number-this)
  - [`p.round(precision?: number): this`](#proundprecision-number-this)
  - [`p.trunc(precision?: number): this`](#ptruncprecision-number-this)
  - [`p.sq(): this`](#psq-this)
  - [`p.sqrt(): this`](#psqrt-this)
  - [`p.cb(): this`](#pcb-this)
  - [`p.cbrt(): this`](#pcbrt-this)
  - [`p.abs(): this`](#pabs-this)
  - [`p.inv(): this`](#pinv-this)
  - [`p.clamp([upper: number] | [lower: number, upper: number]): this`](#pclampupper-number--lower-number-upper-number-this)
  - [`p.between(point: GeneralPoint, distance?: number): this`](#pbetweenpoint-generalpoint-distance-number-this)
  - [`p.getSum(): this`](#pgetsum-number)
  - [`p.getDistSq(point: GeneralPoint): this`](#pgetdistsqpoint-generalpoint-number)
  - [`p.getDist(point: GeneralPoint): this`](#pgetdistpoint-generalpoint-number)
  - [`p.clone(): this`](#pclone-this)
  - [`p.copy(point: Point): this`](#pclone-this)
  - [`p.random(...args: [max: number] | [min: number, max: number]): this`](#prandomargs-max-number--min-number-max-number-this)
  - [`p.min(...points: GeneralPoint[]): this`](#pminpoints-generalpoint-this)
  - [`p.max(...points: GeneralPoint[]): this`](#pmaxpoints-generalpoint-this)
  - [`p.operation(resolver: (n: number) => number): this`](#poperationresolver-n-number--number-this)
  - [`p.transform<T>(resolver: (p: this) => T): T`](#ptransformtresolver-p-this--t-t)
  - [`p.check(resolver: (p: this) => boolean): boolean`](#pcheckresolver-p-this--boolean-boolean)
  - [`p.is(point: GeneralPoint, threshold?: number): boolean`](#pispoint-generalpoint-threshold-number-boolean)
  - [`p.toObject(): {x: number, y: number}`](#ptoobject-x-number-y-number)
  - [`p.eject(): {x: number, y: number}`](#ptoobject-x-number-y-number)
  - [`p.toArray(): [x: number, y: number]`](#ptoarray-x-number-y-number)
  - [```p.toString(): `{x: ${number}, y: ${number}}` ```](#ptostring-x-number-y-number-)
  - [`p.clg(): this`](#pclg-this)


### Static methods

#### `P.add(...points: GeneralPoint[]): Point`

Adds addends, instantiating `P` with the sum.

#### `P.sub(...points: GeneralPoint[]): Point`

Subtracts subtrahends, instantiating `P` with the difference.

#### `P.mult(...points: GeneralPoint[]): Point`

Multiplies multiplicands, instantiating `P` with the product.

#### `P.div(...points: GeneralPoint[]): Point`

Divides divisors, instantiating `P` with the product.

#### `P.mod(...points: GeneralPoint[]): Point`

Divides divisors, instantiating `P` with the modulus.

#### `P.pow(...points: GeneralPoint[]): Point`

Exponentiates exponents, instantiating `P` with the product.

#### `P.random(...args: [max: number] | [min: number, max: number]): Point`

Generates a random number, instantiating `P` with the result.

#### `P.min(...points: GeneralPoint[]): Point`

Resolves the min x and min y of `points`, instantiating `P` with the result.

#### `P.max(...points: GeneralPoint[]): Point`

Resolves the max x and max y of `points`, instantiating `P` with the result.


### Instance methods

#### `p.set(...point: [GeneralPoint] | [x: number, y: number] | undefined[]): this`

Sets `this` to a given point.

#### `p.add(...points: GeneralPoint[]): this`

Adds addends to `this`, mutating `this` to the sum.

#### `p.sub(...points: GeneralPoint[]): this`

Subtracts subtrahends from `this`, mutating `this` to the difference.

#### `p.mult(...points: GeneralPoint[]): this`

Multiplies `this` by multiplicands, mutating `this` to the product.

#### `p.div(...points: GeneralPoint[]): this`

Divides `this` by divisors, mutating `this` to the quotient.

#### `p.mod(...points: GeneralPoint[]): this`

Divides `this` by divisors, mutating `this` to the modulus.

#### `p.pow(...points: GeneralPoint[]): this`

Exponentiates `this` by exponents, mutating `this` to the product.

#### `p.ceil(precision?: number): this`

Mutates `this` by rounding up to precision.

#### `p.floor(precision?: number): this`

Mutates `this` by rounding down to precision.

#### `p.round(precision?: number): this`

Mutates `this` by rounding to precision.

#### `p.trunc(precision?: number): this`

Mutates `this` by rounding towards 0 to precision.

#### `p.sq(): this`

Mutates `this` by its square.

#### `p.sqrt(): this`

Mutates `this` by its square root.

#### `p.cb(): this`

Mutates `this` by its cube.

#### `p.cbrt(): this`

Mutates `this` by its cube root.

#### `p.abs(): this`

Mutates `this` to its absolute.

#### `p.inv(): this`

Mutates `this` to its inverse.

#### `p.clamp([upper: number] | [lower: number, upper: number]): this`

Mutates `this` by clamping it within the inclusive `lower` and `upper` bounds.

```js
P(10, -10).clamp(-5, 5)
// => P { x: 5, y: -5 }
```

#### `p.between(point: GeneralPoint, distance?: number): this`

Mutates `this` to the point between `this` and `point`.
The fraction of the distance is determined by the multiplicand `distance`.
`distance` is expected to be a number between 0-1. 
where 0 becomes the value of`this` and 1 the value of `point` 

```js
P(10, -10).between(-20, 20)
// => P { x: -5, y: 5 }
```

#### `p.getSum(): number`

Gets the sum of `this`.

#### `p.getDistSq(point: GeneralPoint): number`

Get the square distance between `this` and `point`.

#### `p.getDist(point: GeneralPoint): number`

Get the distance between `this` and `point`.

#### `p.clone(): this`

Clones `this` to a new instance of `P`.

```js
const p = P(10, -10)
const clone = p.clone()

Object.is(p, clone) // => false 
p.is(clone) // => true 
```

#### `p.copy(point: Point): this`

Copies the properties of `point` to `this`.
Essentially an alias for `this.set` .

```js
const p = P(10, -10)
const otherP = P(0, 0)

p.copy(otherP)

Object.is(p, clone) // => false 
p.is(clone) // => true 
```

#### `p.random(...args: [max: number] | [min: number, max: number]): this`

Mutates `this` to a random number.

#### `p.min(...points: GeneralPoint[]): this`

Mutates `this` to the respective min x and min y of `this` and `points`.

#### `p.max(...points: GeneralPoint[]): this`

Mutates `this` to the respective max x and max y of `this` and `points`.

#### `p.operation(resolver: (n: number) => number): this`

Mutates `this` by executing a method on its properties.

```js
P(NaN, 10).operation(n => Number.isNaN(n) ? 0 : n)
// => P { x: 0, y: 10 }
```

#### `p.transform<T>(resolver: (p: this) => T): T`

Transforms `this` to the return type of the `resolver`.

```js
P(20, 10).transform(p => ({ width: p.x, height: p.y }))
// => P { width: 20, height: 10 }
```

#### `p.check(resolver: (p: this) => boolean): boolean`

Executes a test on `this`.

```js
P(NaN, 10).operation(p => Number.isNaN(p.x) || Number.isNaN(p.y))
// => true
```

#### `p.is(point: GeneralPoint, threshold?: number): boolean`

Compares the properties of `this` with `point` within the `threshold`.

```js
P(10, 10).is([11,11]) // => false

P(10, 10).is([13,7], 5) // => true
```

#### `p.toObject(): {x: number, y: number}`

Transforms `this` into an object.

#### `p.eject(): {x: number, y: number}`

Alias for [`p.toObject`](#ptoobject-x-number-y-number).

#### `p.toArray(): [x: number, y: number]`

Transforms `this` into an array.

#### ```p.toString(): `{x: ${number}, y: ${number}}` ```

Transforms `this` into a string.

#### `p.clg(): this`

Executes console.log on `this`.

```js
P(20, 10).clg()

/*
___In the console___
P {x: 20, y: 10}
*/
```
