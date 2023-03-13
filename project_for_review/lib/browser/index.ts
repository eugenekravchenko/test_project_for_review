import {browser} from 'protractor';

class Browser {
    async get(url) {
        await browser.get(url);
    }

    async sleep(ms) {
        await browser.sleep(ms);
    }
}

const browserInterface = new Browser();

export {
    browserInterface
};
