import express from 'express';
import PatientController from './patient.controller.js';

let patientRouter = express.Router();

patientRouter.post('/register',(req,res)=>{
    PatientController.registerPatient(req,res);
})

patientRouter.post('/:id/create_reports',(req,res)=>{
    PatientController.createReports(req,res);
})

patientRouter.get('/:id/all_reports',(req,res)=>{
    PatientController.getReports(req,res);
})

patientRouter.get('/:status',(req,res)=>{
    PatientController.reportByStatus(req,res);
})

export default patientRouter;