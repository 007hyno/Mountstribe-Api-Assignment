

export const selectAll = () => {
    return new Promise((resolve, reject) => {
  
      let query = `SELECT * FROM patients`
  
      pool.query(query, (err, res) => {
        if (err) {return reject(err)}
        resolve(res);
      });
    });
  
  }
  
  
  export const insertOne = ({name, address, email, phone, password, photo, psy_id}) => {
    return new Promise((resolve, reject) => {
  
      let query = `INSERT INTO patients (name, address, email, phone, password, photo,psychiatrist_id) VALUES (?,?,?,?,?,?,?) `
      let data = [name, address, email, phone, password, photo , psy_id]
      pool.query(query, data, (err, res) => {
          if (err) throw err+"💙"
           else {
            console.log("Inserted ");
        }
      });
  });
  }
  
  const query2 = `SELECT h.name as hospital_name,
  COUNT(DISTINCT p.id) as total_psychiatrist,
  COUNT(DISTINCT pa.id) as total_patients,
  p.id as psychiatrist_id,
  p.name as psychiatrist_name,
  COUNT(pa.id) as patients_count
  FROM hospitals h
  JOIN psychiatrists p ON h.id = p.hospital_id
  JOIN patients pa ON p.id = pa.psychiatrist_id
  WHERE h.id = 1
  GROUP BY p.id;`
  
  export const q1 = () => {
    pool.query(query2, (err, result) => {
      if (err) throw err;
      return console.log(result);
    })
  }
  
  