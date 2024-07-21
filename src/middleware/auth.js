
import jwt  from "jsonwebtoken";
import { Usermodel } from "../../db/models/user.model.js";

export const auth = (roles ) => { 
    return async(req,res,next)=>{
      try {
        
        const {token}=req.headers
        if(!token){
            return next(new Error('token is required'))
        }
        const decoded = jwt.decode(token,process.env.SECRET_KEY)
        if(!decoded) return next(new Error('token is not valid'))
        const user =await Usermodel.findById(decoded.id)
      
        if(!user){
            return next (new Error('account not valid'))
        }
        
        if(!roles.includes(user.role)){
            return next(new Error("this user is not authorized to use this endpoint",403))
        }
        req.user=user
         next()
      } catch (error) {
        console.log(error)
      }
    }}
