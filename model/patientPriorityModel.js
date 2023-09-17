import mongoose from "mongoose";
const patientPrioritySchema = new mongoose.Schema({
    cancerPercentage:{
        type:Number,
        required:true
    }
});
const patientPriorityModel = mongoose.model("patientPriorityModel", patientPrioritySchema);
export default patientPriorityModel;