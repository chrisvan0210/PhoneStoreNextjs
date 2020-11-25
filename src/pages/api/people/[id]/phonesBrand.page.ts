import {NextApiRequest, NextApiResponse} from 'next'
import sqlite3 from 'sqlite3';
const sqlite = require('sqlite');


export default async function getPhoneByOwnerId (req : NextApiRequest,res : NextApiResponse){
   
    const db = await sqlite.open({
      filename: './database.db',
      driver: sqlite3.Database,
    });
  const phone = await db.all('SELECT * FROM Phone where ownerId = ?',[req.query.id]);
    res.json(phone)
}