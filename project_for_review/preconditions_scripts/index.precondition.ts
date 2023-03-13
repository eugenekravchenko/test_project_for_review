const mysql = require('mysql2/promise');

const sleep = ms => new Promise(r => setTimeout(r, ms));

describe(`Precondition`, function () {
    this.timeout(240 * 1000);
    it('Precondition', async function () {
        console.log('Precondition script started...');
        const connection = await mysql.createConnection({host: 'db', user: 'root', password: 'Example.password', database: 'mysql'});
        await connection.connect();
        await connection.ping();
        await connection.execute(`UPDATE test.settings SET value = '0' WHERE ('name' = 'user.example');`);
        await connection.end();
        await sleep(60 * 1000);
        console.log('Precondition script finished...');
    });
});