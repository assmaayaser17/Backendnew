import { BUSmodel } from "../../../db/models/bus.model.js";
import Order from "../../../db/models/order.model.js"
import { Ticketmodel } from "../../../db/models/ticket.model.js";
import generateQrCode from "../../utils/qrcode.js";


export const bookOrder = async (req,res,next)=>{
    const {_id} = req.user
    const {leftSeats,rightSeats} = req.body;
    const {bus:busId,ticket:ticketId} = req.query
    const bus = await BUSmodel.findById(busId)
    if(rightSeats)  bus.rightOrder.push(...rightSeats);
    if(leftSeats) bus.leftOrder.push(...leftSeats)

  console.log(leftSeats,'bus')
    const ticket = await Ticketmodel.findById(ticketId)
    const totalPrice = (ticket?.numberOfPassengers * bus?.prices) || 0
    const order = new Order ({user:_id,leftSeats,rightSeats,ticket:ticketId,bus:busId,totalPrice})
    await order.save()
    await bus.save()
    if(!order) return next(new Error("filed to create order",{cause:400}))
    let data = await order.populate(["ticket",'bus'])
    return  res.json({message:"Done",data})
}