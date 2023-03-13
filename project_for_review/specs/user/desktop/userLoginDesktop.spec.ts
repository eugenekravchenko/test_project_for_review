import {provider} from '../../../framework/pages'
import {Scope} from '../../../support/enums/scope.enums'
import {browserInterface as browser} from '../../../lib';
import {EnvironmentsUrl} from '../../../support/data/environmentsUrl'
import {testRail} from '../../../support/hooks/hooks'
import {updateUser} from '../../../framework/flows/preconditionFlow';
import {credentials} from '../../../support/data/credentials';
import {userDesktopLogin} from '../../../framework/flows/siteFlow'
import {getUserInfo} from "../../../support/api";
import {DB_getUserData} from "../../../support/db";

const userDesktopMainPage = provider.pages.userDesktopMainPage();

describe(`Authorization ${Scope.USER}`, function() {
    before(async function(){
        await browser.get(EnvironmentsUrl.desktop.userSite);
    });
    after(async function(){
        await testRail();
    });
    it('As a desktop user I can login', async function() {
        const user = credentials.user
        allure.step('User Desktop Precondition', async function() {
            await updateUser(user.login, 'user')
            let getUserInfoResponse = await getUserInfo(user.login);
            expect(getUserInfoResponse.userType).to.equal('user');
        });
        allure.step('User Desktop Login', async function() {
            await userDesktopLogin(user.login, user.password);
            await browser.sleep(1000);
            expect(await userDesktopMainPage.content.text.getText()).to.equal('Hello, user desktop');
            allure.step('Check db', async function() {
                let DB_getUserDataResponse = await DB_getUserData(user.login);
                expect(DB_getUserDataResponse.login).to.equal(2);
            });
        });
    });
});
