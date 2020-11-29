const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');
 

 export const db =  sqlite.open({
        filename: './database.db',
        driver: sqlite3.Database,
    })
     