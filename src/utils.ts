import type { Point } from "./type"

export const random = (...args: 
	| [ max: number ] 
	| [ min: number, max: number ]
) => {
	const [ min, max ] = args.length === 1 ? [0, args[0]] : args
	return Math.floor(Math.random()*(max - min + 1) + min)
}

const createRound = (method: (n: number) => number) => 
	(n: number, precision = 0) => method(+`${n}e${precision}`)/+`1e${precision}`

export const ceil = createRound(Math.ceil)

export const round = createRound(Math.round)

export const floor = createRound(Math.floor)

export const trunc = createRound(Math.trunc)

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
	| { x?: number, y?: number }
	| [x?: number, y?: number]
)] | [x: number, y: number] | undefined[]): { x?: number, y?: number } =>
	Array.isArray(a) ? { x: a[0], y: a[1] }
		: typeof a === 'object' ? { x: a.x, y: a.y }
		: typeof a === 'number' && typeof b === 'number' ? { x: a, y: b }
		: { x: a, y: a }

export const arithOp = (
	that: Point,
	resolver: (a: number, b?: number) => number,
	args: (
		| number
		| { x?: number, y?: number }
		| [x?: number, y?: number]
	)[]
) => that.set(
	args.reduce<{ x?: number, y?: number }>((acc, ace) => {
		ace = getPoint(ace);
		return getPoint(resolver(acc.x??0, ace.x), resolver(acc.y??0, ace.y))
	}, getPoint(that))
)

export const pureOp = <T extends unknown[]>(
	that: Point, 
	resolver: (...args: T) => number, 
	args: T
) => that.set(resolver(...args),resolver(...args))

export const op = <T extends unknown[]>(
	that: Point, 
	resolver: (...args: [n: number, ...args: T]) => number, 
	args: T
) => that.set(resolver(that.x,...args),resolver(that.y,...args))
