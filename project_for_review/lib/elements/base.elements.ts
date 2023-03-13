import {ElementFinder} from 'protractor';

class BaseElement {
    protected root: ElementFinder;
    protected name: string;
    protected element: ElementFinder;

    constructor(element: ElementFinder, name?: string) {
        this.element = element;
        this.root = element;
        this.name = name ? name : BaseElement.name;
    }

    get elName() {
        return this.name;
    }

    get elRoot() {
        return this.root;
    }

    async click() {
        await this.root.click();
    }

    async getText() {
        return this.root.getText();
    }

    async sendKeys(keys: string) {
        await this.root.sendKeys(keys);
    }

    async isDisplay() {
        return await this.root.isDisplayed();
    }
}

export {
    BaseElement
};
