import {provider} from '../../../framework/pages'
import {Scope} from '../../../support/enums/scope.enums'
import {browserInterface as browser} from '../../../lib';
import {EnvironmentsUrl} from '../../../support/data/environmentsUrl'
import {testRail} from '../../../support/hooks/hooks'
import {updateUser} from '../../../framework/flows/preconditionFlow';
import {credentials} from '../../../support/data/credentials';
import {userMobileLogin} from '../../../framework/flows/siteFlow'
import {getUserInfo} from "../../../support/api";
import {DB_getUserData} from "../../../support/db";

const userMobileMainPage = provider.pages.userMobileMainPage();

describe(`Authorization ${Scope.USER}`, function() {
    before(async function(){
        await browser.get(EnvironmentsUrl.mobile.userSite);
    });
    after(async function(){
        await testRail();
    });
    it('As a mobile user I can login', async function() {
        const user = credentials.user
        allure.step('User Mobile Precondition', async function() {
            await updateUser(user.login, 'user')
            let getUserInfoResponse = await getUserInfo(user.login);
            expect(getUserInfoResponse.userType).to.equal('user');
        });
        allure.step('User Mobile Login', async function() {
            await userMobileLogin(user.login, user.password);
            await browser.sleep(1000);
            expect(await userMobileMainPage.content.text.getText()).to.equal('Hello, user mobile');
            allure.step('Check db', async function() {
                let DB_getUserDataResponse = await DB_getUserData(user.login);
                expect(DB_getUserDataResponse.login).to.equal(3);
            });
        });
    });
});
