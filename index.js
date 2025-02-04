import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectToMongoose from './config/mongoose.js';
import doctorRouter from './src/features/doctors/doctors.router.js';
import patientRouter from './src/features/patients/patient.router.js';
import jwtAuth from './src/middlewares/jwt.auth.js'
import cors from 'cors';


let server = express();
server.use(cors());
server.use(express.json());

server.use('/doctors',doctorRouter);
server.use('/patients',jwtAuth,patientRouter);
server.use('/reports',jwtAuth,patientRouter)


server.get('/',(req,res)=>{
    res.send('Landing Page')
})

server.listen(process.env.PORT|| 3000,()=>{
    console.log('server is listening at 3000');
    connectToMongoose();
})