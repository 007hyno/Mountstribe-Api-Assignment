import express from 'express'
import {registerPsy} from '../../controllers/psychiatristController.js';
const psyReg = express.Router();
import { loginValidation } from '../../middlewares/validators.js';

psyReg.post('/',loginValidation,registerPsy)

export default psyReg;