import { Router } from "express";
import * as PC  from "./parking.controller.js"
import expressAsyncHandler from "express-async-handler";
import { auth } from '../../middleware/auth.js';

const router = Router()

router
.post('/',auth(['admin']),expressAsyncHandler(PC.addPark))
.get('/',expressAsyncHandler(PC.getParking))

export default router 