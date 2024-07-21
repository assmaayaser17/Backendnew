import { Schema, model } from "mongoose";

const nestedSchema = new Schema({
  key: {
    type: String,
  },
  values: {
    type: [Number], // مصفوفة من السلاسل النصية
  }
}, { _id: false }); // لتعطيل إنشاء حقل _id تلقائياً لكل كائن


const BUSSchema =new  Schema({
    fromstation:{
        type:String,
        required:true
    },
    tostation:{

        type:String,
        required:true
    },

    busNumber: {
        type:Number,
        required:true,
        unique:true,
    },
    starttime:{
        type:String,
        required:true,

    },
    endtime:{
        type:String,
        required:true,
    },
    prices: {
      type: Number,
      required:true,
    },
    // seats: {
    //   type: Array,
    //   required:true,
    // },
    leftSeats: [nestedSchema] ,
    rightSeats: [nestedSchema],
    leftOrder:[nestedSchema],
    rightOrder:[nestedSchema],

})
export const BUSmodel =model ("BUS",BUSSchema)