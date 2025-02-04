import PatientRepository from "./patient.repository.js";
import patientModel from "./patient.schema.js";
import reportModel from "./report.schema.js";

export default class PatientController{
    static async registerPatient(req,res){
        try{
            const{name,phone,gender,age} = req.body;

            //Checking if patient is already registered
            let patient = await PatientRepository.getPatientByPhone(phone);
            if(patient){
                return res.status(200).json({msg:"patient is already registered",patient:patient});
            }
            let newPatient = await PatientRepository.registerPatient(name,phone,gender,age);

            if(!newPatient){
                return res.status(500).send('Internal Server Error - could not register patient');
            }else{
                return res.status(200).json({msg:"New Patient Registered!!",patient:newPatient});
            }
        }catch(error){
            if (error.name === "ValidationError") {
                // Extract and format validation errors
                const errors = Object.values(error.errors).map(err => err.message);
                return res.status(400).json({ errors });
              }
        }
    }

    static async createReports(req,res){
        

        try{
            let id = req.params.id;
            let patient = await PatientRepository.getPatientById(id);

            if(!patient){
                return res.status(404).send('Incorrect Patient Id');
            }

            const{doctor,status} = req.body;
            let date = Date.now();

            let newReport = await PatientRepository.createReports(patient._id,doctor,status,date);

            if(!newReport){
                return res.status(500).send('Internal Server Error - could not create Report');
            }else{
                return res.status(200).json({msg:"New Report created!",report:newReport});
            }
        }catch(error){
            if (error.name === "ValidationError") {
                // Extract and format validation errors
                const errors = Object.values(error.errors).map(err => err.message);
                return res.status(400).json({ errors });
              }
        }
    }

    static async getReports(req,res){
        try{
            let id = req.params.id;

            let patient = await patientModel.findById(id).populate('reports')

            if(!patient){
                return res.status(404).send('Incorrect Patient Id');
            }

            
            res.status(200).send(patient.reports);
        }catch(error){
            if (error.name === "ValidationError") {
                // Extract and format validation errors
                const errors = Object.values(error.errors).map(err => err.message);
                return res.status(400).json({ errors });
              }
        }
    }

    static async reportByStatus(req,res){
        
        try{
            let status = req.params.status;

            let reports = await reportModel.find({status:status})
            .populate('patient','name')
            .populate('doctor','name');

            if(!reports){
                res.status(401).send('Something Went wrong');
            }else{
                res.status(200).send(reports);
            }
        }catch(err){
            console.log(err);
        }
    }
}