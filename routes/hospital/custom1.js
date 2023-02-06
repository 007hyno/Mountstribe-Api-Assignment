import express from 'express'
import {customApi1} from '../../controllers/hospitalController.js';

const hospitalCustom1 = express.Router();

// hospitalCustom1.get('/:hospitalId',customApi1)
hospitalCustom1.get('/:hospitalId', (req, res) => {
    console.log(req.params);
    if (!req.params.hospitalId) {
        return res.status(400).json({ error: 'Hospital ID is required' });
      }
    customApi1(req,res)
  });

export default hospitalCustom1;