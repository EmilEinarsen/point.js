
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
  - [`p.ceil(precision?: number): thisl`](#pceilprecision-generalpoint-this)
  - [`p.floor(precision?: number): this`](#pfloorprecision-generalpoint-this)
  - [`p.round(precision?: number): this`](#proundprecision-generalpoint-this)
  - [`p.trunc(precision?: number): this`](#ptruncprecision-generalpoint-this)
  - [`p.sq(): this`](#psq-this)
  - [`p.sqrt(): this`](#psqrt-this)
  - [`p.cb(): this`](#pcb-this)
  - [`p.cbrt(): this`](#pcbrt-this)
  - [`p.abs(): this`](#pabs-this)
  - [`p.inv(): this`](#pinv-this)
  - [`p.clamp([upper: number] | [lower: number, upper: number]): this`](#pclampupper-number--lower-number-upper-number-this)
  - [`p.between(point: GeneralPoint, distance?: number): this`](#pbetween-point-generalpoint-distance-number-this)
  - [`p.getSum(): this`](#pgetsum-this)
  - [`p.getDistSq(point: GeneralPoint): this`](#pgetdistsqpoint-generalpoint-this)
  - [`p.getDist(point: GeneralPoint): this`](#pgetdistpoint-generalpoint-this)
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

#### `P.sub(...points: GeneralPoint[]): Point`

#### `P.mult(...points: GeneralPoint[]): Point`

#### `P.div(...points: GeneralPoint[]): Point`

#### `P.mod(...points: GeneralPoint[]): Point`

#### `P.pow(...points: GeneralPoint[]): Point`

#### `P.random(...args: [max: number] | [min: number, max: number]): Point`

#### `P.min(...points: GeneralPoint[]): Point`

#### `P.max(...points: GeneralPoint[]): Point`


### Instance methods

#### `p.set(...point: [GeneralPoint] | [x: number, y: number] | undefined[]): this`

#### `p.add(...points: GeneralPoint[]): this`

#### `p.sub(...points: GeneralPoint[]): this`

#### `p.mult(...points: GeneralPoint[]): this`

#### `p.div(...points: GeneralPoint[]): this`

#### `p.mod(...points: GeneralPoint[]): this`

#### `p.pow(...points: GeneralPoint[]): this`

#### `p.ceil(precision?: number): this`

#### `p.floor(precision?: number): this`

#### `p.round(precision?: number): this`

#### `p.trunc(precision?: number): this`

#### `p.sq(): this`

#### `p.sqrt(): this`

#### `p.cb(): this`

#### `p.cbrt(): this`

#### `p.clamp([upper: number] | [lower: number, upper: number]): this`

#### `p.between(point: GeneralPoint, distance?: number): this`

#### `p.getSum(): number`

#### `p.getDistSq(point: GeneralPoint): number`

#### `p.getDist(point: GeneralPoint): number`

#### `p.clone(): this`

#### `p.copy(point: Point): this`

#### `p.random(...args: [max: number] | [min: number, max: number]): this`

#### `p.min(...points: GeneralPoint[]): this`

#### `p.max(...points: GeneralPoint[]): this`

#### `p.operation(resolver: (n: number) => number): this`

#### `p.transform<T>(resolver: (p: this) => T): T`

#### `p.check(resolver: (p: this) => boolean): boolean`

#### `p.is(point: GeneralPoint, threshold?: number): boolean`

#### `p.toObject(): {x: number, y: number}`

#### `p.eject(): {x: number, y: number}`

#### `p.toArray(): [x: number, y: number]`

#### ```p.toString(): `{x: ${number}, y: ${number}}` ```

#### `p.clg(): this`
