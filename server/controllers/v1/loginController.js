const Controller = require('../../utils/controller');
const LoginService = require('../../services/loginService');
const validator = require('../../validators');

class LoginController extends Controller {
    constructor(version) {
        super(version);

        this.login = [validator.login, this.loginUser];
    }

    loginUser(req, res, next) {
        LoginService.loginUser(req.body.email, req.body.password)
            .then(result => res.status(200).send(result))
            .catch(next);
    }
}

module.exports = LoginController;
