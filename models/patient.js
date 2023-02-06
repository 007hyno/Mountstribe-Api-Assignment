import {pool} from '.././database.js'

export const register = (req) => {
    return new Promise((resolve, reject) => {
        // const { name, address, email, phone, password, photo,psy_id } = data;
        let query = `INSERT INTO patients (name, address, email, phone, password, photo,psychiatrist_id) VALUES (?,?,?,?,?,?,?) `
        let data = [req.name, req.address, req.email, req.phone, req.password, req.photo , req.psy_id]
      pool.query(query, data, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }