const Models = require('../models');
const hash = require('../helpers/hashPassword');
const session = require('./session');

class Services {

    static registerUser(userInfo) {
        const responseData = {};

        return Models.users.findOrCreate({
            where: {
                $or: {
                    email: userInfo.email,
                    username: userInfo.username,
                },
            },
            defaults: {
                email: userInfo.email,
                username: userInfo.username,
                password: hash.hashPassword(userInfo.password),
            },
        })
            .spread((user, created) => {
                if (!created) {
                    const err = new Error();
                    err.status = 409;
                    err.message = 'User already exist!';
                    err.email = user.email;
                    err.username = user.username;
                    return Promise.reject(err);
                }

                responseData.user = user.dataValues;
                delete responseData.user.password;

                responseData.session = session(user.id);

                return Promise.resolve(responseData);
            });
    }
}

module.exports = Services;
