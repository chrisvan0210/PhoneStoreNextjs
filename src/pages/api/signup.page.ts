import { NextApiRequest, NextApiResponse } from 'next'
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

export default async function SignUp(req: NextApiRequest, res: NextApiResponse) {

    const db = await sqlite.open({
        filename: './database.db',
        driver: sqlite3.Database,
    });
    await db.migrate({ force: 'last' });

    if (req.method === 'POST') {
        bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
          
            await db.run(`INSERT INTO People (name , email , password) VALUES("${req.body.name}","${req.body.email}","${hash}")`);

            const people = await db.get('SELECT * FROM People ');
            res.json(people)
        });

    } else {
        res.status(405).json({ message: "This page only for Post!!!" })
    }


}