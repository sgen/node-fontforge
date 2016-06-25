node-fontforge
================================================================================

A Node.js wrapper for [FontForge](https://fontforge.github.io)

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
