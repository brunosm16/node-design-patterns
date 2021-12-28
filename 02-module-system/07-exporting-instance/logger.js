class Logger {
    constructor(name) {
        this.counter = 0
        this.name = name
    }

    log(message) {
        this.counter++
        console.log(`[${this.name}] - ${message} `)
        console.log(`counter : ${this.counter}`)
    }
}

module.exports = new Logger('DEFAULT LOGGER')