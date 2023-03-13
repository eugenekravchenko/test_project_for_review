import {UserDesktopLoginPage, UserDesktopMainPage, UserMobileLoginPage, UserMobileMainPage} from './userSite';
import {AdminLoginPage, AdminMainPage} from './adminSite';

export const provider: any = {
    pages: {
        adminLoginPage() {
            return new AdminLoginPage();
        },
        adminMainPage() {
            return new AdminMainPage();
        },
        userDesktopLoginPage() {
            return new UserDesktopLoginPage();
        },
        userDesktopMainPage() {
          return new UserDesktopMainPage();
        },
        userMobileLoginPage() {
            return new UserMobileLoginPage();
        },
        userMobileMainPage() {
            return new UserMobileMainPage();
        }
    }
};
