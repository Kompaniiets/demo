const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

class Crypt {

    static hashPassword(password) {
        return bcrypt.hashSync(password, salt);
    }

    static comparePassword(password, hash) {
        return bcrypt.compareSync(password, hash);
    }
}

module.exports = Crypt;
