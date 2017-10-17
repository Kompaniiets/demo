const logger = require('../utils/logger');
const uuidv4 = require('uuid/v4');
const onHeaders = require('on-headers');

const loggerObj = {
    logHandle: function loggerHandle(err, req, res, next) {
        const id = uuidv4();
        logger.error({
            id,
            status: err.status,
            message: err.message,
        });
    },
};
module.exports = loggerObj;