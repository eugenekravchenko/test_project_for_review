import {BasePageInterface, BaseFragmentInterface} from '../../../../lib';
import {TextElement,} from '../../../../lib';

class AdminMainPage extends BasePageInterface {
    header: HeaderFragment;
    content: ContentFragment;
    footer: FooterFragment;
    constructor() {
        super('body', 'Admin Main Page');
        this.header = this.initChild(HeaderFragment, '.header', 'Header');
        this.content = this.initChild(ContentFragment, '.content', 'Content');
        this.footer = this.initChild(FooterFragment, '.footer', 'Footer');
    }
}

class HeaderFragment extends BaseFragmentInterface {
    text: TextElement;
    constructor(rootEl, name = HeaderFragment.name) {
        super(rootEl, name);
        this.text = this.initChild(TextElement, '.text', 'Text');
    }
}

class ContentFragment extends BaseFragmentInterface {
    text: TextElement;
    constructor(rootEl, name = ContentFragment.name) {
        super(rootEl, name);
        this.text = this.initChild(TextElement, '.text', 'Text');
    }
}

class FooterFragment extends BaseFragmentInterface {
    text: TextElement;
    constructor(rootEl, name = FooterFragment.name) {
        super(rootEl, name);
        this.text = this.initChild(TextElement, '.text', 'Text');
    }
}
export {
    AdminMainPage
};
