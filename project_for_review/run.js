const {buildExecutor} = require('protractor-parallel-retrier');
const {resolve} = require('path');

executeByFile();
async function executeByFile() {
    const result = await buildExecutor(resolve(process.cwd(), './framework/config/protractor.conf.ts'), resolve(process.cwd(), './specs'))
        .byFile()
        .command()
        .executor({attemptsCount: 3, maxThreads: 5, logLevel: 'VERBOSE', longestProcessTime: 1800 * 1000, pollTime: 100, debugProcess: true})
        .execute();

    // eslint-disable-next-line no-console
    console.log(result);
    if (result.retriable.length || result.notRetriable.length) {
        process.exit(1);
    }
}

/*
protractor ./framework/config/protractor.conf.ts ./specs/admin/adminLogin.spec.ts
protractor ./framework/config/protractor.conf.ts ./specs/user/desktop/userLoginDesktop.spec.ts
protractor ./framework/config/protractor.conf.ts ./specs/user/mobile/userLoginMobile.spec.ts
 */
