import express from 'express'
import {} from 'dotenv/config'
const app = express();
const PORT= process.env.PORT || 8080


import {insertOne,selectAll,q1,pool} from "./database.js"


import  bodyParser from 'body-parser'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// //MiddleWare
// app.use('/api',(req,res,next)=>{
//     if(MS.con())//checking database connection
//     console.warn("Middleware activated")
//     next();
// })

app.get('/api',(req,res)=>{
    res.json({msg:"Home here"})
})

app.get('/api/all', async(req,res)=>{
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


app.post('/api/register',async(req,res)=>{
    const { name, address, email, phone, password, photo,psy_id } = req.body;
    try {
        let query = `INSERT INTO patients (name, address, email, phone, password, photo,psychiatrist_id) VALUES (?,?,?,?,?,?,?) `
    let data = [name, address, email, phone, password, photo , psy_id]
    pool.query(query, data, (err, result) => {
        if (err) throw err+"💙"
         else {
          console.log("Inserted Successfully"+result)
          return result
      }
    });
    } catch (err) {
        console.error(err.message+"🍎");
        res.status(500).send('Error fetching data from the database.');
    }
})







app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })

// module.exports = app; //make app accessable outside this file