import { createRequire } from 'module'

const require = createRequire(import.meta.url)

const json = require('./mock-data.json')

console.log(json)