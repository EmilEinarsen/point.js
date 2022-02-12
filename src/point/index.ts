
export const P = (...args: any[]) => {
	const instance = Object.create(P.prototype, { 
		x: { value : 0, writable: true, enumerable: true, configurable: false },
		y: { value : 0, writable: true, enumerable: true, configurable: false }
	})

	const get = (
		...[a, b]: any[]
	) =>
		Array.isArray(a)
			? { x: a[0], y: a[1] }
			: typeof a === 'object'
			? { x: a.x, y: a.y }
			: typeof a === 'number' && typeof b === 'number'
			? { x: a, y: b }
			: { x: a, y: a }

	const set = point => {
		instance.x = point?.x || 0
		instance.y = point?.y || 0
		return instance
	}

	P.prototype.add = n => set(get(n))

	return set(get(...args))
}

P.prototype = { constructor: P }
