import {BasePageInterface, ButtonElement, InputElement} from '../../../../../lib';

class UserDesktopLoginPage extends BasePageInterface {
    loginField: InputElement;
    passwordField: InputElement;
    buttonLogin: ButtonElement;
    constructor() {
        super('body', 'User Desktop Login Page');
        this.loginField = this.initChild(InputElement, '.username', 'Login Field');
        this.passwordField = this.initChild(InputElement, '[for=password]', 'Password Field');
        this.buttonLogin = this.initChild(ButtonElement, '#submit', 'Login Button');
    }
}

export {
    UserDesktopLoginPage
};
