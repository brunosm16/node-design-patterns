import fs from 'fs'

import { mockEnable, mockDisable } from './mock-read-file.js'

mockEnable(Buffer.from('Hello from mockEnable'))

fs.readFile('fake-path', (err, data) => {
    if (err) {
        console.log(err)
    }

    console.log(data.toString())
})

mockDisable()