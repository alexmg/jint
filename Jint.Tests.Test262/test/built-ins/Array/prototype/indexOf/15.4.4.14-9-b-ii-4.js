// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.indexof
es5id: 15.4.4.14-9-b-ii-4
description: Array.prototype.indexOf - search element is NaN
---*/

assert.sameValue([+NaN, NaN, -NaN].indexOf(NaN), -1, '[+NaN, NaN, -NaN].indexOf(NaN)');
