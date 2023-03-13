import {provider} from '../../pages';

const adminLoginPage = provider.pages.adminLoginPage();
const userMobileLoginPage = provider.pages.userMobileLoginPage();
const userDesktopLoginPage = provider.pages.userDesktopLoginPage();

async function adminLogin(username?: string, password?: string) {
    await allure.step('Admin Login', async () => {
        await adminLoginPage.loginField.sendKeys(username);
        await adminLoginPage.passwordField.sendKeys(password);
        await adminLoginPage.buttonLogin.click();
    });
};

async function userMobileLogin(username?: string, password?: string) {
    await allure.step('User Mobile Login', async () => {
        await userMobileLoginPage.loginField.sendKeys(username);
        await userMobileLoginPage.passwordField.sendKeys(password);
        await userMobileLoginPage.buttonLogin.click();
    });
};

async function userDesktopLogin(username?: string, password?: string) {
    await allure.step('User Desktop Login', async () => {
        await userDesktopLoginPage.loginField.sendKeys(username);
        await userDesktopLoginPage.passwordField.sendKeys(password);
        await userDesktopLoginPage.buttonLogin.click();
    });
};
export {
    adminLogin,
    userMobileLogin,
    userDesktopLogin
};
