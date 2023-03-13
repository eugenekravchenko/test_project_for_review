import {Config} from 'protractor';

const pathToSpecs = require('path').resolve(__dirname, '../../specs');

const config: Config = {
    framework: 'mocha',
    seleniumAddress: 'http://hub:4444/wd/hub',
    logLevel: 'INFO',
    mochaOpts: {
        timeout: 180000,
        reporter: 'allure-mocha'
    },
    specs: [`${pathToSpecs}/**/*.spec.ts`],
    capabilities: {
        browserName: 'chrome'
    }
};

export {
    config
};
