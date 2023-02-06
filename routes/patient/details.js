import express from 'express'
const patientDet = express.Router();
import { verifyToken } from '../../middlewares/jwtVerify.js';


patientDet.get('/',verifyToken,(req,res)=>{
    try {
        let query = `SELECT * FROM patients`
        pool.query(query, (err,result) => {
          if (err) {return (err)}
          res.json(result);
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error fetching data from the database.');
    }
})

export default patientDet;