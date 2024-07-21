import mongoose from "mongoose";

 export const connection =()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/smartcity').then(()=>{
        console.log("DB CONNECTED")
    }).catch((err)=>{
        console.log("DB ERROR",err);
    })
    
 }
