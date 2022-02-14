import { createRound, random } from "./utils"


type Point = { x: number, y: number }
type Bound = [x: number, y: number]

type ArithMethod = (...args: (
	| number
	| Partial<Point>
	| Partial<Bound>
)[]) => P

class P {
	x = 0
	y = 0

	#get = (...[a, b]: [(
		| number
		| Partial<Point>
		| Partial<Bound>
	)] | Bound | undefined[]): Partial<Point> =>
		Array.isArray(a) ? { x: a[0], y: a[1] }
			: typeof a === 'object' ? { x: a.x, y: a.y }
			: typeof a === 'number' && typeof b === 'number' ? { x: a, y: b }
			: { x: a, y: a }

	#assign = (p: Partial<Point>): this => 
		Object.assign(this, {
			x: p.x??0,
			y: p.y??0,
		})

	#arithWrapper = (resolver: (a: number, b?: number) => number) => 
		(...args: (
			| number
			| Partial<Point>
			| Partial<Bound>
		)[]) => this.#assign(
			args.reduce<Partial<Point>>((acc, arg) => {
				arg = this.#get(arg);
				return this.#get(resolver(acc.x??0, arg.x), resolver(acc.y??0, arg.y))
			}, this.#get(this))
		)

	private static staticArithWrapper = (methodName: string): ArithMethod => 
		(arg, ...args) => (new P(arg) as any)[methodName](...args)

	#wrapper = <U extends unknown[]>(
		resolver: (...args: U) => number
	) => (...args: U): this => this.#assign(this.#get(resolver(...args),resolver(...args)))

	#sideEffectWrapper = <U extends unknown[]>(
		resolver: (n: number,...args: U) => number
	) => (...args: U): this => this.#assign(this.#get(resolver(this.x,...args),resolver(this.y,...args)))

	constructor(...args: [ number | Partial<Point> | Partial<Bound> ] | Bound | []) {
		this.#assign(this.#get(...args))
	}

	/**
	 * Adds addends to `this`, mutating `this` to the sum.
	 *
	 * @param {...*} addends addends in the addition.
	 * @return {this} `this`
	 * @chainable
	 * @example
	 * 
	 * new P(10).add(2,5)
	 * // => P { x: 12, y: 15 }
	 */
	add = this.#arithWrapper((a,b) => a + (b??0))

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
	static add = this.staticArithWrapper('add')

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
	sub = this.#arithWrapper((a,b) => a - (b??0))

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
	static sub = this.staticArithWrapper('sub')

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
	mult = this.#arithWrapper((a,b) => a * (b??1))

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
	static mult = this.staticArithWrapper('mult')

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
	div = this.#arithWrapper((a,b) => a / (b??1))

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
	static div = this.staticArithWrapper('div')

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
	mod = this.#arithWrapper((a,b) => a % (b??0))

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
	static mod = this.staticArithWrapper('mod')

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
	pow = this.#arithWrapper((a,b) => a ** (b??1))

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
	static pow = this.staticArithWrapper('pow')


	/* transform
	sq
	sqrt
	cb
	cbrt
	abs
	inv
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
	 * Calculates `this` rounded up to precision.
	 *
	 * @param precision The precision to round down to.
	 * @return {this} `this`
	 * @chainable
	 * @example
	 * 
	 * new P(-5.2, 2.9).ceil()
	 * // => P { x: -5, y: 3 }
	 */
	ceil = this.#sideEffectWrapper(createRound(Math.ceil))

	/**
	 * Calculates `this` rounded down to precision.
	 *
	 * @param precision The precision to round down to.
	 * @return {this} `this`
	 * @chainable
	 * @example
	 * 
	 * new P(-5.2, 2.9).floor()
	 * // => P { x: -6, y: 2 }
	 */
	floor = this.#sideEffectWrapper(createRound(Math.floor))

	/**
	 * Calculates `this` rounded to precision.
	 *
	 * @param precision The precision to round down to.
	 * @return {this} `this`
	 * @chainable
	 * @example
	 * 
	 * new P(-5.2, 2.9).round()
	 * // => P { x: 5, y: 3 }
	 */
	round = this.#sideEffectWrapper(createRound(Math.round))

	/**
	 * Calculates `this` rounded towards 0 to precision.
	 *
	 * @param precision The precision to round down to.
	 * @return {this} `this`
	 * @chainable
	 * @example
	 * 
	 * new P(-5.2, 2.9).trunc()
	 * // => P { x: -5, y: 2 }
	 */
	trunc = this.#sideEffectWrapper(createRound(Math.trunc))

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
	sq = this.#sideEffectWrapper(n => n ** 2)

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
	sqrt = this.#sideEffectWrapper(n => n ** .5)

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
	cb = this.#sideEffectWrapper(n => n ** 3)

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
	cbrt = this.#sideEffectWrapper(n => n ** (1/3))

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
	abs = this.#sideEffectWrapper(Math.abs)

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
	inv = () => this.pow(-1)

	random = this.#wrapper(random)
	static random = (...args: Parameters<typeof random>) => new P().random(...args)

	transform = <T>(resolver: (p: P) => T) => resolver(this)

	toObject = () => this.#get(this)

	toArray = () => [this.x,this.y]

	toString = () => `{x: ${this.x}, y: ${this.y}}`

	clg = () => (/* eslint-disable-line no-console */ console.log(this.toObject()), this)
}

export { P }
