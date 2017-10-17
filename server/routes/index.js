const apiRouter = require('./api');
const mainRoutes = require('./main');
const generalRouter = require('./general');

module.exports = {
    api: apiRouter,
    main: mainRoutes,
    general: generalRouter,
};
