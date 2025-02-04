import patientModel from "./patient.schema.js";
import reportModel from "./report.schema.js";

export default class PatientRepository{

    //Registering a new Patient
    static async registerPatient(name,phone,gender,age){
        let newPatient = new patientModel({
            name:name,
            phone:phone,
            gender:gender,
            age:age
        });
        return await newPatient.save();
    }

    //Checking if user already exists
    static async getPatientByPhone(phone){
        return await patientModel.findOne({phone:phone});
    }

    static async getPatientById(id){
        return await patientModel.findById(id);
    }

    static async createReports(id,doctor,status,date){
        try{
            let newReport = new reportModel({
                patient:id,
                doctor:doctor,
                status:status,
                date:date
            });

            console.log('new report', newReport);
            await newReport.save();


            await patientModel.updateOne(
                {_id:id},
                {$push:{
                    reports:newReport._id
                }
            });
    
            return newReport;
        }catch(err){
            console.log(err);
        }
    }

    
}