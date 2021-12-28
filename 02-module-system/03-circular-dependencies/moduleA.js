exports.flag = false

const moduleB = require('./moduleB')

module.exports = {
    moduleB,
    flag: true,
}