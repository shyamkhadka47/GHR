import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  menuImage: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  menuCategory: { type: mongoose.Types.ObjectId, ref: "menucategory" },
},{timestamps:true});

const menumodel = mongoose.model("menu", menuSchema);
export default menumodel;
