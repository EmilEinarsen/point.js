import { PConstructor, PPrototype } from "./type";
import { arithOp, clamp, createRound, getPoint, op, pureOp, random } from "./utils"

const P = function P(this: PPrototype, ...args: Parameters<typeof getPoint>) {
  this.set(getPoint(...args))
} as unknown as PConstructor;

P.prototype = {
	x: 0,
	y: 0,

	set(p) {
		return Object.assign(this, {
			x: p.x??0,
			y: p.y??0,
		})
	},

	add(...args) { return arithOp(this, (a,b) => a + (b??0), args) },

	sub(...args) { return arithOp(this, (a,b) => a - (b??0), args) },

	mult(...args) { return arithOp(this, (a,b) => a * (b??1), args) },

	div(...args) { return arithOp(this, (a,b) => a / (b??1), args) },

	mod(...args) { return arithOp(this, (a,b) => a % (b??0), args) },

	pow(...args) { return arithOp(this, (a,b) => a ** (b??1), args) },

	ceil(...args) { return op(this, createRound(Math.ceil), args) },

	round(...args) { return op(this, createRound(Math.round), args) },

	floor(...args) { return op(this, createRound(Math.floor), args) },

	trunc(...args) { return op(this, createRound(Math.trunc), args) },

	transform(resolver) { return resolver(this) },

	toObject() { return { ...this } },

	toArray() { return [ this.x, this.y ] },

	toString() { return `{x: ${this.x}, y: ${this.y}}` },

	clg() { return (/* eslint-disable-line no-console */ console.log(this.toObject()), this) },

	sq(...args) { return op(this, n => n ** 2, args) },

	sqrt(...args) { return op(this, n => n ** .5, args) },

	cb(...args) { return op(this, n =>  n ** 3, args) },

	cbrt(...args) { return op(this, n => n ** (1/3), args) },

	abs(...args) { return op(this, Math.abs, args) },

	inv() { return this.pow(-1) },

	clamp(...args){
		return op(this, clamp, args)
	},

	random(...args) { return pureOp(this, random, args) }
}

P.prototype.constructor = P

P.add = (arg, ...args) => new P(arg).add(...args)

P.sub = (arg, ...args) => new P(arg).sub(...args)

P.mult = (arg, ...args) => new P(arg).mult(...args)

P.div = (arg, ...args) => new P(arg).div(...args)

P.mod = (arg, ...args) => new P(arg).mod(...args)

P.pow = (arg, ...args) => new P(arg).pow(...args)

P.random = (...args) => new P().random(...args)

export { P }
