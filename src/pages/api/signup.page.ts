import { NextApiRequest, NextApiResponse } from 'next'
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
import cookie from 'cookie'
import { secretKey } from '../../../api/secretKey';
// import { db } from '../../../api/openDB';
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');
export default async function SignUp(req: NextApiRequest, res: NextApiResponse) {

    //https://stackoverflow.com/questions/63823970/sqlite-filename-cannot-be-null-undefined

    const db = await sqlite.open({
        filename: './database.db',
        driver: sqlite3.Database,
    })

    if (req.method === 'POST') {
        bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {

            await db.run(`INSERT INTO People (name , email , password) VALUES("${req.body.name}","${req.body.email}","${hash}")`);

            const people = await db.get('SELECT id,name,email FROM People ');

            // result == true
            if (!err && people) {
                const token = jwt.sign({ sub: people.id, Email: people.email }, secretKey, { expiresIn: '1h' });

                res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== 'development', // allow not use https on dev
                    sameSite: 'strict', //same with true
                    maxAge: 3600,
                    path: '/'
                }))
                res.json({ message: "Register succesfully !" })
            } else {
                res.json({ message: "Oop! Something went wrong!" })
            }
        });


    } else {
        res.status(405).json({ message: "This page only for Post!!!" })
    }


}