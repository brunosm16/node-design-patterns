import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { createRequire } from 'module'

// const url = createRequire(import.meta.url)


const __fileName = fileURLToPath(import.meta.url)
const __dirName = dirname(__fileName)

console.log(__dirName)
