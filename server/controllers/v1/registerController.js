const Controller = require('../../utils/controller');
const RegisterService = require('../../services/registerService');
const validator = require('../../validators');

class RegisterController extends Controller {
    constructor(version) {
        super(version);

        this.register = [validator.register, this.registerUser];
    }

    registerUser(req, res, next) {
        RegisterService.registerUser(req.body)
            .then(result => res.status(201).send(result))
            .catch(next);
    }
}

module.exports = RegisterController;
