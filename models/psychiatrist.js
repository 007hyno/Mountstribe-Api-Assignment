import {pool} from '.././database.js'
import bcrypt from "bcrypt"

export const register =  async(req) => {
  const hashedPassword = await bcrypt.hash(req.password,10)
    return new Promise((resolve, reject) => {
        let query = `INSERT INTO psychiatrists (name,email,password,hospital_id) VALUES (?,?,?,?)`
        let data = [req.name,req.email,hashedPassword,req.hos_id]
      pool.query(query, data, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  

export  const login =  async(req) => {
    return new Promise((resolve, reject) => {
        let query = `Select * from psychiatrists where email = ?`
        pool.query(query,[req.email], (err, result) => {
          if (err) {
          reject(err);
        } else {
          resolve({status:true,
            data:result});
        }
      });
    });
  }
