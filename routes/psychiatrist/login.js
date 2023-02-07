import express from 'express'
const psyLogin = express.Router();
import { loginPsy } from '../../controllers/psychiatristController.js';

psyLogin.post('/',loginPsy)


export default psyLogin;