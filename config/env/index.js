const db = require('./db');
const redis = require('./redis');

const defaults = {
    server: {
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'localhost',
        baseUrl: 'http://localhost:3000',
    },
    jwtKey: 'token-string',
    jwtLifeTime: 1000 * 60 * 60 * 24,
    db,
    redis,
};

module.exports = defaults;