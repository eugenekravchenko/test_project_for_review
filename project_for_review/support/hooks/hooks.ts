const {TEST_RAIL} = process.env;

async function testRail(fullTitle?, title?, state?) {
    if (TEST_RAIL === 'true') {
        try {
            await new TestRailResults().sendResults(fullTitle, title, state);
        } catch (e) {
            throw new Error(e);
        }
    }
}

export {
    testRail
};
