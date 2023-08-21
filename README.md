# HELLO-NPM-TSLINT-ROLLUP

Well that's a mouthfull. This package is a test package. It is supposed to let you know whether `package.json` file is in your current working directory `process.cwd()`. The name references the module bundler `rollup` and my own automation-script [tslint](https://github.com/MarisaCodes/automation-scripts).

`npm install hello-npm-tslint-rollup`

Using `tslint` is entirely optional.

Usage:

```js
// in your_file.js
const main = require("hello-npm-tslint-rollup");

main();

/* prints whether package.json file is in your root directory or not
 */
```

The run `node your_file.js`
