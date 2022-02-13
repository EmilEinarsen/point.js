
export const random = (...args: 
	| [ max: number ] 
	| [ min: number, max: number ]
) => {
	const [ min, max ] = args.length === 1 ? [0, args[0]] : args
	return Math.floor(Math.random()*(max - min + 1) + min)
}

export const createRound = (method: (n: number) => number) => (n: number, precision = 0) => method(+`${n}e${precision}`)/+`1e${precision}`
