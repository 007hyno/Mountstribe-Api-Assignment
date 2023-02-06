import {pool} from '.././database.js'

export const custom1 = (req) => {
  return new Promise((resolve, reject) => {
    let query = `SELECT h.name as hospital_name,
        COUNT(DISTINCT p.id) as total_psychiatrist,
        COUNT(DISTINCT pa.id) as total_patients,
        p.id as psychiatrist_id,
        p.name as psychiatrist_name,
        COUNT(pa.id) as patients_count
        FROM hospitals h
        JOIN psychiatrists p ON h.id = p.hospital_id
        JOIN patients pa ON p.id = pa.psychiatrist_id
        WHERE h.id = ${req}
        GROUP BY p.id;`
    pool.query(query, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}


export const getAllData = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM hospitals', (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}


