import {BasePageInterface, TextElement} from '../../../../../lib';

class UserDesktopMainPage extends BasePageInterface {
    text: TextElement;
    constructor() {
        super('body', 'Member Desktop Main Page');
        this.text = this.initChild(TextElement, '.text', 'Text');
    }
}

export {
    UserDesktopMainPage
};
