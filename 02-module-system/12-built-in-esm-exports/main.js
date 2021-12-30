import fs, { readFileSync } from 'fs'
import { syncBuiltinESMExports } from 'module'

fs.readFileSync = () => Buffer.from('hello from modified readFileSync')

syncBuiltinESMExports()

console.log(fs.readFileSync === readFileSync)
