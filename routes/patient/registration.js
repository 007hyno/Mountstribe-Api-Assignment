import express from 'express'
import registerPaitient from '../../controllers/patientController.js';
const patientReg = express.Router();
import { registerValidation } from '../../middlewares/validators.js';

patientReg.post('/',registerValidation,registerPaitient)

export default patientReg;