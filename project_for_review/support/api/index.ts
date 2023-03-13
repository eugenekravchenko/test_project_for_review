import {EnvironmentsUrl} from '../data/environmentsUrl';

async function getAuthToken(username, password) {
    const server = EnvironmentsUrl.server.api;
    let resp;
    console.log('Sending Request for getting authorization token from ' + server);
    try {
        resp = await new Request(`${server}/api/login`)
            .method('POST')
            .body(
                {
                    username: username,
                    password: password
                })
            .headers({
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json, text/plain, */*',
                'X-xid': uuid()
            })
            .send();
    } catch (e) {
        throw new Error(`Request failed with error: ${e} \nProvided error Request: ${JSON.stringify(e.options)}`);
    }
    return resp.headers.authorization;
}

async function getUserInfo(username) {
    const server = EnvironmentsUrl.server.api;
    let resp;
    console.log('Sending Request for getting user info');
    try {
        resp = await new Request(`${server}/api/info/${username}`)
            .method('GET')
            .body()
            .headers({
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json, text/plain, */*',
                'X-xid': uuid(),
            })
            .send();
    } catch (e) {
        throw new Error(`Request failed with error: ${e} \nProvided error Request: ${JSON.stringify(e.options)}`);
    }
    return resp.body;
}

async function setUserType(authorization, username, type) {
    const server = EnvironmentsUrl.server.api;
    let resp;
    console.log('Sending Request for set user type');
    try {
        resp = await new Request(`${server}/api/info`)
            .method('POST')
            .body({
                username: username,
                type: `${type}`
            })
            .headers({
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json, text/plain, */*',
                'Authorization': authorization
            })
            .send();
    } catch (e) {
        throw new Error(`Request failed with error: ${e} \nProvided error Request: ${JSON.stringify(e.options)}`);
    }
    return resp.body;
}

export {
    getAuthToken,
    getUserInfo,
    setUserType
};
