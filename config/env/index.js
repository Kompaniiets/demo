const db = require('./db');
const redis = require('./redis');

const defaults = {
    server: {
        port: process.env.PORT || 80,
        host: process.env.HOST || 'localhost',
        baseUrl: 'http://localhost:80',
    },
    jwtKey: 'token-string',
    jwtLifeTime: 1000 * 60 * 60 * 24,
    db,
    redis,
};

module.exports = defaults;