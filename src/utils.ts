import { Bound, Point, PPrototype } from "./type"

export const random = (...args: 
	| [ max: number ] 
	| [ min: number, max: number ]
) => {
	const [ min, max ] = args.length === 1 ? [0, args[0]] : args
	return Math.floor(Math.random()*(max - min + 1) + min)
}

export const createRound = (method: (n: number) => number) => (n: number, precision = 0) => method(+`${n}e${precision}`)/+`1e${precision}`

export const clamp = (...args: 
	| [ n: number, upper: number ] 
	| [ n: number, lower: number, upper: number ]
) => {
	let [ n, lower, upper ] = args.length === 2 ? [args[0], 0, args[1]] : args
	lower = lower === lower ? lower : 0
  upper = upper === upper ? upper : 0
	if(n !== n) return n
	n = n <= upper ? n : upper
	return n >= lower ? n : lower
}

export const getPoint = (...[a, b]: [(
	| number
	| Partial<Point>
	| Partial<Bound>
)] | Bound | undefined[]): Partial<Point> =>
	Array.isArray(a) ? { x: a[0], y: a[1] }
		: typeof a === 'object' ? { x: a.x, y: a.y }
		: typeof a === 'number' && typeof b === 'number' ? { x: a, y: b }
		: { x: a, y: a }

export const arithOp = (
	that: PPrototype,
	resolver: (a: number, b?: number) => number,
	args: (
		| number
		| Partial<Point>
		| Partial<Bound>
	)[]
) => that.set(
	args.reduce<Partial<Point>>((acc, ace) => {
		ace = getPoint(ace);
		return getPoint(resolver(acc.x??0, ace.x), resolver(acc.y??0, ace.y))
	}, getPoint(that))
)

export const pureOp = <T extends unknown[]>(
	that: PPrototype, 
	resolver: (...args: T) => number, 
	args: T
) => that.set(getPoint(resolver(...args),resolver(...args)))

export const op = <T extends unknown[]>(
	that: PPrototype, 
	resolver: (...args: [n: number, ...args: T]) => number, 
	args: T
) => that.set(getPoint(resolver(that.x,...args),resolver(that.y,...args)))
