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

	add = this.#arithWrapper((a,b) => a + (b??0))
	static add = this.staticArithWrapper('add')

	sub = this.#arithWrapper((a,b) => a - (b??0))
	static sub = this.staticArithWrapper('sub')

	mult = this.#arithWrapper((a,b) => a * (b??1))
	static mult = this.staticArithWrapper('mult')

	div = this.#arithWrapper((a,b) => a / (b??1))
	static div = this.staticArithWrapper('div')

	mod = this.#arithWrapper((a,b) => a % (b??0))
	static mod = this.staticArithWrapper('mod')

	pow = this.#arithWrapper((a,b) => a ** (b??1))
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

	ceil = this.#sideEffectWrapper(createRound(Math.ceil))
	round = this.#sideEffectWrapper(createRound(Math.round))
	floor = this.#sideEffectWrapper(createRound(Math.floor))
	trunc = this.#sideEffectWrapper(createRound(Math.trunc))

	random = this.#wrapper(random)
	static random = (...args: Parameters<typeof random>) => new P().random(...args)

	transform = <T>(resolver: (p: P) => T) => resolver(this)

	toObject = () => this.#get(this)

	toArray = () => [this.x,this.y]

	toString = () => `{x: ${this.x}, y: ${this.y}}`

	log = () => (/* eslint-disable-line no-console */ console.log(this.toObject()), this)
}

export { P }
