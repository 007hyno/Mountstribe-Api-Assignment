import express from 'express'

import dotenv from 'dotenv'
dotenv.config()

const app = express();

import { totalReqLimiter, authLimiter} from './middlewares/rateLimiter.js';

import  bodyParser from 'body-parser'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import {insertOne,selectAll,q1,pool} from "./database.js"

import { registerValidation } from './middlewares/validators.js';

const PORT= process.env.PORT || 8080

//Request limiter START
app.use(totalReqLimiter)
//Request limiter END

app.get('/api',(req,res)=>{
    res.json({msg:"Home here"})
})

app.get('/api/patients', async(req,res)=>{
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

app.get('/api/patient/:patientId', async(req,res)=>{
    try {
        let query = `SELECT * FROM patients where id = ${req.params.patientId}`
        pool.query(query, (err,result) => {
          if (err) {return (err)}
          res.json(result);
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error fetching data from the database.');
    }
})


app.post('/api/register',authLimiter,registerValidation,
async(req,res)=>{
    const { name, address, email, phone, password, photo,psy_id } = req.body;
    try {
        let query = `INSERT INTO patients (name, address, email, phone, password, photo,psychiatrist_id) VALUES (?,?,?,?,?,?,?) `
    let data = [name, address, email, phone, password, photo , psy_id]
    pool.query(query, data, (err, result) => {
        if (err) throw err+"💙"
         else {
          console.log("Added patient successfully."+result)
          res.status(200).send('Added patient successfully.');
      }
    });
    } catch (err) {
        console.error(err.message+"🍎");
        res.status(500).send('Error fetching data from the database.');
    }
})

app.get('/api/customQuery/:hospitalId', async(req,res)=>{
    try {
        let query = `SELECT h.name as hospital_name,
        COUNT(DISTINCT p.id) as total_psychiatrist,
        COUNT(DISTINCT pa.id) as total_patients,
        p.id as psychiatrist_id,
        p.name as psychiatrist_name,
        COUNT(pa.id) as patients_count
        FROM hospitals h
        JOIN psychiatrists p ON h.id = p.hospital_id
        JOIN patients pa ON p.id = pa.psychiatrist_id
        WHERE h.id = ${req.params.hospitalId}
        GROUP BY p.id;`
        pool.query(query, (err,result) => {
          if (err) {return (err)}
          res.json(result);
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error fetching data from the database.');
    }
})


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })

// module.exports = app; //make app accessable outside this file