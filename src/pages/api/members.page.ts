import { secretKey } from '../../../api/secretKey';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import sqlite3 from 'sqlite3';
const sqlite = require('sqlite');
import { verify } from 'jsonwebtoken'
import { openDB } from '../../../api/openDB';


export const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  verify(req.cookies.auth!, secretKey, async function (err, decoded) {
    // err
    // decoded undefined
    if (!err && decoded) {
      return await fn(req, res)
    }
    res.status(401).json({ message: "Sorry you are not authenticated" })
  });
}


export default authenticated(
  async function getAllPeople(req: NextApiRequest, res: NextApiResponse) {

    const db = await openDB()
    
    const people = await db.all('SELECT id,name,email FROM People');

    res.json(people)
  }) 