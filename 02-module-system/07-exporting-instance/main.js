const dbLogger = require('./logger')

dbLogger.log('fake postgreSQL logger')
dbLogger.log('fake postgreSQL logger')

// creating a new instance using the constructor

const customLogger = new dbLogger.constructor('custom logger')

customLogger.log('my custom logger')