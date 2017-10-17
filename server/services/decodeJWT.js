const config = require('../../config/index');
const Redis = require('../utils/redis');
const jwt = require('jsonwebtoken');

module.exports = token => new Promise((resolve, reject) => {
    Redis.get(token, (err, res) => {
        if (res === null) {
            return reject(false);
        }
        return resolve(jwt.verify(res, config.jwtKey));
    });
});
