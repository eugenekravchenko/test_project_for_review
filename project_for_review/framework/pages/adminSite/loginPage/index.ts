import {
    ButtonElement,
    InputElement,
    BasePageInterface,
} from '../../../../lib';

class AdminLoginPage extends BasePageInterface {
    loginField: InputElement;
    passwordField: InputElement;
    buttonLogin: ButtonElement;
    constructor() {
        super('body', 'Admin Login Page');
        this.loginField = this.initChild(InputElement, '.username', 'Login Field');
        this.passwordField = this.initChild(InputElement, '[for=password]', 'Password Field');
        this.buttonLogin = this.initChild(ButtonElement, '#submit', 'Login Button');
    }
}
export {
    AdminLoginPage
};
