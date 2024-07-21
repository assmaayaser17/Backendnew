import { Schema, model } from "mongoose";

const parkingSchema =new  Schema({
  title:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
    min:0
  },
  location:{
    type:String,
  },  
  leftPark:[{
    type:Number,
    default:0,
    min:0
  }],
  rightPark:[{
    type:Number,
    default:0,
    min:0
  }],
  order:[{
    type:Number,
  }],
  rate:{
    type:Number,
    default:0,
    min:0,
    max:5,
  },
  time:{
    type:String,
  }

},{
  timestamps:true,
})

export const Parking = model("Parking",parkingSchema)