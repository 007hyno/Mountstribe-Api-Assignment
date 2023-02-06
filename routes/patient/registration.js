import express from 'express'
import registerPaitient from '../../controllers/patientController.js';
const patientReg = express.Router();

patientReg.post('/',registerPaitient)

export default patientReg;