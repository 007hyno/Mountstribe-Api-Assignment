import express from 'express'
import {} from 'dotenv/config'
const app = express();
import  rateLimit from "express-rate-limit"

const PORT= process.env.PORT || 8080
import { check, validationResult } from 'express-validator' //for form validation
import multer from 'multer' // for image extention validation


import {insertOne,selectAll,q1,pool} from "./database.js"


import  bodyParser from 'body-parser'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//rate limiter START
const totalReqLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 7, // Testing limit 
    legacyHeaders: false,
    standardHeaders: true,
    message: "Too many requests, please try again later"
  })

  const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max:3,// Limit in integer
    legacyHeaders: false,
    standardHeaders: true,
    message: "Too many LogIn / SignIn requests, please try again later"
  })
//rate limiter END

// MiddleWare START
// app.use('/api',(req,res,next)=>{
//     if(MS.con())//checking database connection
//     console.warn("Middleware activated")
//     next();
// })

app.use(totalReqLimiter);

app.use((req, res, next) => {
      console.log('Traffic from IP: '+req.socket.remoteAddress)
    next()
  })

// //MiddleWare END

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


app.post('/api/register',authLimiter,[
    check('name').isLength({ min: 3 }).withMessage('Name must be at least 3 characters'),
    check('address').isLength({ min: 10 }).withMessage('Address must be at least 10 characters'),
    check('email').isEmail().withMessage('Invalid email address'),
    check('phone').isNumeric().withMessage('Phone number must be numeric'),
    check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
    check('photo').isLength({ min: 8 }).withMessage('NOT DONEred🔴🔴'),
    check('psy_id').isNumeric().withMessage('psy_id must be numeric')
],
async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
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