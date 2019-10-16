# String Offset
### Split a string into substrings with overlap offsets

<a href="https://travis-ci.org/uditalias/string-offset"><img src="https://travis-ci.org/uditalias/string-offset.svg?branch=master" alt="npm version" height="18"></a> <a href="https://badge.fury.io/js/%40udidu%2Fstring-offset"><img src="https://badge.fury.io/js/%40udidu%2Fstring-offset.svg" alt="npm version" height="18"></a> <img src="https://img.shields.io/bundlephobia/minzip/@udidu/string-offset" alt="npm bundle size" height="18">

<h4>Install</h4>

`npm i --save @udidu/string-offset`

<h4>Usage</h4>

```typescript
const split = stringOffset("option1", [
    { offset: 0, length: 5 },
    { offset: 2, length: 5 },
    { offset: 1, length: 3 },
]);

expect(split).toMatchObject([
    "o", "p", "ti", "o", "n1"
]);
```

---

<h4>License</h4>

The MIT License (MIT)

Copyright (c) 2019 Udi Talias

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.