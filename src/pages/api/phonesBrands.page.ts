import { secretKey } from './../../../api/secretKey';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { verify } from 'jsonwebtoken'
import { openDB } from '../../../api/openDB';


export const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  verify(req.cookies.auth, secretKey, async function (err, decoded) {
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
    const Phone = await db.all('SELECT * FROM Phone where id=?',req.query.id);

    res.json(Phone)
  }) 