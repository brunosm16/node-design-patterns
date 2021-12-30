import fs from 'fs'

const originalReadFile = fs.readFile

let mockedResponse = null

function mockReadFile(path, cb) {
    setImmediate(() => {
        cb(null, mockedResponse)
    })
}


// mockEnable
export function mockEnable(response) {
    mockedResponse = response
    fs.readFile = mockReadFile
}

export function mockDisable() {
    fs.readFile = originalReadFile
}