import express from 'express'
import {getData} from '../../controllers/hospitalController.js';
const hospitalDetails = express.Router();

import { verifyToken } from '../../middlewares/jwtVerify.js';

hospitalDetails.get('/',verifyToken,getData)

export default hospitalDetails;

