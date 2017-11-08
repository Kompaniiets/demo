const db = require('./db');
const redis = require('./redis');

const defaults = {
    server: {
        port: process.env.PORT || 80,
        host: process.env.HOST || 'ec2-52-15-149-246.us-east-2.compute.amazonaws.com',
        baseUrl: 'http://ec2-52-15-149-246.us-east-2.compute.amazonaws.com:80',
    },
    jwtKey: 'token-string',
    jwtLifeTime: 1000 * 60 * 60 * 24,
    db,
    redis,
};

module.exports = defaults;