import type { PointConstructor, Point } from "./type";
import { arithOp, ceil, clamp, floor, getPoint, op, pureOp, random, round, trunc } from "./utils"

const P = function P(this: Point, ...args: Parameters<typeof getPoint>) {
	const instance = this instanceof P ? this : Object.create(P.prototype, { 
		x: { value: 0, writable: true, enumerable: true, configurable: false },
		y: { value: 0, writable: true, enumerable: true, configurable: false }
	})
  instance.set(...args)
	return instance
} as unknown as PointConstructor;

P.prototype = {
	x: 0,
	y: 0,

	set(...args) {
		const p = getPoint(...args)
		return Object.assign(this, { 
			x: p.x??0, 
			y: p.y??0 
		}) 
	},

	add(...args) { return arithOp(this, (a,b) => a + (b??0), args) },

	sub(...args) { return arithOp(this, (a,b) => a - (b??0), args) },

	mult(...args) { return arithOp(this, (a,b) => a * (b??1), args) },

	div(...args) { return arithOp(this, (a,b) => a / (b??1), args) },

	mod(...args) { return arithOp(this, (a,b) => a % (b??0), args) },

	pow(...args) { return arithOp(this, (a,b) => a ** (b??1), args) },

	ceil(...args) { return op(this, ceil, args) },

	round(...args) { return op(this, round, args) },

	floor(...args) { return op(this, floor, args) },

	trunc(...args) { return op(this, trunc, args) },

	sq(...args) { return op(this, n => n ** 2, args) },

	sqrt(...args) { return op(this, n => n ** .5, args) },

	cb(...args) { return op(this, n =>  n ** 3, args) },

	cbrt(...args) { return op(this, n => n ** (1/3), args) },

	abs(...args) { return op(this, Math.abs, args) },

	inv() { return this.pow(-1) },

	clone() { return new P(this) },

	copy(p: Point) { return this.set(p) },

	clamp(...args) { return op(this, clamp, args) },

	getSum() { return this.x + this.y},

	getDistSq(arg) { return this.clone().sub(arg).sq().getSum() },

	getDist(arg) { return Math.sqrt(this.getDistSq(arg)) },
	
	between(point, distance = .5) { return this.add(this.clone().sub(point).mult(distance).abs()) },

	random(...args) { return pureOp(this, random, args) },

	min(...args) { return arithOp(this, (a,b) => Math.min(...b?[a,b]:[a]), args) },

	max(...args) { return arithOp(this, (a,b) => Math.max(...b?[a,b]:[a]), args) },

	operation(resolver) { return this.set(resolver(this.x),resolver(this.y)) },

	transform(resolver) { return resolver(this) },

	check(resolver) { return resolver(this) },

	is(point, threshold = 0) { return this.getDistSq(point) <= threshold**2 },

	toObject() { return { ...this } },

	toArray() { return [ this.x, this.y ] },

	toString() { return `{x: ${this.x}, y: ${this.y}}` },

	clg() { return (/* eslint-disable-line no-console */ console.log(this.toObject()), this) },
}

P.prototype.constructor = P

P.add = (arg, ...args) => new P(arg).add(...args)

P.sub = (arg, ...args) => new P(arg).sub(...args)

P.mult = (arg, ...args) => new P(arg).mult(...args)

P.div = (arg, ...args) => new P(arg).div(...args)

P.mod = (arg, ...args) => new P(arg).mod(...args)

P.pow = (arg, ...args) => new P(arg).pow(...args)

P.random = (...args) => new P().random(...args)

P.min = (arg, ...args) => new P(arg).min(...args)

P.max = (arg, ...args) => new P(arg).max(...args)

export default P

