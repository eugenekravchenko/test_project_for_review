import {ElementFinder, $} from 'protractor';

class BaseFragmentInterface {
    private root: ElementFinder;
    private name: string;

    constructor(elementRoot: ElementFinder, name) {
        this.root = elementRoot;
        this.name = name ? name : BaseFragmentInterface.name;
    }

    initChild(childClass, elementSelector, ...args) {
        return new childClass(this.root.$(elementSelector), ...args);
    }
}

export {
    BaseFragmentInterface
};
