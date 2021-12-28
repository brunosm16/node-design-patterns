exports.flag = false

const moduleA = require('./moduleA')

module.exports = {
    moduleA,
    flag: true,
}