import DoctorRepository from "./doctor.repo.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class DoctorController{
     
    static async createDoctor(req, res){
        try{
            const{name,gender,specialisation,phone,password} = req.body;
            let newDoctor = await DoctorRepository.createDoctor(name,gender,specialisation,phone,password);
            if(!newDoctor){
                res.status(400).send('Something went wrong while registering doctor');
            }else{
                res.status(200).send('Doctor Registered Successfully!!')
            }
        }catch(err){
            console.log('doctors-controller',err);
        }
    }

    static async signIn(req,res){
        try{
            const{phone,password} = req.body;
            let doctor = await DoctorRepository.getDoctorByPhone(phone);

            if(!doctor){
                return res.status(404).send('Doctor not found!! Please register first or check entered phone number.')
            }

            let result = bcrypt.compare(password,doctor.password);

            if(!result){
                return res.status(404).send('Invalid Credentials');
            }else{
                let token = jwt.sign({doctorId:doctor._id},process.env.JWT_SECRET,{expiresIn:'1h'});
                return res.status(200).send(token);
            }

        }catch(err){
            console.log(err);
        }
    }
}