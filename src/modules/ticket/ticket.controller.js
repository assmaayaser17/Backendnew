import { BUSmodel } from "../../../db/models/bus.model.js";
import { Ticketmodel } from "../../../db/models/ticket.model.js"




export const ADDNEWTICKET =async (req,res)=>{
   let {fromStation,toStation,numberOfPassengers,departureDate,returnDate}=req.body;
   const {_id}=req.user
 
  let addedticket= await Ticketmodel.create({fromStation,toStation,numberOfPassengers,departureDate,returnDate,userid:_id})
console.log(addedticket)
  res.json({message:"ADDED",addedticket})
  
}

export const GETALLtickets= async (req,res)=>{
  let alltickets=  await Ticketmodel.find();
  res.json ({message:"SUCCESS",alltickets})

}


export const GEticketBYID = async (req,res)=>{
  let ticket=  await Ticketmodel.findById(req.params.id);
  res.json({message:"DONE",ticket})

}

export const getuserticket =async(req,res)=>{

  const {_id}=req.user
  const ticket = await Ticketmodel.findOne({userid:_id}).sort({createdAt:-1})
  res.json({message:"DONNN",ticket})

}


export const SEARCHAPPOINTMENTS=async(req,res)=>{
  const {_id} =req.user;
  
  const ticket = await Ticketmodel.findOne({userid:_id}).sort({createdAt:-1})

  const buses=await BUSmodel.find({fromstation:{$regex:ticket.fromStation,$options:"i"},
    tostation:{$regex:ticket.toStation,$options:"i"}
   })

   res.json({message:"DONNNN",buses,ticket})






}



