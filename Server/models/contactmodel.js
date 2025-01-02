import mongoose from "mongoose";

const userquerySchema= new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    phonenumber:{type:String, required:true},
    description:{type:String, required:true}
},{timestamps:true})

const userquerymodal= mongoose.model("userquery", userquerySchema)
export default userquerymodal