import mongoose, { Schema, model } from "mongoose";

const ticketSchema =new  Schema({
  userid:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },

    fromStation: {
        type: String,
        required:true
       
      },
      toStation: {
        type: String,
        required: true,
      },
      numberOfPassengers: {
        type: Number,
        required: true,
      },
      departureDate: {
        type: Date,
        required: true,
      },
      returnDate: {
        type: Date,
        required:true
      },
      



},{
  timestamps:true,
})

export const Ticketmodel =model ("ticket",ticketSchema)