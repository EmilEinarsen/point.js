const { P } = require('../../dist/lib/es5');

describe('P', () => {
	describe('Constructor & set', () => {
		expect(Reflect.getPrototypeOf(P(4)) === P.prototype).toBe(true)
		expect(P(4).constructor === P).toBe(true)
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
		})
	})

	describe('Arithmetic methods', () => {
		describe('Addition, add', () => {
			let isWorking = false
			it('instance', () => {
				expect(P(10,33).add(1)).toMatchObject({x:11,y:34})
				expect(P(10,33).add(-1)).toMatchObject({x:9,y:32})
				expect(P(10,33).add(-1, 10)).toMatchObject({x:9,y:43})
				expect(P(10,33).add({x:0,y:2})).toMatchObject({x:10,y:35})
				expect(P(10,33).add({x:2})).toMatchObject({x:12,y:33})
				expect(P(10,33).add([0,2])).toMatchObject({x:10,y:35})
				expect(P(10,33).add([undefined,2])).toMatchObject({x:10,y:35})
				expect(P(10,33).add()).toMatchObject({x:10,y:33})
				expect(P(10,33).add([1])).toMatchObject({x:11,y:33})
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
				expect(P(10,33).sub(-1, 10)).toMatchObject({x:11,y:23})
				expect(P(10,33).sub({x:0,y:2})).toMatchObject({x:10,y:31})
				expect(P(10,33).sub({y:2})).toMatchObject({x:10,y:31})
				expect(P(10,33).sub([0,2])).toMatchObject({x:10,y:31})
				expect(P(10,33).sub([undefined,2])).toMatchObject({x:10,y:31})
				expect(P(10,33).sub()).toMatchObject({x:10,y:33})
				expect(P(10,33).sub([1])).toMatchObject({x:9,y:33})
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
				expect(P(10,33).mult(-2, 10)).toMatchObject({x:-20,y:330})
				expect(P(10,33).mult({x:1/2,y:2})).toMatchObject({x:5,y:66})
				expect(P(10,33).mult({x:1/2})).toMatchObject({x:5,y:33})
				expect(P(10,33).mult([1/2,2])).toMatchObject({x:5,y:66})
				expect(P(10,33).mult([1/2])).toMatchObject({x:5,y:33})
				expect(P(10,33).mult([undefined,1/2])).toMatchObject({x:10,y:16.5})
				expect(P(10,33).mult()).toMatchObject({x:10,y:33})
				expect(P(10,33).mult([1])).toMatchObject({x:10,y:33})
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
				isWorking = true
				expect(P(10,33).div(1)).toMatchObject({x:10,y:33})
				expect(P(10,33).div(3)).toMatchObject({x:10/3,y:11})
				expect(P(10,33).div(0,-0)).toMatchObject({x:Infinity,y:-Infinity})
				expect(P(10,33).div(-1)).toMatchObject({x:-10,y:-33})
				expect(P(10,33).div(-2, 10)).toMatchObject({x:-5,y:3.3})
				expect(P(10,33).div({x:1/2,y:2})).toMatchObject({x:20,y:16.5})
				expect(P(10,33).div({x:1/2})).toMatchObject({x:20,y:33})
				expect(P(10,33).div([1/2,2])).toMatchObject({x:20,y:16.5})
				expect(P(10,33).div([1/2])).toMatchObject({x:20,y:33})
				expect(P(10,33).div([undefined,1/2])).toMatchObject({x:10,y:66})
				expect(P(10,33).div()).toMatchObject({x:10,y:33})
				expect(P(10,33).div([2])).toMatchObject({x:5,y:33})
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
				isWorking = true
				expect(P(10,33).mod(1)).toMatchObject({x:0,y:0})
				expect(P(10,33).mod(3)).toMatchObject({x:1,y:0})
				expect(P(10,33).mod(0,-0)).toMatchObject({x:NaN,y:NaN})
				expect(P(5,-6).mod(3)).toMatchObject({x:2,y:0})
				expect(P(0,-1).mod(3)).toMatchObject({x:0,y:2})
				expect(P(0,-1).mod([3,2])).toMatchObject({x:0,y:1})
				expect(P(0,-1).mod({x:3,y:2})).toMatchObject({x:0,y:1})
				expect(P(0,-1).mod({y:2})).toMatchObject({x:NaN,y:1})
				expect(P(1,-1).mod({y:2})).toMatchObject({x:0,y:1})
				expect(P(10,33).mod([3])).toMatchObject({x:1,y:0})
				expect(P(10,33).mod([undefined,5])).toMatchObject({x:0,y:3})
				expect(P(10,33).mod([])).toMatchObject({x:0,y:0})
				expect(P(10,33).mod()).toMatchObject({x:10,y:33})
			})
			it('static', () => {
				if(!isWorking) throw('Instance method failed')
				expect(P.mod([1,2],[2,-7])).toMatchObject({x:1,y:-5})
				expect(P.mod([1,2],[2,-7],[2,-7],[2,-7],[2,-7],[2,-7])).toMatchObject({x:1,y:-5})
			})
		})

		describe('Power, pow', () => {
			let isWorking = false
			it('instance', () => {
				isWorking = true
				expect(P(10,33).pow(1)).toMatchObject({x:10,y:33})
				expect(P(10,33).pow(3)).toMatchObject({x:1e3,y:35937})
				expect(P(10,33).pow(0,-0)).toMatchObject({x: 1,y:1})
				expect(P(10,33).pow(-1)).toMatchObject({x:1/10,y:1/33})
				expect(P(10,0).pow(-2, 10)).toMatchObject({x:1/100,y:0})
				expect(P(9,33).pow({x:1/2,y:2})).toMatchObject({x:3,y:1089})
				expect(P(9,33).pow({y:2})).toMatchObject({x:9,y:1089})
				expect(P(9,33).pow([1/2,2])).toMatchObject({x:3,y:1089})
				expect(P(10,33).pow([1,1])).toMatchObject({x:10,y:33})
				expect(P(10,36).pow([undefined,1/2])).toMatchObject({x:10,y:6})
				expect(P(10,33).pow([])).toMatchObject({x:10,y:33})
				expect(P(10,33).pow()).toMatchObject({x:10,y:33})
			})
			it('static', () => {
				if(!isWorking) throw('Instance method failed')
				expect(P.pow([1,2],[2,-2])).toMatchObject({x:1,y:1/4})
				expect(P.pow([1,2],[2,-2],[2,-2],[2,-2])).toMatchObject({x:1,y:1/(16*16)})
			})
		})

		describe('Utils', () => {
			it('ceil', () => {
				expect(P(1.6,1.1).ceil().toArray()).toMatchObject([2,2])
			})
			it('round', () => {
				expect(P(1.6,1.1).round().toArray()).toMatchObject([2,1])
			})
			it('floor', () => {
				expect(P(1.6,1.1).floor().toArray()).toMatchObject([1,1])
			})
			it('trunc', () => {
				expect(P(1.6,1.1).trunc().toArray()).toMatchObject([1,1])
				expect(P(1.61,1.17).trunc(1).toArray()).toMatchObject([1.6,1.1])
				expect(P(1.62357,1.1234).trunc(3).toArray()).toMatchObject([1.623,1.123])
			})
			it('sq', () => {
				expect(P(2,3).sq().toArray()).toMatchObject([4,9])
			})
			it('sqrt', () => {
				expect(P(4,9).sqrt().toArray()).toMatchObject([2,3])
			})
			it('cb', () => {
				expect(P(2,3).cb().toArray()).toMatchObject([8,27])
			})
			it('cbrt', () => {
				expect(P(8,27).cbrt().toArray()).toMatchObject([2,3])
			})
			it('abs', () => {
				expect(P(-2,3).abs().toArray()).toMatchObject([2,3])
				expect(P(-2).abs().toArray()).toMatchObject([2,2])
			})
			it('inverse', () => {
				expect(P(2).inverse().toArray()).toMatchObject([1/2,1/2])
				expect(P(-2).inverse().toArray()).toMatchObject([-1/2,-1/2])
				expect(P(10,-66).inverse().toArray()).toMatchObject([1/10,-1/66])
				expect(P(1/3).inverse().toArray()).toMatchObject([3,3])
				expect(P(1/3,-4/7).inverse().toArray()).toMatchObject([3,-7/4])
			})
		})
	})

	describe('boolean methods', () => {
		it('is', () => {
			expect(P(-46,9).is(45,9)).toBe(false)
			expect(P(-46,9).is({x:4,y:-200})).toBe(false)
			expect(P(-46,9).is(-46)).toBe(false)
			expect(P(-46,9).is(-46,9)).toBe(true)
			expect(P(-46,9).is({x:-46,y:9})).toBe(true)
			expect(P(9,9).is(9)).toBe(true)
		})
		it('has', () => {
			expect(P(-46,9).has(45,9)).toBe(true)
			expect(P(-46,9).has({x:4,y:-200})).toBe(false)
			expect(P(-46,9).has(-46)).toBe(true)
			expect(P(-46,9).has(-46,9)).toBe(true)
			expect(P(-46,9).has({x:-46,y:9})).toBe(true)
			expect(P(9,9).has(9)).toBe(true)
		})
		it('isZero', () => {
			expect(P(1,1).isZero()).toBe(false)
			expect(P(1).isZero()).toBe(false)
			expect(P([1]).isZero()).toBe(false)
			expect(P([1,1]).isZero()).toBe(false)
			expect(P({x:1}).isZero()).toBe(false)
			expect(P({x:1,y:1}).isZero()).toBe(false)
			expect(P().isZero()).toBe(true)
			expect(P(0).isZero()).toBe(true)
			expect(P(0,0).isZero()).toBe(true)
		})
		it('hasZero', () => {
			expect(P(1,1).hasZero()).toBe(false)
			expect(P(1).hasZero()).toBe(false)
			expect(P([1]).hasZero()).toBe(true)
			expect(P([1,1]).hasZero()).toBe(false)
			expect(P({x:1}).hasZero()).toBe(true)
			expect(P({x:1,y:1}).hasZero()).toBe(false)
			expect(P().hasZero()).toBe(true)
			expect(P(0).hasZero()).toBe(true)
			expect(P(0,0).hasZero()).toBe(true)
		})
		it('isClose', () => {
			expect(P(1,1).isClose([],1/2)).toBe(false)
			expect(P(1,1).isClose([],5)).toBe(true)
		})
		it('check', () => {
			expect(P(1,1).check((a,b)=>a>b,2)).toMatchObject([false,false])
			expect(P(1/2,1).check((a,b)=>a<=b,1)).toMatchObject([true,true])
			expect(P(1,1).check((a,b)=>a>b,[2])).toMatchObject([false,false])
			expect(P(1/2,1).check((a,b)=>a<=b,[1,2])).toMatchObject([true,true])
			expect(P(1/2,1).check((a,b)=>a<b,[undefined,2])).toMatchObject([false,true])
			expect(P(1,1).check((a,b)=>a>b,{x:2})).toMatchObject([false,false])
			expect(P(1/2,1).check((a,b)=>a<=b,{x:1,y:2})).toMatchObject([true,true])
			expect(P(1/2,1).check((a,b)=>a<b,{y:2})).toMatchObject([false,true])
			expect(P(1/2,1).check((a,b)=>a<b)).toMatchObject([false])
			expect(P(1/2,1).check((a,b)=>a<b,[])).toMatchObject([false,false])
		})
	})

	describe('utils methods', () => {
		it('clone', () => {
			const p = P(6,8)
			const newP = p.clone()
			p.add(1)
			expect(p).not.toMatchObject(newP)
		})
		it('zero', () => {
			expect(P(-19).zero().toArray()).toMatchObject([0,0])
			expect(P(1289).zero().toArray()).toMatchObject([0,0])
			expect(P([undefined,20]).zero().toArray()).toMatchObject([0,0])
			expect(P({x:-2}).zero().toArray()).toMatchObject([0,0])
		})
		it('one', () => {
			expect(P(-19).one().toArray()).toMatchObject([1,1])
			expect(P(1289).one().toArray()).toMatchObject([1,1])
			expect(P([undefined,20]).one().toArray()).toMatchObject([1,1])
			expect(P({x:-2}).one().toArray()).toMatchObject([1,1])
		})
		it('getSum', () => {
			expect(P(-19).getSum()).toStrictEqual(-38)
			expect(P(1289).getSum()).toStrictEqual(1289*2)
			expect(P([undefined,20]).getSum()).toStrictEqual(20)
			expect(P({x:-2}).getSum()).toStrictEqual(-2)
		})
		it('getDistance', () => {
			expect(P(5).getDistance([5,4])).toStrictEqual(((5-5)**2+(5-4)**2)**(1/2))
			expect(P({y:29}).getDistance([-2,4])).toStrictEqual(((0-(-2))**2+(29-4)**2)**(1/2))
		})
		it('getDistanceSq', () => {
			expect(P(5).getDistanceSq([5,4])).toStrictEqual((5-5)**2+(5-4)**2)
			expect(P({y:29}).getDistanceSq([-2,4])).toStrictEqual((0-(-2))**2+(29-4)**2)
		})
		it('mix', () => {
			expect(P().mix([2,9],2,0).toArray()).toMatchObject([4,0])
			expect(P([5,8]).mix([2,9],2,1/2).toArray()).toMatchObject([14,8.5])
		})
		describe('random', () => {
			it('Instance', () => {
				const arr = Array(1000).map(() => P(2000,-2000).random(100))
				expect(arr).toHaveLength(1000)
				const result = arr.every(p=>(0<=p.x&&p.x<=100)&&(0<=p.y&&p.y<=100))
				expect(result).toBe(true)
			})
			it('Static', () => {
				const arr = Array(1000).map(() => P.random(-50,100))
				expect(arr).toHaveLength(1000)
				const result = arr.every(p=>(-50<=p.x&&p.x<=100)&&(-50<=p.y&&p.y<=100))
				expect(result).toBe(true)
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
		it('map', () => {
			expect(P.max(1,2,3,4,5,6,7).map((a)=>a*2)).toMatchObject([14,14])
			expect(P.max([29,2],[592,2],[undefined,8],4,296,27,49,[237,2],2).map((a)=>a/2)).toMatchObject([296,148])
		})
		it('forEach', () => {
			const p = P.max(1,2,3,4,5,6,[7,2])
			expect(p.forEach((a)=>a===7&&p.mult(10)).toArray()).toMatchObject([70,60])
		})
	})
})
