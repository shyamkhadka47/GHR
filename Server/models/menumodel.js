import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug:{type:String, required:true},
    menuImage: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    menuCategory: { type: mongoose.Types.ObjectId, ref: "menucategory" },
  },
  { timestamps: true }
);

const menumodel = mongoose.model("menu", menuSchema);
export default menumodel;
