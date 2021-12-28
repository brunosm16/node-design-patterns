const Logger = require('./logger')

const sqlLogger = new Logger('Sql Logger')

sqlLogger.log('testing')

const noSqlLogger = new Logger('NoSql Logger')

noSqlLogger.verbose('testing')