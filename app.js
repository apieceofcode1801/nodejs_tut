// npm - global command, comes with node
// npm --version

// local dependency - use ut only in this particular project
// npm i <package name>

// global dependency - use it in any project
// npm nstall -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)
// npm i <packageName> - install packages

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);