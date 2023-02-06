import express from 'express'
import {getData} from '../../controllers/hospitalController.js';
const hospitalDetails = express.Router();

hospitalDetails.get('/',getData)

export default hospitalDetails;

