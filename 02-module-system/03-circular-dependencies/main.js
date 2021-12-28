const moduleA = require('./moduleA')
const moduleB = require('./moduleB')

console.log(`Module A : ${JSON.stringify(moduleA, null, 2)}`)
console.log(`Module B : ${JSON.stringify(moduleB, null, 2)}`)