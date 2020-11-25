import { NextApiRequest, NextApiResponse } from 'next'
import { secretKey } from '../../../api/secretKey';
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

export default async function Login(req: NextApiRequest, res: NextApiResponse) {

    const db = await sqlite.open({
        filename: './database.db',
        driver: sqlite3.Database,
    });
    // await db.migrate({ force: 'last' });
    if (req.method === 'POST') {
        const people = await db.get(`SELECT * FROM People WHERE email= ?`, req.body.email);
        bcrypt.compare(req.body.password, people.password, async function (err, result) {
            // result == true
            if (!err && result) {
                const  token = jwt.sign({ sub:people.id,Email:people.email }, secretKey,{expiresIn:'1h'});
                res.json({ authToken: token })
            } else {
                res.json({ message: "Oop! Something went wrong!" })
            }
        });

    } else {
        res.status(405).json({ message: "This page only for Post!!!" })
    }

}