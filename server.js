import express from 'express'
import dotenv from 'dotenv'
dotenv.config()


import { totalReqLimiter, authLimiter} from './middlewares/rateLimiter.js';

import  bodyParser from 'body-parser'


import {pool} from "./database.js"
// import {insertOne,selectAll,/q1,pool} from "./database.js"

//Validators

//routes
import hospitalDet from './routes/hospital/details.js';
import psyReg from './routes/psychiatrist/registration.js';
import psyLogin from './routes/psychiatrist/login.js';
import patientReg from './routes/patient/registration.js';
import patientDet from './routes/patient/details.js';
import custom1 from './routes/hospital/custom1.js';

const app = express();
const PORT= process.env.PORT || 8080

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Request limiter START
app.use(totalReqLimiter)
//Request limiter END

app.get('/api',(req,res)=>{
    res.json({msg:"API is working.."})
})

//ROUTES _start_
app.use('/api/hospitalDet',hospitalDet)
app.use('/api/psyReg',psyReg)
app.use('/api/patientReg',patientReg)
app.use('/api/psyLogin',psyLogin)
app.use('/api/custom1/',custom1)
//ROUTES _end_

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })
