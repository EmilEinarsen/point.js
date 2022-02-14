/* eslint-disable no-console */

import { P } from '../src'

describe('P', () => {
	describe('Constructor & set', () => {
		expect(Reflect.getPrototypeOf(new P(4)) === P.prototype).toBe(true)
		expect(new P(4).constructor === P).toBe(true)
		expect(new P(4) instanceof P).toBe(true)
		expect(new P(10,33)).toMatchObject({x:10,y:33})
		expect(new P(99,0)).toMatchObject({x:99,y:0})
		expect(new P(0,3)).toMatchObject({x:0,y:3})

		expect(new P(0)).toMatchObject({x:0,y:0})
		expect(new P(5)).toMatchObject({x:5,y:5})
		expect(new P(-5)).toMatchObject({x:-5,y:-5})

		expect(new P({y:1})).toMatchObject({x:0,y:1})
		expect(new P({x:84})).toMatchObject({x:84,y:0})
		expect(new P({x:0})).toMatchObject({x:0,y:0})
		expect(new P({x:22,y:5})).toMatchObject({x:22,y:5})

		expect(new P([])).toMatchObject({x:0,y:0})
		expect(new P([1])).toMatchObject({x:1,y:0})
		expect(new P([undefined,1])).toMatchObject({x:0,y:1})
		expect(new P([-1,8])).toMatchObject({x:-1,y:8})

		expect(new P()).toMatchObject({x:0,y:0})
	})

	describe('Value', () => {
		describe('Getters', () => {
			it('point', () => {
				const p = new P(10,33)
				expect(p).toMatchObject({x:10,y:33})
			})
			it('x', () => {
				expect(new P(10,33).x).toStrictEqual(10)
			})
			it('y', () => {
				expect(new P(10,33).y).toStrictEqual(33)
			})
		})
		describe('Setters', () => {
			it('point', () => {
				const p = new P(10,33)
				Object.assign(p, { x: -5, y: 0 })
				expect(p).toMatchObject({x:-5,y:0})
				expect(Reflect.getPrototypeOf(p) === P.prototype).toBe(true)
			})
			it('x', () => {
				const p = new P(10,33)
				p.x = 5
				expect(p).toMatchObject({x:5,y:33})
			})
			it('y', () => {
				const p = new P(10,33)
				p.y = -49
				expect(p).toMatchObject({x:10,y:-49})
			})
		})

		describe('Methods', () => {
			it('toObject', () => {
				expect(new P(10,33).toObject()).toMatchObject({x:10,y:33})
				expect(new P(99,0).toObject()).toMatchObject({x:99,y:0})
				expect(new P(0,3).toObject()).toMatchObject({x:0,y:3})
		
				expect(new P(0).toObject()).toMatchObject({x:0,y:0})
				expect(new P(5).toObject()).toMatchObject({x:5,y:5})
				expect(new P(-5).toObject()).toMatchObject({x:-5,y:-5})
		
				expect(new P({y:1}).toObject()).toMatchObject({x:0,y:1})
				expect(new P({x:84}).toObject()).toMatchObject({x:84,y:0})
				expect(new P({x:0}).toObject()).toMatchObject({x:0,y:0})
				expect(new P({x:22,y:5}).toObject()).toMatchObject({x:22,y:5})
		
				expect(new P([]).toObject()).toMatchObject({x:0,y:0})
				expect(new P([1]).toObject()).toMatchObject({x:1,y:0})
				expect(new P([undefined,1]).toObject()).toMatchObject({x:0,y:1})
				expect(new P([-1,8]).toObject()).toMatchObject({x:-1,y:8})
		
				expect(new P().toObject()).toMatchObject({x:0,y:0})
			})
			it('toArray', () => {
				expect(new P(10,33).toArray()).toMatchObject([10,33])
				expect(new P(99,0).toArray()).toMatchObject([99,0])
				expect(new P(0,3).toArray()).toMatchObject([0,3])
		
				expect(new P(0).toArray()).toMatchObject([0,0])
				expect(new P(5).toArray()).toMatchObject([5,5])
				expect(new P(-5).toArray()).toMatchObject([-5,-5])
		
				expect(new P({y:1}).toArray()).toMatchObject([0,1])
				expect(new P({x:84}).toArray()).toMatchObject([84,0])
				expect(new P({x:0}).toArray()).toMatchObject([0,0])
				expect(new P({x:22,y:5}).toArray()).toMatchObject([22,5])
		
				expect(new P([]).toArray()).toMatchObject([0,0])
				expect(new P([1]).toArray()).toMatchObject([1,0])
				expect(new P([undefined,1]).toArray()).toMatchObject([0,1])
				expect(new P([-1,8]).toArray()).toMatchObject([-1,8])
		
				expect(new P().toArray()).toMatchObject([0,0])
			})
			it('toString', () => {
				expect(new P(10,33).toString()).toStrictEqual(`{x: 10, y: 33}`)
				expect(new P(99,0).toString()).toStrictEqual(`{x: 99, y: 0}`)
				expect(new P(0,3).toString()).toStrictEqual(`{x: 0, y: 3}`)
		
				expect(new P(0).toString()).toStrictEqual(`{x: 0, y: 0}`)
				expect(new P(5).toString()).toStrictEqual(`{x: 5, y: 5}`)
				expect(new P(-5).toString()).toStrictEqual(`{x: -5, y: -5}`)
		
				expect(new P({y:1}).toString()).toStrictEqual(`{x: 0, y: 1}`)
				expect(new P({x:84}).toString()).toStrictEqual(`{x: 84, y: 0}`)
				expect(new P({x:0}).toString()).toStrictEqual(`{x: 0, y: 0}`)
				expect(new P({x:22,y:5}).toString()).toStrictEqual(`{x: 22, y: 5}`)
		
				expect(new P([]).toString()).toStrictEqual(`{x: 0, y: 0}`)
				expect(new P([1]).toString()).toStrictEqual(`{x: 1, y: 0}`)
				expect(new P([undefined,1]).toString()).toStrictEqual(`{x: 0, y: 1}`)
				expect(new P([-1,8]).toString()).toStrictEqual(`{x: -1, y: 8}`)
		
				expect(new P().toString()).toStrictEqual(`{x: 0, y: 0}`)
			})
			it('transform', () => {
				expect(new P(10,33).transform(p => [p.x,p.y])).toStrictEqual([10,33])
			})
			it('clg', () => {
				console.log = jest.fn();
				const p = new P(10,33)
				p.clg()
				expect(console.log).toHaveBeenCalledWith(p.toObject());

				p.add(20)
				const screenshot = p.toObject()
				p.clg().sub(20)
				expect(console.log).toHaveBeenCalledWith(screenshot);
				p.clg()
				expect(console.log).toHaveBeenCalledWith(p.toObject());
			})
		})
	})

	describe('Arithmetic methods', () => {
		describe('Addition, add', () => {
			let isWorking = false
			it('instance', () => {
				expect(new P(10,33).add(1)).toMatchObject({x:11,y:34})
				expect(new P(10,33).add(-1)).toMatchObject({x:9,y:32})
				expect(new P(10,33).add(-1, 10)).toMatchObject({x:19,y:42})
				expect(new P(10,33).add({x:0,y:2})).toMatchObject({x:10,y:35})
				expect(new P(10,33).add({x:2})).toMatchObject({x:12,y:33})
				expect(new P(10,33).add([0,2])).toMatchObject({x:10,y:35})
				expect(new P(10,33).add([undefined,2])).toMatchObject({x:10,y:35})
				expect(new P(10,33).add([1])).toMatchObject({x:11,y:33})
				expect(new P(10,33).add()).toMatchObject({x:10,y:33})
				isWorking = true
			})
			it('static', () => {
				if(!isWorking) throw('Instance method failed')
				expect(P.add([1,2],[2,-7])).toMatchObject({x:3,y:-5})
				expect(P.add([1,2],[2,-7],[2,-7],[2,-7],[2,-7],[2,-7],[2,-7])).toMatchObject({x:13,y:-40})
			})
		})
		describe('Subtraction, sub', () => {
			let isWorking = false
			it('instance', () => {
				expect(new P(10,33).sub(1)).toMatchObject({x:9,y:32})
				expect(new P(10,33).sub(-1)).toMatchObject({x:11,y:34})
				expect(new P(10,33).sub(-1, 10)).toMatchObject({x:1,y:24})
				expect(new P(10,33).sub({x:0,y:2})).toMatchObject({x:10,y:31})
				expect(new P(10,33).sub({y:2})).toMatchObject({x:10,y:31})
				expect(new P(10,33).sub([0,2])).toMatchObject({x:10,y:31})
				expect(new P(10,33).sub([undefined,2])).toMatchObject({x:10,y:31})
				expect(new P(10,33).sub([1])).toMatchObject({x:9,y:33})
				expect(new P(10,33).sub()).toMatchObject({x:10,y:33})
				isWorking = true
			})
			it('static', () => {
				if(!isWorking) throw('Instance method failed')
				expect(P.sub([1,2],[2,-7])).toMatchObject({x:-1,y:9})
				expect(P.sub([1,2],[2,-7],[2,-7],[2,-7],[2,-7],[2,-7],[2,-7])).toMatchObject({x:-11,y:44})
			})
		})

		describe('Multiplication, mult', () => {
			let isWorking = false
			it('instance', () => {
				expect(new P(10,33).mult(1)).toMatchObject({x:10,y:33})
				expect(new P(10,33).mult(3)).toMatchObject({x:30,y:99})
				expect(new P(10,33).mult(0)).toMatchObject({x:0,y:0})
				expect(new P(10,33).mult(-1)).toMatchObject({x:-10,y:-33})
				expect(new P(10,33).mult(-2, 10)).toMatchObject({x:-200,y:-660})
				expect(new P(10,33).mult({x:1/2,y:2})).toMatchObject({x:5,y:66})
				expect(new P(10,33).mult({x:1/2})).toMatchObject({x:5,y:33})
				expect(new P(10,33).mult([1/2,2])).toMatchObject({x:5,y:66})
				expect(new P(10,33).mult([1/2])).toMatchObject({x:5,y:33})
				expect(new P(10,33).mult([undefined,1/2])).toMatchObject({x:10,y:16.5})
				expect(new P(10,33).mult([1])).toMatchObject({x:10,y:33})
				expect(new P(10,33).mult()).toMatchObject({x:10,y:33})
				isWorking = true
			})
			it('static', () => {
				if(!isWorking) throw('Instance method failed')
				expect(P.mult([1,2],[2,-7])).toMatchObject({x:2,y:-14})
				expect(P.mult([1,2],[2,-7],[2,-7],[2,-7])).toMatchObject({x:8,y:-686})
			})
		})
		
		describe('Division, div', () => {
			let isWorking = false
			it('instance', () => {
				expect(new P(10,33).div(1)).toMatchObject({x:10,y:33})
				expect(new P(10,33).div(3)).toMatchObject({x:10/3,y:11})
				expect(new P(10,33).div(0,-0)).toMatchObject({x:-Infinity,y:-Infinity})
				expect(new P(10,33).div(-1)).toMatchObject({x:-10,y:-33})
				expect(new P(10,33).div(-2, 10)).toMatchObject({x:-.5,y:-1.65})
				expect(new P(10,33).div({x:1/2,y:2})).toMatchObject({x:20,y:16.5})
				expect(new P(10,33).div({x:1/2})).toMatchObject({x:20,y:33})
				expect(new P(10,33).div([1/2,2])).toMatchObject({x:20,y:16.5})
				expect(new P(10,33).div([1/2])).toMatchObject({x:20,y:33})
				expect(new P(10,33).div([undefined,1/2])).toMatchObject({x:10,y:66})
				expect(new P(10,33).div([2])).toMatchObject({x:5,y:33})
				expect(new P(10,33).div()).toMatchObject({x:10,y:33})
				isWorking = true
			})
			it('static', () => {
				if(!isWorking) throw('Instance method failed')
				expect(P.div([1,2],[2,-7])).toMatchObject({x:1/2,y:2/-7})
				expect(P.div([1,2],[2,-7],[2,-7],[2,-7])).toMatchObject({x:1/8,y:-2/343})
			})
		})

		describe('Modulus, mod', () => {
			let isWorking = false
			it('instance', () => {
				expect(new P(10,33).mod(1)).toMatchObject({x:0,y:0})
				expect(new P(10,33).mod(3)).toMatchObject({x:1,y:0})
				expect(new P(10,33).mod(0,-0)).toMatchObject({x:NaN,y:NaN})
				expect(new P(5,-6).mod(3)).toMatchObject({x:2,y:-0})
				expect(new P(0,-1).mod(3)).toMatchObject({x:0,y:-1})
				expect(new P(0,-1).mod([3,2])).toMatchObject({x:0,y:-1})
				expect(new P(0,-1).mod({x:3,y:2})).toMatchObject({x:0,y:-1})
				expect(new P(0,1).mod({y:2})).toMatchObject({x:NaN,y:1})
				expect(new P(1,-1).mod({y:2})).toMatchObject({x:NaN,y:-1})
				expect(new P(10,33).mod([3])).toMatchObject({x:1,y:NaN})
				expect(new P(10,33).mod([undefined,5])).toMatchObject({x:NaN,y:3})
				expect(new P(10,33).mod([])).toMatchObject({x:NaN,y:NaN})
				expect(new P(10,33).mod()).toMatchObject({x:10,y:33})
				isWorking = true
			})
			it('static', () => {
				if(!isWorking) throw('Instance method failed')
				expect(P.mod([1,2],[2,-7])).toMatchObject({x:1,y:2})
				expect(P.mod([1,2],[2,-7],[2,-7],[2,-7],[2,-7],[2,-7])).toMatchObject({x:1,y:2})
			})
		})

		describe('Power, pow', () => {
			let isWorking = false
			it('instance', () => {
				expect(new P(10,33).pow(1)).toMatchObject({x:10,y:33})
				expect(new P(10,33).pow(3)).toMatchObject({x:1e3,y:35937})
				expect(new P(10,33).pow(0,-0)).toMatchObject({x: 1,y:1})
				expect(new P(10,33).pow(-1)).toMatchObject({x:1/10,y:1/33})
				expect(new P(10,0).pow(-2)).toMatchObject({x:1/100,y:Infinity})
				expect(new P(9,33).pow({x:1/2,y:2})).toMatchObject({x:3,y:1089})
				expect(new P(9,33).pow({y:2})).toMatchObject({x:9,y:1089})
				expect(new P(9,33).pow([1/2,2])).toMatchObject({x:3,y:1089})
				expect(new P(10,33).pow([1,1])).toMatchObject({x:10,y:33})
				expect(new P(10,36).pow([undefined,1/2])).toMatchObject({x:10,y:6})
				expect(new P(10,33).pow([])).toMatchObject({x:10,y:33})
				expect(new P(10,33).pow()).toMatchObject({x:10,y:33})
				isWorking = true
			})
			it('static', () => {
				if(!isWorking) throw('Instance method failed')
				expect(P.pow([1,2],[2,-2])).toMatchObject({x:1,y:1/4})
				expect(P.pow([1,2],[2,-2],[2,-2],[2,-2])).toMatchObject({x:1,y:1/(16*16)})
			})
		})

		describe('Utils', () => {
			it('ceil', () => {
				expect(new P(1.6,1.1).ceil()).toMatchObject({x:2,y:2})
			})
			it('round', () => {
				expect(new P(1.6,1.1).round()).toMatchObject({x:2,y:1})
			})
			it('floor', () => {
				expect(new P(1.6,1.1).floor()).toMatchObject({x:1,y:1})
			})
			it('trunc', () => {
				expect(new P(1.6,1.1).trunc()).toMatchObject({x:1,y:1})
				expect(new P(1.61,1.17).trunc(1)).toMatchObject({x:1.6,y:1.1})
				expect(new P(1.62357,1.1234).trunc(3)).toMatchObject({x:1.623,y:1.123})
			})
			it('sq', () => {
				expect(new P(2,3).sq()).toMatchObject({x:4,y:9})
			})
			it('sqrt', () => {
				expect(new P(4,9).sqrt()).toMatchObject({x:2,y:3})
			})
			it('cb', () => {
				expect(new P(2,3).cb()).toMatchObject({x:8,y:27})
			})
			it('cbrt', () => {
				expect(new P(8,27).cbrt()).toMatchObject({x:2,y:3})
			})
			it('abs', () => {
				expect(new P(-2,3).abs()).toMatchObject({x:2,y:3})
				expect(new P(-2).abs()).toMatchObject({x:2,y:2})
			})
			it('inv', () => {
				expect(new P(2).inv()).toMatchObject({x:.5,y:.5})
				expect(new P(-2).inv()).toMatchObject({x:-.5,y:-.5})
				expect(new P(10,-66).inv()).toMatchObject({x:1/10,y:-1/66})
				expect(new P(1/3).inv()).toMatchObject({x:3,y:3})
				expect(new P(1/3,-4/7).inv()).toMatchObject({x:3,y:-7/4})
			})
		})
	})

	describe('boolean methods', () => {
		it('is', () => {
			expect(new P(-46,9).is(45,9)).toBe(false)
			expect(new P(-46,9).is({x:4,y:-200})).toBe(false)
			expect(new P(-46,9).is(-46)).toBe(false)
			expect(new P(-46,9).is(-46,9)).toBe(true)
			expect(new P(-46,9).is({x:-46,y:9})).toBe(true)
			expect(new P(9,9).is(9)).toBe(true)
		})
		it('has', () => {
			expect(new P(-46,9).has(45,9)).toBe(true)
			expect(new P(-46,9).has({x:4,y:-200})).toBe(false)
			expect(new P(-46,9).has(-46)).toBe(true)
			expect(new P(-46,9).has(-46,9)).toBe(true)
			expect(new P(-46,9).has({x:-46,y:9})).toBe(true)
			expect(new P(9,9).has(9)).toBe(true)
		})
		it('isZero', () => {
			expect(new P(1,1).isZero()).toBe(false)
			expect(new P(1).isZero()).toBe(false)
			expect(new P([1]).isZero()).toBe(false)
			expect(new P([1,1]).isZero()).toBe(false)
			expect(new P({x:1}).isZero()).toBe(false)
			expect(new P({x:1,y:1}).isZero()).toBe(false)
			expect(new P().isZero()).toBe(true)
			expect(new P(0).isZero()).toBe(true)
			expect(new P(0,0).isZero()).toBe(true)
		})
		it('hasZero', () => {
			expect(new P(1,1).hasZero()).toBe(false)
			expect(new P(1).hasZero()).toBe(false)
			expect(new P([1]).hasZero()).toBe(true)
			expect(new P([1,1]).hasZero()).toBe(false)
			expect(new P({x:1}).hasZero()).toBe(true)
			expect(new P({x:1,y:1}).hasZero()).toBe(false)
			expect(new P().hasZero()).toBe(true)
			expect(new P(0).hasZero()).toBe(true)
			expect(new P(0,0).hasZero()).toBe(true)
		})
		it('isClose', () => {
			expect(new P(1,1).isClose([],1/2)).toBe(false)
			expect(new P(1,1).isClose([],5)).toBe(true)
		})
		it('check', () => {
			expect(new P(1,1).check(p=>p.x>2)).toBe(false)
			expect(new P(12,15).check(p=>p.mod(2).x===0&&p.mod(2).y===0)).toBe(false)
			expect(new P(12,15).check(p=>p.mod(2).x===0&&p.mod(2).y===1)).toBe(false)
			expect(new P(12,15).check(p=>p.pow(0).x===1&&p.mod(2).y===1)).toBe(false)
		})
	})

	describe('utils methods', () => {
		it('clone', () => {
			const p = new P(6,8)
			const newP = p.clone()
			expect(Object.is(p, newP)).toBe(false)
			expect(p).toMatchObject(newP)
		})
		it('copy', () => {
			const p = new P(6,8)
			const otherP = new P()
			otherP.copy(p)
			expect(Object.is(p, otherP)).toBe(false)
			expect(p).toMatchObject(otherP)
		})
		it('zero', () => {
			expect(new P(-19).zero()).toMatchObject({x:0,y:0})
			expect(new P(1289).zero()).toMatchObject({x:0,y:0})
			expect(new P([undefined,20]).zero()).toMatchObject({x:0,y:0})
			expect(new P({x:-2}).zero()).toMatchObject({x:0,y:0})
			expect(new P().zero()).toMatchObject({x:0,y:0})
		})
		it('one', () => {
			expect(new P(-19).one()).toMatchObject({x:1,y:1})
			expect(new P(1289).one()).toMatchObject({x:1,y:1})
			expect(new P([undefined,20]).one()).toMatchObject({x:1,y:1})
			expect(new P({x:-2}).one()).toMatchObject({x:1,y:1})
		})
		it('getSum', () => {
			expect(new P(-19).getSum()).toStrictEqual(-38)
			expect(new P(1289).getSum(10)).toStrictEqual(1289*2+10*2)
			expect(new P([undefined,20]).getSum(20,20)).toStrictEqual(20+20*2+20*2)
			expect(new P({x:-2}).getSum()).toStrictEqual(-2)
		})
		it('getDist', () => {
			expect(new P(5).getDist([5,4])).toStrictEqual(((5-5)**2+(5-4)**2)**(1/2))
			expect(new P({y:29}).getDist([-2,4])).toStrictEqual(((0-(-2))**2+(29-4)**2)**(1/2))
		})
		describe('random', () => {
			it('instance', () => {
				expect(
					Array(1000).fill(new P(Infinity)).map(() => new P(Infinity,Infinity).random(100))
						.every(p=>0<=p.x&&p.x<=100&&0<=p.y&&p.y<=100)
				).toBe(true)
				expect(
					Array(1000).fill(new P(Infinity)).map(() => new P(Infinity,Infinity).random(-100,100))
						.every(p=>-100<=p.x&&p.x<=100&&-100<=p.y&&p.y<=100)
				).toBe(true)
				expect(
					Array(1000).fill(new P(Infinity)).map(() => new P(Infinity,Infinity).random(50,350))
						.every(p=>50<=p.x&&p.x<=350&&50<=p.y&&p.y<=350)
				).toBe(true)
			})
			it('static', () => {
				expect(
					Array(1000).fill(new P(Infinity)).map(() => P.random(100))
						.every(p=>0<=p.x&&p.x<=100&&0<=p.y&&p.y<=100)
				).toBe(true)
				expect(
					Array(1000).fill(new P(Infinity)).map(() => P.random(-100,100))
						.every(p=>-100<=p.x&&p.x<=100&&-100<=p.y&&p.y<=100)
				).toBe(true)
				expect(
					Array(1000).fill(new P(Infinity)).map(() => P.random(50,350))
						.every(p=>50<=p.x&&p.x<=350&&50<=p.y&&p.y<=350)
				).toBe(true)
			})
		})
		it('min', () => {
			expect(P.min(1,2,3,4,5,6,7).toArray()).toMatchObject([1,1])
			expect(P.min([29,2],[592,2],[undefined,8],4,296,27,49,[237,2],2).toArray()).toMatchObject([0,2])
		})
		it('max', () => {
			expect(P.max(1,2,3,4,5,6,7).toArray()).toMatchObject([7,7])
			expect(P.max([29,2],[592,2],[undefined,8],4,296,27,49,[237,2],2).toArray()).toMatchObject([592,296])
		})
	})
})
