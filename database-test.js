const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

async function setup() {
  const db = await sqlite.open({
    filename: './database.sqlite',
    driver: sqlite3.Database,
  });

  //add cutom path to your migrations
  // migrationsPath: './migrations', 
  await db.migrate({ migrationsPath: './migrations',force: true});

  const people = await db.all('SELECT * FROM People');
  console.log('table Person', JSON.stringify(people, null, 2));

  const phone = await db.all(`SELECT * FROM Phone`);
  console.log('table Phone', JSON.stringify(phone, null, 2));
  const latop = await db.all(`SELECT * FROM Laptop`);
  console.log('table Laptop', JSON.stringify(latop, null, 2));
}
setup();