import mongoose from "mongoose";

let patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:['Male','Female'],
        required:true
    },
    age:{
        type:Number,
        min:0,
        max:120
    },
    reports:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Report'
        }
    ]
    
    
});

let patientModel = mongoose.model('Patient',patientSchema);
export default patientModel;

