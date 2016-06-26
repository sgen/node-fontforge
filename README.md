node-fontforge
================================================================================

A Node.js wrapper for [FontForge](https://fontforge.github.io)

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Build Status][appveyor-image]][appveyor-url] 

Installation
--------------------------------------------------------------------------------

```bash
npm install fontforge
```
Usage
--------------------------------------------------------------------------------

### getName(src)

getName() returns the name of the font stored in `src`

```javascript
import { getName } from 'fontforge';

// Contains 'MyFont'
const src = 'MyFont-File.ttf';
const name = getName(src);

// Oututs: 'MyFont'
console.log(name);
```

License
--------------------------------------------------------------------------------

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-fontgen
[npm-image]: https://badge.fury.io/js/gulp-fontgen.png

[travis-url]: http://travis-ci.org/sgen/node-fontforge
[travis-image]: https://secure.travis-ci.org/sgen/node-fontforge.svg?branch=master

[appveyor-url]: https://ci.appveyor.com/project/sgen/node-fontforge
[appveyor-image]: https://ci.appveyor.com/api/projects/status/1maaqe7c49opatuo/branch/master?svg=true
