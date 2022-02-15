import { createRound, random } from "./utils"

type Point = { x: number, y: number }
type Bound = [x: number, y: number]

type Wrapper<T> = T extends (...args: infer U) => number ? (...args: U) => PPrototype : () => PPrototype
type SideEffectWrapper<T> = T extends (n: number, ...args: infer U) => number ? (...args: U) => PPrototype : () => PPrototype

type ArithMethod = (...args: (
	| number
	| Partial<Point>
	| Partial<Bound>
)[]) => PPrototype

type Operation = (n: number) => PPrototype

interface PPrototype {
	x: number
	y: number

	set(p: Partial<Point>): this

	/**
	 * @function add Adds addends to `this`, mutating `this` to the sum.
	 *
	 * @param {...*} addends addends in the addition.
	 * @return {this} `this`
	 * @chainable
	 * @example
	 * 
	 * new P(10).add(2,5)
	 * // => P { x: 12, y: 15 }
	 */
	add: ArithMethod

	/**
	 * Subtracts subtrahends from `this`, mutating `this` to the difference.
	 *
	 * @param {...*} subtrahends subtrahends in the subtraction.
	 * @return {this} `this`
	 * @chainable
	 * @example
	 * 
	 * new P(10).sub([2,5])
	 * // => P { x: 8, y: 5 }
	 */
	sub: ArithMethod
	
	/**
	 * Multiplies `this` by multiplicands, mutating `this` to the product.
	 *
	 * @param {...*} multiplicands multiplicands in the multiplication.
	 * @return {this} `this`
	 * @chainable
	 * @example
	 * 
	 * new P(10).mult([2,5])
	 * // => P { x: 20, y: 50 }
	 */
 	mult: ArithMethod

	/**
	 * Divides `this` by divisors, mutating `this` to the quotient.
	 *
	 * @param {...*} divisors divisors in the division.
	 * @return {this} `this`
	 * @chainable
	 * @example
	 * 
	 * new P(10).div([2,5])
	 * // => P { x: 5, y: 2 }
	 */
	div: ArithMethod

	/**
	 * Divides `this` by divisors, mutating `this` to the modulus.
	 *
	 * @param {...*} divisors divisors in the division.
	 * @return {this} `this`
	 * @chainable
	 * @example
	 * 
	 * new P(10).mod([2,4])
	 * // => P { x: 0, y: 2 }
	 */
	mod: ArithMethod

	/**
	 * Exponentiates `this` by exponents, mutating `this` to the product.
	 *
	 * @param {...*} exponents exponents in the exponentiation.
	 * @return {this} `this`
	 * @chainable
	 * @example
	 * 
	 * new P(10).pow([2,4])
	 * // => P { x: 100, y: 10000 }
	 */
	pow: ArithMethod

	/*
	is
	has
	isZero
	hasZero
	isClose
	check
	clone
	copy
	zero
	one
	getSum
	getDist
	min
	max */

	/**
	 * Mutates `this` by rounding up to precision.
	 *
	 * @param {number=} [precision=0] The precision to round up to.
	 * @return {this} `this`
	 * @chainable
	 * @example
	 * 
	 * new P(-5.2, 2.9).ceil()
	 * // => P { x: -5, y: 3 }
	 */
	 ceil: SideEffectWrapper<ReturnType<typeof createRound>>

	/**
	 * Mutates `this` by rounding down to precision.
	 *
	 * @param {number=} [precision=0] The precision to round down to.
	 * @return {this} `this`
	 * @chainable
	 * @example
	 * 
	 * new P(-5.2, 2.9).floor()
	 * // => P { x: -6, y: 2 }
	 */
	floor: SideEffectWrapper<ReturnType<typeof createRound>>
 
	/**
	 * Mutates `this` by rounding to precision.
	 *
	 * @param {number=} [precision=0] The precision to round to.
	 * @return {this} `this`
	 * @chainable
	 * @example
	 * 
	 * new P(-5.2, 2.9).round()
	 * // => P { x: 5, y: 3 }
	 */
	round: SideEffectWrapper<ReturnType<typeof createRound>>
 
	/**
	 * Mutates `this` by rounding towards 0 to precision.
	 *
	 * @param {number=} [precision=0] The precision to round towards 0.
	 * @return {this} `this`
	 * @chainable
	 * @example
	 * 
	 * new P(-5.2, 2.9).trunc()
	 * // => P { x: -5, y: 2 }
	 */
	trunc: SideEffectWrapper<ReturnType<typeof createRound>>
	 
	/**
	 * Mutates `this` by its square.
	 *
	 * @return {this} `this`
	 * @chainable
	 * @example
	 * 
	 * new P(4, 9).sq()
	 * // => P { x: 16, y: 81 }
	 */
	sq: SideEffectWrapper<Operation>
 
	/**
	 * Mutates `this` by its square root.
	 *
	 * @return {this} `this`
	 * @chainable
	 * @example
	 * 
	 * new P(4, 9).sqrt()
	 * // => P { x: 2, y: 3 }
	 */
	sqrt: SideEffectWrapper<Operation>
 
	/**
	 * Mutates `this` by its cube.
	 *
	 * @return {this} `this`
	 * @chainable
	 * @example
	 * 
	 * new P(4, 9).cb()
	 * // => P { x: 64, y: 729 }
	 */
	cb: SideEffectWrapper<Operation>
 
	/**
	 * Mutates `this` by its cube root.
	 *
	 * @return {this} `this`
	 * @chainable
	 * @example
	 * 
	 * new P(8, 125).cbrt()
	 * // => P { x: 2, y: 5 }
	 */
	cbrt: SideEffectWrapper<Operation>
 
	/**
	 * Mutates `this` to its absolute.
	 *
	 * @return {this} `this`
	 * @chainable
	 * @example
	 * 
	 * new P(-8, 8).abs()
	 * // => P { x: 8, y: 8 }
	 */
	abs: SideEffectWrapper<Operation>
 
	/**
	 * Mutates `this` to its inverse.
	 *
	 * @return {this} `this`
	 * @chainable
	 * @example
	 * 
	 * new P(-1/2, 2).inv()
	 * // => P { x: -2, y: 1/2 }
	 */
	inv: SideEffectWrapper<Operation>
 
	/**
	 * Mutates `this` by clamping it within the inclusive `lower` and `upper` bounds.
	 *
	 * @param {number=} [lower=0] The lower bound.
	 * @param {number} upper The upper bound.
	 * @return {this} `this`
	 * @example
	 *
	 * new P(10, -10).clamp(-5, 5)
	 * // => P { x: 5, y: -5 }
	 */
	clamp(...args:
		| [upper: number]
		| [lower: number, upper: number]
	): Prototype
 
	random: Wrapper<typeof random>

	transform: <T>(resolver: (p: PPrototype) => T) => T

	toObject(): Point

	toArray(): Bound

	toString(): `{x: ${number}, y: ${number}}`

	clg(): PPrototype
}

export interface PConstructor {
	new (...args: Parameters<typeof getPoint>): PPrototype;
	(...args: Parameters<typeof getPoint>): PPrototype;
	prototype: PPrototype;
	
	/**
	 * Adds addends, instantiating `P` by the sum.
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
	 * Subtracts subtrahends, instantiating `P` by the difference.
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
	 * Multiplies multiplicands, instantiating `P` by the product.
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
	 * Divides divisors, instantiating `P` by the product.
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
	 * Divides divisors, instantiating `P` by the modulus.
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
	* Exponentiates exponents, instantiating `P` by the product.
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

	
	random: Wrapper<typeof random>
}