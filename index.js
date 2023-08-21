'use strict';

var path = require('path');
var fs = require('fs');

function greet() {
    return "Hello World!";
}

function main() {
    const hello = greet();
    console.log(hello);
    console.log("PACKAGE.JSON IN ROOT? ", fs.existsSync(path.resolve(process.cwd(), "package.json")));
}

module.exports = main;
