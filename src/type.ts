import { ceil, floor, round, trunc, random, getPoint } from "./utils"

type Wrapper<T> = T extends (...args: infer U) => number ? (...args: U) => Point : () => Point
type SideEffectWrapper<T> = T extends (n: number, ...args: infer U) => number ? (...args: U) => Point : () => Point

type ArithMethod = (...args: (
	| number
	| { x?: number, y?: number }
	| [x?: number, y?: number]
)[]) => Point

type Operation = (n: number) => Point

export interface Point {
	x: number
	y: number

	/**
	 * Sets `this` to a given point.
	 *
	 * @param {...*} addends addends in the addition.
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 * 
	 * P(10).set(2,5)
	 * // => P { x: 2, y: 5 }
	 */
	set(...args: Parameters<typeof getPoint>): this

	/**
	 * Adds addends to `this`, mutating `this` to the sum.
	 *
	 * @param {...*} addends addends in the addition.
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 * 
	 * P(10).add(2,5)
	 * // => P { x: 12, y: 15 }
	 */
	add: ArithMethod

	/**
	 * Subtracts subtrahends from `this`, mutating `this` to the difference.
	 *
	 * @param {...*} subtrahends subtrahends in the subtraction.
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 * 
	 * P(10).sub([2,5])
	 * // => P { x: 8, y: 5 }
	 */
	sub: ArithMethod
		
	/**
	 * Multiplies `this` by multiplicands, mutating `this` to the product.
	 *
	 * @param {...*} multiplicands multiplicands in the multiplication.
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 * 
	 * P(10).mult([2,5])
	 * // => P { x: 20, y: 50 }
	 */
	mult: ArithMethod

	/**
	 * Divides `this` by divisors, mutating `this` to the quotient.
	 *
	 * @param {...*} divisors divisors in the division.
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 * 
	 * P(10).div([2,5])
	 * // => P { x: 5, y: 2 }
	 */
	div: ArithMethod

	/**
	 * Divides `this` by divisors, mutating `this` to the modulus.
	 *
	 * @param {...*} divisors divisors in the division.
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 * 
	 * P(10).mod([2,4])
	 * // => P { x: 0, y: 2 }
	 */
	mod: ArithMethod

	/**
	 * Exponentiates `this` by exponents, mutating `this` to the product.
	 *
	 * @param {...*} exponents exponents in the exponentiation.
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 * 
	 * P(10).pow([2,4])
	 * // => P { x: 100, y: 10000 }
	 */
	pow: ArithMethod

	/**
	 * Mutates `this` by rounding up to precision.
	 *
	 * @param {number=} [precision=0] The precision to round up to.
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 * 
	 * P(-5.2, 2.9).ceil()
	 * // => P { x: -5, y: 3 }
	 */
	ceil: SideEffectWrapper<typeof ceil>

	/**
	 * Mutates `this` by rounding down to precision.
	 *
	 * @param {number=} [precision=0] The precision to round down to.
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 * 
	 * P(-5.2, 2.9).floor()
	 * // => P { x: -6, y: 2 }
	 */
	floor: SideEffectWrapper<typeof floor>
 
	/**
	 * Mutates `this` by rounding to precision.
	 *
	 * @param {number=} [precision=0] The precision to round to.
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 * 
	 * P(-5.2, 2.9).round()
	 * // => P { x: 5, y: 3 }
	 */
	round: SideEffectWrapper<typeof round>
 
	/**
	 * Mutates `this` by rounding towards 0 to precision.
	 *
	 * @param {number=} [precision=0] The precision to round towards 0.
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 * 
	 * P(-5.2, 2.9).trunc()
	 * // => P { x: -5, y: 2 }
	 */
	trunc: SideEffectWrapper<typeof trunc>
	
	/**
	 * Mutates `this` by its square.
	 *
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 * 
	 * P(4, 9).sq()
	 * // => P { x: 16, y: 81 }
	 */
	sq: SideEffectWrapper<Operation>
 
	/**
	 * Mutates `this` by its square root.
	 *
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 * 
	 * P(4, 9).sqrt()
	 * // => P { x: 2, y: 3 }
	 */
	sqrt: SideEffectWrapper<Operation>
 
	/**
	 * Mutates `this` by its cube.
	 *
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 * 
	 * P(4, 9).cb()
	 * // => P { x: 64, y: 729 }
	 */
	cb: SideEffectWrapper<Operation>
 
	/**
	 * Mutates `this` by its cube root.
	 *
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 * 
	 * P(8, 125).cbrt()
	 * // => P { x: 2, y: 5 }
	 */
	cbrt: SideEffectWrapper<Operation>
 
	/**
	 * Mutates `this` to its absolute.
	 *
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 * 
	 * P(-8, 8).abs()
	 * // => P { x: 8, y: 8 }
	 */
	abs: SideEffectWrapper<Operation>
 
	/**
	 * Mutates `this` to its inverse.
	 *
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 * 
	 * P(-1/2, 2).inv()
	 * // => P { x: -2, y: 1/2 }
	 */
	inv: SideEffectWrapper<Operation>
 
	/**
	 * Mutates `this` by clamping it within the inclusive `lower` and `upper` bounds.
	 *
	 * @param {number=} [lower=0] The lower bound.
	 * @param {number} upper The upper bound.
	 * @return {this} `this`.
	 * @example
	 *
	 * P(10, -10).clamp(-5, 5)
	 * // => P { x: 5, y: -5 }
	 */
	clamp(...args:
		| [upper: number]
		| [lower: number, upper: number]
	): this

	/**
	 * Mutates `this` to the point between `this` and `point`.
	 * The fraction of the distance is determined by the multiplicand `distance`.
	 * `distance` is expected to be a number between 0-1. 
	 * where 0 becomes the value of `this` and 1 the value of `point` 
	 *
	 * @param point The point.
	 * @param {number=} [distance=0.5] The multiplicand of distance.
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 *
	 * P(10, -10).between(-20, 20)
	 * // => P { x: -5, y: 5 }
	 */
	between(...args:
		| [point: Point, distance?: number]
		| [point: number, distance?: number]
		| [point: {x?: number, y?: number}, distance?: number]
		| [point: [x?: number, y?: number], distance?: number]
	): this

	/**
	 * Gets the sum of `this`.
	 *
	 * @return {number} sum of x and y.
	 * @example
	 *
	 * P(10, -7.5).getSum()
	 * // => 2.5
	 */
	getSum(): number

	/**
	 * Get the square distance between `this` and `point`.
	 *
	 * @param point The point.
	 * @return {number} The square distance.
	 * @example
	 *
	 * P(10, -10).getDistSq(-20, 20)
	 * // => 1800
	 */
	getDistSq(point:
		| Point
		| number
		| { x?: number, y?: number }
		| [x?: number, y?: number]
	): number

	/**
	 * Get the distance between `this` and `point`.
	 *
	 * @param point The point.
	 * @return {number} The distance.
	 * @example
	 *
	 * P(10, -10).getDistSq(-20, 20)
	 * // => 42.42 ...
	 */
	getDist(point:
		| Point
		| number
		| { x?: number, y?: number }
		| [x?: number, y?: number]
	): number

	/**
	 * Clones `this` to a new instance of `P`
	 *
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 *
	 * const p = P(10, -10)
	 * const clone = p.clone()
	 * 
	 * Object.is(p, clone) // => false
	 * p.is(clone) // => true
	 */
	clone(): this

	/**
	 * Copies the properties of `point` to `this`. 
	 * Essentially an alias for `this.set` .
	 * @see this.set
	 *
	 * @param point An instance of Point.
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 *
	 * const p = P(10, -10)
	 * const otherP = P(0, 0)
	 * 
	 * p.copy(otherP)
	 * 
	 * Object.is(p, otherP) // => false
	 * p.is(otherP) // => true
	 */
	copy(point: Point): this
 
	/**
	 * Mutates `this` to a random number.
	 *
	 * @param max The upper limit.
	 * @param {number=} [min=0] The lower limit.
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 * 
	 * P(20).random(100)
	 * // => P { x: 5, y: 72 }
	 */
	random: Wrapper<typeof random>

	/**
	 * Mutates `this` to the respective min x and min y of `this` and `points`.
	 *
	 * @param {...*} points The points.
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 * 
	 * P(0, 50).min([3,10],[20,40])
	 * // => P { x: 0, y: 10 }
	 */
	min: ArithMethod

	/**
	 * Mutates `this` to the respective max x and max y of `this` and `points`.
	 *
	 * @param {...*} points The points.
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 * 
	 * P(0, 50).max([3,10],[20,40])
	 * // => P { x: 20, y: 50 }
	 */
	max: ArithMethod

	/**
	 * Mutates `this` by executing a method on its properties.
	 *
	 * @param resolver Function that receives x and y.
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 *
	 * P(NaN, 10).operation(n => Number.isNaN(n) ? 0 : n)
	 * // => P { x: 0, y: 10 }
	 */
	operation(resolver: (n: number) => number): this

	/**
	 * Transforms `this` to the return type of the `resolver`.
	 *
	 * @param resolver Function that receives `this`.
	 * @return {T} The result of the `resolver`.
	 * @example
	 *
	 * P(20, 10).transform(p => ({ width: p.x, height: p.y }))
	 * // => P { width: 20, height: 10 }
	 */
	transform<T>(resolver: (p: this) => T): T

	/**
	 * Executes a test on `this`.
	 *
	 * @param resolver Function that receives `this`.
	 * @return The result of the `resolver`.
	 * @example
	 *
	 * P(NaN, 10).operation(p => Number.isNaN(p.x) || Number.isNaN(p.y))
	 * // => true
	 */
	check(resolver: (p: this) => boolean): boolean

	/**
	 * Compares the properties of `this` with `point` within the `threshold`.
	 *
	 * @param point The point.
	 * @param {number=} [threshold=0] The threshold that's considered equal.
	 * @return The result of the equality check.
	 * @example
	 *
	 * P(10, 10).is([11,11]) // => false
	 * 
	 * P(10, 10).is([13,7], 5) // => true
	 */
	is(...args:
		| [point: Point, threshold?: number]
		| [point: number, threshold?: number]
		| [point: { x?: number, y?: number }, threshold?: number]
		| [point: [x?: number, y?: number], threshold?: number]
	): boolean

	/**
	 * Transforms `this` into an object.
	 *
	 * @return The properties of `this` as an object.
	 * @example
	 *
	 * P(20, 10).toObject()
	 * // => { x: 20, y: 10 }
	 */
	toObject(): {x: number, y: number}

	/**
	 * Transforms `this` into an object.
	 *
	 * @return The properties of `this` as an object.
	 * @example
	 *
	 * P(20, 10).toObject()
	 * // => { x: 20, y: 10 }
	 */
	eject: this['toObject']

	/**
	 * Transforms `this` into an array.
	 *
	 * @return The properties of `this` as an array.
	 * @example
	 *
	 * P(20, 10).toArray()
	 * // => [ 20, 10 ]
	 */
	toArray(): [x: number, y: number]

	/**
	 * Transforms `this` into a string.
	 *
	 * @return A string.
	 * @example
	 *
	 * P(20, 10).toString()
	 * // => '{x: 20, y: 10}'
	 */
	toString(): `{x: ${number}, y: ${number}}`

	/**
	 * Executes console.log on `this`.
	 *
	 * @return {this} `this`.
	 * @chainable
	 * @example
	 *
	 * P(20, 10).clg()
	 * 
	 * ___In the console___
	 * // P {x: 20, y: 10}
	 */
	clg(): this
}

export interface PointConstructor {
	new(...args: Parameters<typeof getPoint>): Point;
	(...args: Parameters<typeof getPoint>): Point;
	prototype: Point;
		
	/**
	 * Adds addends, instantiating `P` with the sum.
	 *
	 * @param {...*} addends addends in the addition.
	 * @return {P} `P`
	 * @chainable
	 * @example
	 * 
	 * P.add(10,[2,5])
	 * // => P { x: 12, y: 15 }
	 */
	add: ArithMethod

	/**
	 * Subtracts subtrahends, instantiating `P` with the difference.
	 *
	 * @param {...*} subtrahends subtrahends in the subtraction.
	 * @return {P} `P`
	 * @chainable
	 * @example
	 * 
	 * P.sub(10,[2,5])
	 * // => P { x: 8, y: 5 }
	 */
	sub: ArithMethod

	/**
	 * Multiplies multiplicands, instantiating `P` with the product.
	 *
	 * @param {...*} multiplicands multiplicands in the multiplication.
	 * @return {P} `P`
	 * @chainable
	 * @example
	 * 
	 * P.mult(10,[2,5])
	 * // => P { x: 20, y: 50 }
	 */
	mult: ArithMethod

	/**
	 * Divides divisors, instantiating `P` with the product.
	 *
	 * @param {...*} divisors divisors in the division.
	 * @return {P} `P`
	 * @chainable
	 * @example
	 * 
	 * P.div(10,[2,5])
	 * // => P { x: 5, y: 2 }
	 */
	div: ArithMethod

	/**
	 * Divides divisors, instantiating `P` with the modulus.
	 *
	 * @param {...*} divisors divisors in the division.
	 * @return {P} `P`
	 * @chainable
	 * @example
	 * 
	 * P.mod(10,[2,4])
	 * // => P { x: 0, y: 2 }
	 */
	mod: ArithMethod

	/**
	 * Exponentiates exponents, instantiating `P` with the product.
	 *
	 * @param {...*} exponents exponents in the exponentiation.
	 * @return {P} `P`
	 * @chainable
	 * @example
	 * 
	 * P.pow(10,[2,4])
	 * // => P { x: 100, y: 10000 }
	 */
	pow: ArithMethod

	/**
	 * Generates a random number, instantiating `P` with the result.
	 *
	 * @param max The upper limit.
	 * @param {number=} [min=0] The lower limit.
	 * @return {P} `P`.
	 * @chainable
	 * @example
	 * 
	 * P(20).random(100)
	 * // => P { x: 5, y: 72 }
	 */
	random: Wrapper<typeof random>

	/**
	 * Resolves the min x and min y of `points`, instantiating `P` with the result.
	 *
	 * @param {...*} points The points.
	 * @return {P} `P`.
	 * @chainable
	 * @example
	 * 
	 * P.min({y:0,x:50},[3,10],[20,40])
	 * // => P { x: 0, y: 10 }
	 */
	min: ArithMethod

	/**
	 * Resolves the max x and max y of `points`, instantiating `P` with the result.
	 *
	 * @param {...*} points The points.
	 * @return {P} `P`.
	 * @chainable
	 * @example
	 * 
	 * P.max({y:0,x:50},[3,10],[20,40])
	 * // => P { x: 20, y: 50 }
	 */
	max: ArithMethod
}
