
# Pointjs

Pointjs is a JavaScript library for point calculations. Pointjs has a general definition of "point" and most methods takes multiple parameters, allowing for complex, interdependent chaining and transformations.

## Install

```sh
npm install -s pointjs
```

## Usage

Pointjs is exported as a named export, under `P`. It can be instanziated with or without using the `new` operation.

```js
import { P } from 'point.js';

const point = P()
// const point = new P()

// Do some math with multiple parameters and different point signatures
point.add([ 20, 33 ], { x: 2, y: 5 }, 5)
// => P { x: 27, y: 43 }

// Can be chained
point.mult(1.5).floor()
// => P { x: 40, y: 64 }
```

## API

<!-- START doctoc -->
<!-- END doctoc -->

