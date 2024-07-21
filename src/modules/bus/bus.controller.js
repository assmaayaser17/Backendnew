import { BUSmodel } from "../../../db/models/bus.model.js";
import { Ticketmodel } from "../../../db/models/ticket.model.js";


export const ADDNEWBUS= async (req, res) => {
    let {seats, busNumber,starttime,endtime,prices,fromstation,tostation}=req.body;
  let addedbus= await BUSmodel.insertMany({seats,busNumber,starttime,endtime,prices,fromstation,tostation})
console.log(addedbus)
  res.json({message:"ADDED",addedbus})
    
}
export const singleBus = async (req, res,next) => {
  const {id} = req.params;
  const {_id} = req.user
  const bus = await  BUSmodel.findById(id)
  if(!bus) return next(new Error("Bus model not found"))
  const ticket = await Ticketmodel.findOne({userid:_id}).sort({createdAt:-1})
  res.json({message:"Done",bus,ticket})
}
   export const UpdateSeats = async (req, res,next) => {
    try {
      
    
    const {busId} = req.params;
    let {leftSeats,rightSeats} = req.body;
    console.log({leftSeats,rightSeats})
    const bus = await BUSmodel.findById(busId);

    // if (rightSeats && !bus.rightOrder.some(item => item.key === leftSeats.key && item.values[0] === rightSeats.values[0])) {
    //   bus.rightOrder.push(rightSeats);
    // }
    if (leftSeats && !bus.leftOrder.some(item => item?.key === leftSeats?.key && item?.values[0] === leftSeats?.values[0])) {
      bus.leftOrder.push(leftSeats);
    }
  
    await bus.save()

    res.json({message: "Bus Updated Successfully", data: "updatedSeats"});
  } catch (error) {
      console.log(error);
  }
   }
