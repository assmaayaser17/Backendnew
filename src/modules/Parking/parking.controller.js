import { Parking } from "../../../db/models/parking.model.js"



export const addPark = async (req, res, next) => {
  const {title, price, location, leftPark,rightPark,order,rate,time} = req.body
  const park = await Parking.create({title, price, location, leftPark,rightPark,order,rate,time})
  if(!park) return next(new Error('failed to create park',{cause:400}))
  res.status(201).json({message:"Done", park})
}

export const getParking = async(req,res,next)=>{
  const {title} = req.query
  let query = {}
  if(title) query['title'] = {$regex:title,$options:'i'}
  const parking = await Parking.find(query)
  res.json({message:"DONE", parking})
}