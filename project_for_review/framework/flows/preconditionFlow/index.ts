import {getAuthToken, setUserType} from '../../../support/api';
import {credentials} from '../../../support/data/credentials';

async function updateUser(username, type) {
    let adminCredentials = credentials.admin;
    let auth = await getAuthToken(adminCredentials.login, adminCredentials.password)
    await setUserType(auth, username, type);
}

export {
    updateUser
};
