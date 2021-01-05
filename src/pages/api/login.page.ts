import { NextApiRequest, NextApiResponse } from 'next'
import { secretKey } from '../../../api/secretKey';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
import cookie from 'cookie'
import { openDB } from '../../../api/openDB';

export default async function Login(req: NextApiRequest, res: NextApiResponse) {
    const db = await openDB();

    if (req.method === 'POST') {
        const people = await db.get(`SELECT * FROM People WHERE email= ?`, req.body.email);
        bcrypt.compare(req.body.password, people.password, async function (err, result) {
            // result == true


            if (!err && result) {
                const token = jwt.sign({ sub: people.id, Email: people.email }, secretKey, { expiresIn: '1h' });
                res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== 'development',
                    sameSite: 'strict',
                    maxAge: 3600,
                    path: '/'
                }))

                res.json({ message: "Welcome back Master!" });
            } else {
                res.status(401).json({ message: "Oop! Something went wrong!" })
            }
        });

    }
    else {
        res.status(405).json({ message: "This page only for Post!!!" })
    }
}