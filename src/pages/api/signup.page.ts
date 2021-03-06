import { NextApiRequest, NextApiResponse } from 'next'
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
import cookie from 'cookie'
import { secretKey } from '../../../api/secretKey';
import { openDB } from '../../../api/openDB';


export default async function SignUp(req: NextApiRequest, res: NextApiResponse) {
    const db = await openDB()
    // await db.migrate({force:true});

    if (req.method === 'POST') {
        bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {

            await db.run(`INSERT INTO People (name , email , password) VALUES("${req.body.name}","${req.body.email}","${hash}")`);

            const member = await db.get('SELECT id,name,email FROM People ');

            // result == true
            if (!err && member) {
                const token = jwt.sign({ sub: member.id, Email: member.email }, secretKey, { expiresIn: '1h' });

                res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== 'development', // not require use https on dev environment
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
        res.status(405).json({ message: "We got you!!!" })
    }


}