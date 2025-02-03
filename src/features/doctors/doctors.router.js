import express from 'express';
import DoctorController from './doctors.controller.js';


let doctorRouter = express.Router();

doctorRouter.post('/register',(req,res)=>{
    DoctorController.createDoctor(req,res);
})

doctorRouter.post('/login',(req,res)=>{
    DoctorController.signIn(req,res);
})

export default doctorRouter