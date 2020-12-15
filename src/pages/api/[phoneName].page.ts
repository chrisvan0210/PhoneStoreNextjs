import {  NextApiRequest, NextApiResponse } from 'next'
import { openDB } from '../../../api/openDB';

export default async function getAllPeople(req: NextApiRequest, res: NextApiResponse) {
  console.log("name",req.query.phoneName)
    const db = await openDB()
    const Phone = await db.all(`SELECT * FROM Phone where model like 'iphone'  `);
    res.json(Phone)
  } 