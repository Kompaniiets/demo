const winston = require('winston');

const logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            handleExceptions: false,
            level: 'info',
            timestamp: true,
            colorize: true,
            json: true,
        }),
    ],
    exceptionHandlers: [
        new (winston.transports.Console)({
            json: true,
            timestamp: true,
        }),
    ],
    exitOnError: false,
});

module.exports = logger;