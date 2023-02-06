import express from 'express'
import {registerPsy} from '../../controllers/psychiatristController.js';
const psyReg = express.Router();

psyReg.post('/',registerPsy)

export default psyReg;