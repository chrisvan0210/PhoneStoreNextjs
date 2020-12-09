import {  NextApiRequest, NextApiResponse } from 'next'
import sqlite3 from 'sqlite3';
const sqlite = require('sqlite');

export default async function getAllPeople(req: NextApiRequest, res: NextApiResponse) {

    const db = await sqlite.open({
      filename: './database.db',
      driver: sqlite3.Database,
    });
    const Phone = await db.all(`SELECT * FROM Phone WHERE id=${req.query.id}`);
    res.json(Phone)
  } 