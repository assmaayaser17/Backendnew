import { Usermodel } from "../../../db/models/user.model.js";
import bcrybt from 'bcrypt';
import Jwt  from "jsonwebtoken";

export const SignUp= async (req,res)=>{

    let {name,email,password,confirmpassword}=req.body
    if(password==confirmpassword){

console.log("hello")
  //* CHECK IF EMAIL IS EXIST ??
  let existuser= await Usermodel.findOne({email})
  if (existuser) return res.json({message:"EMAIL IS ALREADY EXIST,GO TO LOGIN PAGE"})
  //RETURN INSTEADOF ELSE...
  //HASH PASSWORD
 let hashedpassword =bcrybt.hashSync(password,parseInt(process.env.SALTROUNDS))

// IF EMAIL IS NOT EXIST INSERT DATA
//INSERT USER
let ADDEDUSER= await Usermodel.insertMany({name,email,password:hashedpassword})
console.log("high")
return res.json({message:"SUCCESS",ADDEDUSER})


    }else{
      res.json({message:"password and confirm password is not matched"})
    }
   
  } 
   


export const SignIn= async (req,res)=>{

    
    let {email,password}=req.body
    //CHECK IF EMAIL IS EXIST ??
    let existuser= await Usermodel.findOne({email})
    if(existuser){
    let matched=  bcrybt.compareSync(password,existuser.password)
    if(matched){
     let token= Jwt.sign({id:existuser._id},process.env.SECRET_KEY)
      res.json({message:"WELCOME",token})
    }else{
      res.json({message:"WRONG PASSWORD"})
    }
  }else{
      res.json({message:"YOU HAVE TO REGISTER FIRST"})
    }
  }

  
    
    

    
  
   

 
