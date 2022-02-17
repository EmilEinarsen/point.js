/* eslint-disable no-console */

import { P } from '../src'

describe('P', () => {
	describe('Constructor & set', () => {
		expect(Reflect.getPrototypeOf(P(4)) === P.prototype).toBe(true)
		expect(P().constructor === P).toBe(true)
		expect(P() instanceof P).toBe(true)
		expect({ ...P() }).toMatchObject({x:0,y:0})
		expect(P(10,33)).toMatchObject({x:10,y:33})
		expect(P(99,0)).toMatchObject({x:99,y:0})
		expect(P(0,3)).toMatchObject({x:0,y:3})

		expect(P(0)).toMatchObject({x:0,y:0})
		expect(P(5)).toMatchObject({x:5,y:5})
		expect(P(-5)).toMatchObject({x:-5,y:-5})

		expect(P({y:1})).toMatchObject({x:0,y:1})
		expect(P({x:84})).toMatchObject({x:84,y:0})
		expect(P({x:0})).toMatchObject({x:0,y:0})
		expect(P({x:22,y:5})).toMatchObject({x:22,y:5})

		expect(P([])).toMatchObject({x:0,y:0})
		expect(P([1])).toMatchObject({x:1,y:0})
		expect(P([undefined,1])).toMatchObject({x:0,y:1})
		expect(P([-1,8])).toMatchObject({x:-1,y:8})

		expect(P()).toMatchObject({x:0,y:0})
	})

	describe('Value', () => {
		describe('Getters', () => {
			it('point', () => {
				const p = P(10,33)
				expect(p).toMatchObject({x:10,y:33})
			})
			it('x', () => {
				expect(P(10,33).x).toStrictEqual(10)
			})
			it('y', () => {
				expect(P(10,33).y).toStrictEqual(33)
			})
		})
		describe('Setters', () => {
			it('point', () => {
				const p = P(10,33)
				Object.assign(p, { x: -5, y: 0 })
				expect(p).toMatchObject({x:-5,y:0})
				expect(Reflect.getPrototypeOf(p) === P.prototype).toBe(true)
			})
			it('x', () => {
				const p = P(10,33)
				p.x = 5
				expect(p).toMatchObject({x:5,y:33})
			})
			it('y', () => {
				const p = P(10,33)
				p.y = -49
				expect(p).toMatchObject({x:10,y:-49})
			})
		})

		describe('Methods', () => {
			it('toObject', () => {
				expect(P(10,33).toObject()).toMatchObject({x:10,y:33})
				expect(P(99,0).toObject()).toMatchObject({x:99,y:0})
				expect(P(0,3).toObject()).toMatchObject({x:0,y:3})
		
				expect(P(0).toObject()).toMatchObject({x:0,y:0})
				expect(P(5).toObject()).toMatchObject({x:5,y:5})
				expect(P(-5).toObject()).toMatchObject({x:-5,y:-5})
		
				expect(P({y:1}).toObject()).toMatchObject({x:0,y:1})
				expect(P({x:84}).toObject()).toMatchObject({x:84,y:0})
				expect(P({x:0}).toObject()).toMatchObject({x:0,y:0})
				expect(P({x:22,y:5}).toObject()).toMatchObject({x:22,y:5})
		
				expect(P([]).toObject()).toMatchObject({x:0,y:0})
				expect(P([1]).toObject()).toMatchObject({x:1,y:0})
				expect(P([undefined,1]).toObject()).toMatchObject({x:0,y:1})
				expect(P([-1,8]).toObject()).toMatchObject({x:-1,y:8})
		
				expect(P().toObject()).toMatchObject({x:0,y:0})
			})
			it('toArray', () => {
				expect(P(10,33).toArray()).toMatchObject([10,33])
				expect(P(99,0).toArray()).toMatchObject([99,0])
				expect(P(0,3).toArray()).toMatchObject([0,3])
		
				expect(P(0).toArray()).toMatchObject([0,0])
				expect(P(5).toArray()).toMatchObject([5,5])
				expect(P(-5).toArray()).toMatchObject([-5,-5])
		
				expect(P({y:1}).toArray()).toMatchObject([0,1])
				expect(P({x:84}).toArray()).toMatchObject([84,0])
				expect(P({x:0}).toArray()).toMatchObject([0,0])
				expect(P({x:22,y:5}).toArray()).toMatchObject([22,5])
		
				expect(P([]).toArray()).toMatchObject([0,0])
				expect(P([1]).toArray()).toMatchObject([1,0])
				expect(P([undefined,1]).toArray()).toMatchObject([0,1])
				expect(P([-1,8]).toArray()).toMatchObject([-1,8])
		
				expect(P().toArray()).toMatchObject([0,0])
			})
			it('toString', () => {
				expect(P(10,33).toString()).toStrictEqual(`{x: 10, y: 33}`)
				expect(P(99,0).toString()).toStrictEqual(`{x: 99, y: 0}`)
				expect(P(0,3).toString()).toStrictEqual(`{x: 0, y: 3}`)
		
				expect(P(0).toString()).toStrictEqual(`{x: 0, y: 0}`)
				expect(P(5).toString()).toStrictEqual(`{x: 5, y: 5}`)
				expect(P(-5).toString()).toStrictEqual(`{x: -5, y: -5}`)
		
				expect(P({y:1}).toString()).toStrictEqual(`{x: 0, y: 1}`)
				expect(P({x:84}).toString()).toStrictEqual(`{x: 84, y: 0}`)
				expect(P({x:0}).toString()).toStrictEqual(`{x: 0, y: 0}`)
				expect(P({x:22,y:5}).toString()).toStrictEqual(`{x: 22, y: 5}`)
		
				expect(P([]).toString()).toStrictEqual(`{x: 0, y: 0}`)
				expect(P([1]).toString()).toStrictEqual(`{x: 1, y: 0}`)
				expect(P([undefined,1]).toString()).toStrictEqual(`{x: 0, y: 1}`)
				expect(P([-1,8]).toString()).toStrictEqual(`{x: -1, y: 8}`)
		
				expect(P().toString()).toStrictEqual(`{x: 0, y: 0}`)
			})
			it('transform', () => {
				expect(P(10,33).transform(p => [p.x,p.y])).toStrictEqual([10,33])
			})
			it('clg', () => {
				console.log = jest.fn();
				const p = P(10,33)
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
				expect(P(10,33).add(1)).toMatchObject({x:11,y:34})
				expect(P(10,33).add(-1)).toMatchObject({x:9,y:32})
				expect(P(10,33).add(-1, 10)).toMatchObject({x:19,y:42})
				expect(P(10,33).add({x:0,y:2})).toMatchObject({x:10,y:35})
				expect(P(10,33).add({x:2})).toMatchObject({x:12,y:33})
				expect(P(10,33).add([0,2])).toMatchObject({x:10,y:35})
				expect(P(10,33).add([undefined,2])).toMatchObject({x:10,y:35})
				expect(P(10,33).add([1])).toMatchObject({x:11,y:33})
				expect(P(10,33).add()).toMatchObject({x:10,y:33})
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
				expect(P(10,33).sub(1)).toMatchObject({x:9,y:32})
				expect(P(10,33).sub(-1)).toMatchObject({x:11,y:34})
				expect(P(10,33).sub(-1, 10)).toMatchObject({x:1,y:24})
				expect(P(10,33).sub({x:0,y:2})).toMatchObject({x:10,y:31})
				expect(P(10,33).sub({y:2})).toMatchObject({x:10,y:31})
				expect(P(10,33).sub([0,2])).toMatchObject({x:10,y:31})
				expect(P(10,33).sub([undefined,2])).toMatchObject({x:10,y:31})
				expect(P(10,33).sub([1])).toMatchObject({x:9,y:33})
				expect(P(10,33).sub()).toMatchObject({x:10,y:33})
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
				expect(P(10,33).mult(1)).toMatchObject({x:10,y:33})
				expect(P(10,33).mult(3)).toMatchObject({x:30,y:99})
				expect(P(10,33).mult(0)).toMatchObject({x:0,y:0})
				expect(P(10,33).mult(-1)).toMatchObject({x:-10,y:-33})
				expect(P(10,33).mult(-2, 10)).toMatchObject({x:-200,y:-660})
				expect(P(10,33).mult({x:1/2,y:2})).toMatchObject({x:5,y:66})
				expect(P(10,33).mult({x:1/2})).toMatchObject({x:5,y:33})
				expect(P(10,33).mult([1/2,2])).toMatchObject({x:5,y:66})
				expect(P(10,33).mult([1/2])).toMatchObject({x:5,y:33})
				expect(P(10,33).mult([undefined,1/2])).toMatchObject({x:10,y:16.5})
				expect(P(10,33).mult([1])).toMatchObject({x:10,y:33})
				expect(P(10,33).mult()).toMatchObject({x:10,y:33})
				isWorking = true
			})
			it('static', () => {
				if(!isWorking) throw('Instance method failed')
				P.mult()
				expect(P.mult([1,2],[2,-7])).toMatchObject({x:2,y:-14})
				expect(P.mult([1,2],[2,-7],[2,-7],[2,-7])).toMatchObject({x:8,y:-686})
			})
		})
		
		describe('Division, div', () => {
			let isWorking = false
			it('instance', () => {
				expect(P(10,33).div(1)).toMatchObject({x:10,y:33})
				expect(P(10,33).div(3)).toMatchObject({x:10/3,y:11})
				expect(P(10,33).div(0,-0)).toMatchObject({x:-Infinity,y:-Infinity})
				expect(P(10,33).div(-1)).toMatchObject({x:-10,y:-33})
				expect(P(10,33).div(-2, 10)).toMatchObject({x:-.5,y:-1.65})
				expect(P(10,33).div({x:1/2,y:2})).toMatchObject({x:20,y:16.5})
				expect(P(10,33).div({x:1/2})).toMatchObject({x:20,y:33})
				expect(P(10,33).div([1/2,2])).toMatchObject({x:20,y:16.5})
				expect(P(10,33).div([1/2])).toMatchObject({x:20,y:33})
				expect(P(10,33).div([undefined,1/2])).toMatchObject({x:10,y:66})
				expect(P(10,33).div([2])).toMatchObject({x:5,y:33})
				expect(P(10,33).div()).toMatchObject({x:10,y:33})
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
				expect(P(10,33).mod(1)).toMatchObject({x:0,y:0})
				expect(P(10,33).mod(3)).toMatchObject({x:1,y:0})
				expect(P(10,33).mod(0,-0)).toMatchObject({x:NaN,y:NaN})
				expect(P(5,-6).mod(3)).toMatchObject({x:2,y:-0})
				expect(P(0,-1).mod(3)).toMatchObject({x:0,y:-1})
				expect(P(0,-1).mod([3,2])).toMatchObject({x:0,y:-1})
				expect(P(0,-1).mod({x:3,y:2})).toMatchObject({x:0,y:-1})
				expect(P(0,1).mod({y:2})).toMatchObject({x:NaN,y:1})
				expect(P(1,-1).mod({y:2})).toMatchObject({x:NaN,y:-1})
				expect(P(10,33).mod([3])).toMatchObject({x:1,y:NaN})
				expect(P(10,33).mod([undefined,5])).toMatchObject({x:NaN,y:3})
				expect(P(10,33).mod([])).toMatchObject({x:NaN,y:NaN})
				expect(P(10,33).mod()).toMatchObject({x:10,y:33})
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
				expect(P(10,33).pow(1)).toMatchObject({x:10,y:33})
				expect(P(10,33).pow(3)).toMatchObject({x:1e3,y:35937})
				expect(P(10,33).pow(0,-0)).toMatchObject({x: 1,y:1})
				expect(P(10,33).pow(-1)).toMatchObject({x:1/10,y:1/33})
				expect(P(10,0).pow(-2)).toMatchObject({x:1/100,y:Infinity})
				expect(P(9,33).pow({x:1/2,y:2})).toMatchObject({x:3,y:1089})
				expect(P(9,33).pow({y:2})).toMatchObject({x:9,y:1089})
				expect(P(9,33).pow([1/2,2])).toMatchObject({x:3,y:1089})
				expect(P(10,33).pow([1,1])).toMatchObject({x:10,y:33})
				expect(P(10,36).pow([undefined,1/2])).toMatchObject({x:10,y:6})
				expect(P(10,33).pow([])).toMatchObject({x:10,y:33})
				expect(P(10,33).pow()).toMatchObject({x:10,y:33})
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
				expect(P(1.6,1.1).ceil()).toMatchObject({x:2,y:2})
			})
			it('round', () => {
				expect(P(1.6,1.1).round()).toMatchObject({x:2,y:1})
			})
			it('floor', () => {
				expect(P(1.6,1.1).floor()).toMatchObject({x:1,y:1})
			})
			it('trunc', () => {
				expect(P(1.6,1.1).trunc()).toMatchObject({x:1,y:1})
				expect(P(1.61,1.17).trunc(1)).toMatchObject({x:1.6,y:1.1})
				expect(P(1.62357,1.1234).trunc(3)).toMatchObject({x:1.623,y:1.123})
			})
			it('sq', () => {
				expect(P(2,3).sq()).toMatchObject({x:4,y:9})
			})
			it('sqrt', () => {
				expect(P(4,9).sqrt()).toMatchObject({x:2,y:3})
			})
			it('cb', () => {
				expect(P(2,3).cb()).toMatchObject({x:8,y:27})
			})
			it('cbrt', () => {
				expect(P(8,27).cbrt()).toMatchObject({x:2,y:3})
			})
			it('abs', () => {
				expect(P(-2,3).abs()).toMatchObject({x:2,y:3})
				expect(P(-2).abs()).toMatchObject({x:2,y:2})
			})
			it('inv', () => {
				expect(P(2).inv()).toMatchObject({x:.5,y:.5})
				expect(P(-2).inv()).toMatchObject({x:-.5,y:-.5})
				expect(P(10,-66).inv()).toMatchObject({x:1/10,y:-1/66})
				expect(P(1/3).inv()).toMatchObject({x:3,y:3})
				expect(P(1/3,-4/7).inv()).toMatchObject({x:3,y:-7/4})
			})
			it('between', () => {
				expect(P(2).between(5)).toMatchObject({x:3.5,y:3.5})
				expect(P(2).between(5, 0)).toMatchObject({x:2,y:2})
				expect(P(2).between(5, 1)).toMatchObject({x:5,y:5})
				expect(P(10,-66).between([-100,150])).toMatchObject({x:65,y:42})
			})
		})
	})

	describe('boolean methods', () => {
		it('is', () => {
			expect(P(1,1).is([],1/2)).toBe(false)
			expect(P(1,1).is([],5)).toBe(true)
		})
		it('check', () => {
			expect(P(1,1).check(p=>p.x>2)).toBe(false)
			expect(P(12,15).check(p=>p.mod(2).x===0&&p.mod(2).y===0)).toBe(false)
			expect(P(12,15).check(p=>p.mod(2).x===0&&p.mod(2).y===1)).toBe(true)
			expect(P(12,15).check(p=>p.pow(0).x===1&&p.mod(2).y===1)).toBe(true)
		})
	})

	describe('utils methods', () => {
		it('clone', () => {
			const p = P(6,8)
			const newP = p.clone()
			expect(Object.is(p, newP)).toBe(false)
			expect(p).toMatchObject(newP)
		})

		it('copy', () => {
			const p = P(6,8)
			const otherP = P()
			otherP.copy(p)
			expect(Object.is(p, otherP)).toBe(false)
			expect(p).toMatchObject(otherP)
		})

		it('getSum', () => {
			expect(P(-19.5, 22.2).getSum()).toStrictEqual(-19.5+22.2)
			expect(P(1289).getSum()).toStrictEqual(1289*2)
			expect(P(-1289).getSum()).toStrictEqual(-1289*2)
			expect(P([undefined,20]).getSum()).toStrictEqual(20)
			expect(P({x:-2}).getSum()).toStrictEqual(-2)
		})

		it('getDistSq', () => {
			expect(P(5).getDistSq([5,4])).toStrictEqual((5-5)**2+(5-4)**2)
			expect(P({y:29}).getDistSq([-2,4])).toStrictEqual((0-(-2))**2+(29-4)**2)
		})

		it('getDist', () => {
			expect(P(5).getDist([5,4])).toStrictEqual(((5-5)**2+(5-4)**2)**(1/2))
			expect(P({y:29}).getDist([-2,4])).toStrictEqual(((0-(-2))**2+(29-4)**2)**(1/2))
		})

		describe('random', () => {
			it('instance', () => {
				expect(
					Array(1000).fill(P(Infinity)).map(() => P(Infinity,Infinity).random(100))
						.every(p=>0<=p.x&&p.x<=100&&0<=p.y&&p.y<=100)
				).toBe(true)
				expect(
					Array(1000).fill(P(Infinity)).map(() => P(Infinity,Infinity).random(-100,100))
						.every(p=>-100<=p.x&&p.x<=100&&-100<=p.y&&p.y<=100)
				).toBe(true)
				expect(
					Array(1000).fill(P(Infinity)).map(() => P(Infinity,Infinity).random(50,350))
						.every(p=>50<=p.x&&p.x<=350&&50<=p.y&&p.y<=350)
				).toBe(true)
			})
			it('static', () => {
				expect(
					Array(1000).fill(P(Infinity)).map(() => P.random(100))
						.every(p=>0<=p.x&&p.x<=100&&0<=p.y&&p.y<=100)
				).toBe(true)
				expect(
					Array(1000).fill(P(Infinity)).map(() => P.random(-100,100))
						.every(p=>-100<=p.x&&p.x<=100&&-100<=p.y&&p.y<=100)
				).toBe(true)
				expect(
					Array(1000).fill(P(Infinity)).map(() => P.random(50,350))
						.every(p=>50<=p.x&&p.x<=350&&50<=p.y&&p.y<=350)
				).toBe(true)
			})
		})

		describe('min', () => {
			it('instance', () => {
				expect(P(1).min(2,3,4,5,6,7)).toMatchObject({x:1,y:1})
				expect(P([29,2]).min([592,2],[undefined,8],4,296,27,49,[237,2],2)).toMatchObject({x:2,y:2})
			})
			it('static', () => {
				expect(P.min(1,2,3,4,5,6,7)).toMatchObject({x:1,y:1})
				expect(P.min([29,2],[592,2],[undefined,8],4,296,27,49,[237,2],2)).toMatchObject({x:2,y:2})
			})
		})
		describe('max', () => {
			it('instance', () => {
				expect(P(1).max(2,3,4,5,6,7)).toMatchObject({x:7,y:7})
				expect(P([29,2]).max([592,2],[undefined,8],4,296,27,49,[237,2],2)).toMatchObject({x:592,y:296})
			})
			it('static', () => {
				expect(P.max(1,2,3,4,5,6,7)).toMatchObject({x:7,y:7})
				expect(P.max([29,2],[592,2],[undefined,8],4,296,27,49,[237,2],2)).toMatchObject({x:592,y:296})
			})
		})
		
		describe('clamp', () => {
			it('should work with a `max`', () => {
				expect(P(5).clamp(3)).toMatchObject({x:3,y:3});
				expect(P(1).clamp(3)).toMatchObject({x:1,y:1});
			});
		
			it('should clamp numbers', () => {
				expect(P(10, -10.2).clamp(-5,5.5)).toMatchObject({x:5.5,y:-5});
				expect(P(Infinity, -Infinity).clamp(-5,5)).toMatchObject({x:5,y:-5});
			});
		
			it('should not alter numbers in range', () => {
				expect(P(-4, 4).clamp(-5,5)).toMatchObject({x:-4,y:4});
				expect(P(-5.5, 4.5).clamp(-5.6, 5.6)).toMatchObject({x:-5.5,y:4.5});
			});
		
			it('should not alter `0/-0` in range', () => {
				expect(1 / P(0).clamp(-5,5).x).toStrictEqual(Infinity);
				expect(1 / P(-0).clamp(-5, 5).x).toStrictEqual(-Infinity);
			});
		
			it('should clamp to `0/-0`', () => {
				expect(1 / P(-10).clamp(0, 5).x).toStrictEqual(Infinity);
				expect(1 / P(-10).clamp(-0, 5).x).toStrictEqual(-Infinity);
			});
		
			it('should return `NaN` when `number` is `NaN`', () => {
				expect(P(NaN).clamp(-5, 5)).toMatchObject({x:NaN,y:NaN});
			});
		
			it('should coerce `min` and `max` of `NaN` to `0`', () => {
				expect(P(1).clamp(-5, NaN)).toMatchObject({x:0,y:0});
				expect(P(-1).clamp(NaN, 5)).toMatchObject({x:0,y:0});
			});
		});
	})
})
