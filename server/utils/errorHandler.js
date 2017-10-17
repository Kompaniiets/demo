const errorHandler = require('express-error-handler');
const loggerObj = require('../helpers/loggingFunctions');

function Error(err, res) {
    loggerObj.logHandle(err);
    res.status(err.status).send(err);
}

module.exports = (app) => {
    return [
        errorHandler({
            handlers: {
                400: function err400(err, req, res, next) {
                    if (!err.message) {
                        err.message = 'Bad Request';
                    }
                    Error(err, res);
                },
                401: function err401(err, req, res, next) {
                    if (!err.message) {
                        err.message = 'Unauthorized';
                    }
                    Error(err, res);
                },
                402: function err402(err, req, res, next) {
                    if (!err.message) {
                        err.message = 'Payment Required';
                    }
                    Error(err, res);
                },
                403: function err403(err, req, res, next) {
                    if (!err.message) {
                        err.message = 'Forbidden';
                    }
                    Error(err, res);
                },
                404: function err404(err, req, res, next) {
                    if (!err.message) {
                        err.message = 'Not Found';
                    }
                    Error(err, res);
                },
                405: function err405(err, req, res, next) {
                    if (!err.message) {
                        err.message = 'Method Not Allowed';
                    }
                    Error(err, res);
                },
                406: function err406(err, req, res, next) {
                    if (!err.message) {
                        err.message = 'Not Acceptable';
                    }
                    Error(err, res);
                },
                407: function err407(err, req, res, next) {
                    if (!err.message) {
                        err.message = 'Proxy Authentication Required';
                    }
                    Error(err, res);
                },
                408: function err408(err, req, res, next) {
                    if (!err.message) {
                        err.message = 'Request Timeout';
                    }
                    Error(err, res);
                },
                409: function err409(err, req, res, next) {
                    if (!err.message) {
                        err.message = 'Conflict';
                    }
                    Error(err, res);
                },
                410: function err410(err, req, res, next) {
                    if (!err.message) {
                        err.message = 'Gone';
                    }
                    Error(err, res);
                },
                411: function err411(err, req, res, next) {
                    if (!err.message) {
                        err.message = 'Length Required';
                    }
                    Error(err, res);
                },
                412: function err412(err, req, res, next) {
                    if (!err.message) {
                        err.message = 'Precondition Failed';
                    }
                    Error(err, res);
                },
                413: function err413(err, req, res, next) {
                    if (!err.message) {
                        err.message = 'Request Entity Too Large';
                    }
                    Error(err, res);
                },
                414: function err414(err, req, res, next) {
                    if (!err.message) {
                        err.message = 'Request-URI Too Long';
                    }
                    Error(err, res);
                },
                415: function err415(err, req, res, next) {
                    if (!err.message) {
                        err.message = 'Unsupported Media Type';
                    }
                    Error(err, res);
                },
                416: function err416(err, req, res, next) {
                    if (!err.message) {
                        err.message = 'Requested Range Not Satisfiable';
                    }
                    Error(err, res);
                },
                417: function err417(err, req, res, next) {
                    if (!err.message) {
                        err.message = 'Expectation Failed';
                    }
                    Error(err, res);
                },
                500: function err500(err, req, res, next) {
                    if (!err.message) {
                        err.message = 'Internal Server Error';
                    }
                    Error(err, res);
                },
                501: function err500(err, req, res, next) {
                    if (!err.message) {
                        err.message = 'Not Implemented';
                    }
                    Error(err, res);
                },
                502: function err500(err, req, res, next) {
                    if (!err.message) {
                        err.message = 'Bad Gateway';
                    }
                    Error(err, res);
                },
                503: function err500(err, req, res, next) {
                    if (!err.message) {
                        err.message = 'Service Unavailable';
                    }
                    Error(err, res);
                },
                504: function err500(err, req, res, next) {
                    if (!err.message) {
                        err.message = 'Gateway Timeout';
                    }
                    Error(err, res);
                },
                505: function err500(err, req, res, next) {
                    if (!err.message) {
                        err.message = 'HTTP Version Not Supported';
                    }
                    Error(err, res);
                },
            },
        })];
};