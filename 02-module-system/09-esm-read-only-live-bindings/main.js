import { count, counter } from './counter.js'

console.log(count)

counter()

console.log(count)

// ERROR 
// Can't change variable outside of counter.js scope
count++