import dotenv from 'dotenv';
dotenv.config({});



import express from 'express'
import { connection } from './db/connection.js'
import userRoutes from './src/modules/user/user.routes.js'
import ticketRoutes from './src/modules/ticket/ticket.routes.js'
import cors from "cors";
import busRoutes from './src/modules/bus/bus.routes.js';
import globalResponse from './src/middleware/global-response.middleware.js';
import orderRouter from './src/modules/Order/order.routes.js';
import parkRouter from './src/modules/Parking/parking.routes.js';

const app = express()
const port = 3000;
app.use(express.json())
app.use(cors());
connection();

app.use('/api/v1/user',userRoutes);
app.use('/api/v1/ticket',ticketRoutes);
app.use('/api/v1/bus',busRoutes);
app.use('/api/v1/order',orderRouter);
app.use('/api/v1/park',parkRouter);
app.use(globalResponse)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
