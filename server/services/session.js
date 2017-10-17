const config = require('../../config/index');
const jwt = require('jsonwebtoken');

module.exports = (userId) => {
    const accessToken = jwt.sign({
        id: userId,
        iat: new Date().getTime(),
    }, config.jwtKey, {
        expiresIn: config.jwtLifeTime,
    });

    const refreshToken = jwt.sign({ id: userId }, config.jwtKey);

    const tokenTime = () => {
        const time = new Date().getTime() + config.jwtLifeTime;
        // Offset in milliseconds
        const tzOffs = (new Date()).getTimezoneOffset() * 60000;
        // Gets rid of the trailing Z
        return (new Date(time - tzOffs)).toISOString().slice(0, -1);
    };

    return {
        accessToken,
        refreshToken,
        expiresAt: tokenTime(),
    };
};
