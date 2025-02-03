import mongoose from "mongoose";


let doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:['Male','Female']
    },
    specialisation:{
        type:String,
        required:true
    },phone:{
        type:String,
        unique:true,
        required:true
    },password:{
        type:String,
        required:true
    }
});


let doctorModel = mongoose.model('Doctor',doctorSchema);
export default doctorModel;