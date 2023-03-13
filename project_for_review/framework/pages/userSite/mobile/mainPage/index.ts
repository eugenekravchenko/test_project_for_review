import {BasePageInterface, TextElement} from '../../../../../lib';

class UserMobileMainPage extends BasePageInterface {
    text: TextElement;
    constructor() {
        super('body', 'Member Mobile Main Page');
        this.text = this.initChild(TextElement, '.text', 'Text');
    }
}

export {
    UserMobileMainPage
};
