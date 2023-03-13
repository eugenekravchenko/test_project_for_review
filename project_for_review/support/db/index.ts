async function DB_query(query){
    const connection = await mysql.createConnection({host: 'db', user: 'root', password: 'Example.password', database: 'mysql'});
    await connection.connect();
    await connection.ping();
    const [rows, fields] = await connection.execute(`${query}`);
    await connection.end();
    return [rows, fields];
}

async function DB_getUserData(loginName){
    const connection = await mysql.createConnection({host: 'db', user: 'root', password: 'Example.password', database: 'mysql'});
    await connection.connect();
    await connection.ping();
    const [rows, fields] = await connection.execute(`SELECT * FROM user.data WHERE login_name='${loginName}';`);
    await connection.end();
    return rows;
}

export {
    DB_query,
    DB_getUserData
}
