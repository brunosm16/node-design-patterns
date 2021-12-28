class Logger {
    constructor(name) {
        this.name = name
    }

    log(message) {
        console.log(`Hello ${this.name}, ${message}`)
    }

    verbose(message) {
        console.log(`Verbose : ${message}`)
    }
}

module.exports = Logger