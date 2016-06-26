node-fontforge
================================================================================

A Node.js wrapper for [FontForge](https://fontforge.github.io)

[![Build Status][travis-image]][travis-url] [![Build Status][appveyor-image]][appveyor-url] 

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

[travis-url]: http://travis-ci.org/sgen/node-fontforge
[travis-image]: https://secure.travis-ci.org/sgen/node-fontforge.svg?branch=master

[appveyor-url]: http://ci.appveyor.com/project/sgen/node-fontforge
[appveyor-image]: http://ci.appveyor.com/project/status/sgen/node-fontforge/branch/master?svg=true
