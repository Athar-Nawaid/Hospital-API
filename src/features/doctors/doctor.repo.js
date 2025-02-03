import doctorModel from "./doctor.schema.js";
import bcrypt from 'bcrypt';

export default class DoctorRepository{

    static async createDoctor(name,gender,specialisation,phone,password){
        try{
            let salt = 12;
            let hashedPassword = await bcrypt.hash(password,salt);
            let newDoctor = new doctorModel({
                name:name,
                gender:gender,
                specialisation:specialisation,
                phone:phone,
                password:hashedPassword
            });
            return await newDoctor.save();
        }catch(err){
            console.log('doctors-repo',err);
        }
    }

    static async getDoctorByPhone(phone){
        return await doctorModel.findOne({phone:phone});
    }
}