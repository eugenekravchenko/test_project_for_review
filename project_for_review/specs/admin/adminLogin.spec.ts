import {provider} from '../../framework/pages'
import {Scope} from '../../support/enums/scope.enums'
import {browserInterface as browser} from '../../lib';
import {EnvironmentsUrl} from '../../support/data/environmentsUrl'
import {testRail} from '../../support/hooks/hooks'
import {updateUser} from '../../framework/flows/preconditionFlow';
import {credentials} from '../../support/data/credentials';
import {adminLogin} from '../../framework/flows/siteFlow'
import {getUserInfo} from "../../support/api";
import {DB_getUserData} from "../../support/db";

const adminMainPage = provider.pages.adminMainPage();

describe(`Authorization ${Scope.ADMIN}`, function() {
    before(async function(){
        await browser.get(EnvironmentsUrl.desktop.adminSite);
    });
    after(async function(){
        await testRail();
    });
    it('As a admin I can login', async function() {
        const user = credentials.admin
        allure.step('Admin Precondition', async function() {
            await updateUser(user.login, 'admin')
            let getUserInfoResponse = await getUserInfo(user.login);
            expect(getUserInfoResponse.userType).to.equal('admin');
        });
        allure.step('Admin Login', async function() {
            await adminLogin(user.login, user.password);
            await browser.sleep(1000);
            expect(await adminMainPage.content.text.getText()).to.equal('Hello, admin');
            allure.step('Check db', async function() {
                let DB_getUserDataResponse = await DB_getUserData(user.login);
                expect(DB_getUserDataResponse.login).to.equal(1);
            });
        });
    });
});
