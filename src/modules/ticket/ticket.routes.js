import express from 'express';
import { ADDNEWTICKET, GETALLtickets, GEticketBYID, SEARCHAPPOINTMENTS, getuserticket } from './ticket.controller.js';
import { auth } from '../../middleware/auth.js';
import expressAsyncHandler from 'express-async-handler';

const ticketRoutes =express.Router();




ticketRoutes.post('/addticket',auth(['user','admin']),expressAsyncHandler(ADDNEWTICKET));
ticketRoutes.get('/getalltickets',auth(['user','admin']),expressAsyncHandler(GETALLtickets));
ticketRoutes.get('/getticket/:id',GEticketBYID);
ticketRoutes.get('/getappointments',auth(['user','admin']),expressAsyncHandler(SEARCHAPPOINTMENTS));
ticketRoutes.get('/userticket',auth(['user','admin']),expressAsyncHandler(getuserticket));











export default ticketRoutes;