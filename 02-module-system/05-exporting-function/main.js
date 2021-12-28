const logger = require('./logger')

// directly calls logger
logger('bruno')

// calls a function that exists in logger
logger.verbose('bruno')