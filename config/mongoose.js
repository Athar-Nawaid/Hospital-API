import mongoose from "mongoose"

let connectToMongoose = async (req,res)=>{
    await mongoose.connect(process.env.DB_URL);
    console.log('Mongoose is connected');
}

export default connectToMongoose;