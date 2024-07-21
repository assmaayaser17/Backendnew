import express from 'express';
import { ADDNEWBUS,UpdateSeats, singleBus } from './bus.controller.js';
import { auth } from '../../middleware/auth.js';
import expressAsyncHandler from 'express-async-handler';


const busRoutes =express.Router();

busRoutes.post('/admin/bus' ,auth(['admin']),expressAsyncHandler(ADDNEWBUS));
busRoutes.post('/setSeats/:busId' ,auth(['user','admin']),expressAsyncHandler(UpdateSeats));
busRoutes.get('/:id' ,auth(['user','admin']),expressAsyncHandler(singleBus));













export default busRoutes;