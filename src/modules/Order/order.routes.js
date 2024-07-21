import { Router } from "express";
import * as OC from './order.controller.js'
import errHandler from 'express-async-handler'
import { auth } from '../../middleware/auth.js';

const router = Router()


router.post('/',auth(['user','admin']),errHandler(OC.bookOrder))

export default router