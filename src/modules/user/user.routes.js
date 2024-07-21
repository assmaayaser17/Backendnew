import express from 'express';
import { SignIn, SignUp } from './user.controller.js';
import expressAsyncHandler from 'express-async-handler';


const userRoutes=express.Router();

userRoutes.post("/SignUp",expressAsyncHandler(SignUp))
userRoutes.post("/SignIn",expressAsyncHandler(SignIn))









export default userRoutes;

