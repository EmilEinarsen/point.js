
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
