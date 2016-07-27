Demo: [Niqatless.io] (https://odna.github.io/niqatless/)

# Implementation
## Javascript
### NodeJS
#### Installation
```
npm install niqatless
```
#### Usage
```javascript
var niqatless = require('niqatless');
var text = 'هذا نص سيتحول إلى كتابة من غير تنقيط'
var dotless = niqatless.render(text);
console.log(dotless);
// output: هدا ٮص سىٮحول الى كٮاٮه مں عىر ٮٮٯىط
```
