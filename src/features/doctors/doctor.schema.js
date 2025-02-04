import mongoose from "mongoose";


let doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Doctor name is required']
    },
    gender:{
        type:String,
        enum:{
            values:['Male','Female'],
            message: "Gender must be either 'Male' or 'Female'"
        }
    },
    specialisation:{
        type:String,
        required:[true, "Specialisation is required"],
    },phone:{
        type:String,
        unique:true,
        required:[true,'Phone is required']
    },password:{
        type:String,
        required:true
    }
});


let doctorModel = mongoose.model('Doctor',doctorSchema);
export default doctorModel;