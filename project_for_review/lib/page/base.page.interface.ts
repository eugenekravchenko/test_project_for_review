import {ElementFinder, $} from 'protractor';

class BasePageInterface {
    private root: ElementFinder;
    private name: string;

    constructor(element: string, name) {
        this.root = $(element);
        this.name = name ? name : BasePageInterface.name;
    }

    initChild(childClass, elementSelector, ...args) {
        return new childClass(this.root.$(elementSelector), ...args);
    }
}

export {
    BasePageInterface
};
