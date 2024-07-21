import { Schema, model } from "mongoose"

const order_schema = new Schema({
    bus:{
      type:Schema.Types.ObjectId,
      ref:"BUS",
      required:true
    },
    ticket:{
      type:Schema.Types.ObjectId,
      ref:"ticket",
      required:true
    },
    user:{
      type:Schema.Types.ObjectId,
      ref:"User",
      required:true,
    },
    leftSeats:{
      type:Array,
      default:[]
    },
    rightSeats:{
      type:Array,
      default:[]
    },
    totalPrice:{
      type:Number,
      min:0,
      default:0
    }
},{timestamps:true})

const Order =  model('Order',order_schema)

export default Order;