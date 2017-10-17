const Models = require('../models');
const hash = require('../helpers/hashPassword');
const session = require('./session');

class Services {
    static loginUser(loginEmail, loginPassword) {
        const responseData = {};

        return Models.users.findOne({
            where: {
                email: loginEmail,
            },
        })
            .then((user) => {
                if ((user !== null) && hash.comparePassword(loginPassword, user.password)) {
                    responseData.user = user.dataValues;
                    delete responseData.user.password;

                    responseData.session = session(user.id);

                    return Promise.resolve(responseData);
                }
                const error = new Error();
                error.message = 'Incorrect email or password!';
                error.status = 401;
                return Promise.reject(error);
            });
    }
}

module.exports = Services;
