const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

 //https://stackoverflow.com/questions/63823970/sqlite-filename-cannot-be-null-undefined

export function openDB() {
    return  sqlite.open({
        filename: './database.sqlite',
        driver: sqlite3.Database,
    });
}

/****ADD CUSTOME YOUR PATH WITH MIGRATIONS****/
// async function setup() {
//     const db = await openDb();
//     await db.migrate(
//         {
//             migrationsPath: './src/migrations', 
//             force: 'last'
//         }
//     )
// }    