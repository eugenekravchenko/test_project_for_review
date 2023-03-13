import {BaseElement} from './base.elements';

class InputElement extends BaseElement {
    constructor(element, id?) {
        super(element, id);
    }

    async clear() {
        await this.root.clear();
    }

    async getText() {
        return this.root.getAttribute('value');
    }
}

export {
    InputElement
};

