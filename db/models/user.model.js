import { Schema ,model } from "mongoose";

 const UserSchema =new Schema({
    name:{
        type:String,
        minlength:[3,"name is too short"], //validation
        required:true,
    },
   
    role:{
     type: String,
     enum: ["admin", "user"],
     default: "user",
          },
        
    
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        minlength:[4,"password is too short"],
        maxlength:[100,"password is too long"],
    },
    
    verified:{
        type:Boolean,
        default:false,
    }
    
    },{
        timestamps:true,
    })

    export  const Usermodel=model("User",UserSchema);
        
        
       
    
      
    
    

