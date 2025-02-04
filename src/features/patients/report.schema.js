import mongoose from "mongoose";

let reportSchema = mongoose.Schema({
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient',
        required:true
    },
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor',
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit']
    },
    date:{
        type:Date,
        required:true
    }
})


let reportModel = mongoose.model('Report',reportSchema);
export default reportModel;