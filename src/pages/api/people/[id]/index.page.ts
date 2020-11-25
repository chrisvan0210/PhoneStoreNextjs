import { NextApiRequest, NextApiResponse } from 'next'
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');


export default async function getPeopleById(req: NextApiRequest, res: NextApiResponse) {

    const db = await sqlite.open({
        filename: './database.db',
        driver: sqlite3.Database,
    });
    await db.migrate({ force: 'last' });

    if (req.method === 'PUT') {
    //     const stmt = await db.prepare("UPDATE People SET name= ?, email= ? WHERE id= ?");
    //    await stmt.run(req.body.name, req.body.email, req.query.id)
    //    stmt.finalize();
     await db.run(`UPDATE People SET name="${req.body.name}",email="${req.body.email}" WHERE id=${req.query.id}`);
    }
    if (req.method === 'POST') {
     await db.run(`INSERT INTO People (name , email) VALUES("${req.body.name}","${req.body.email}")`);
    }
    if (req.method === 'DELETE') {
        await db.run(`DELETE FROM  People WHERE id=${req.query.id}`);
       }

    const people = await db.all('SELECT * FROM People where id = ?', req.query.id);
res.json(people)
}