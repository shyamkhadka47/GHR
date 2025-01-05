import mongoose from "mongoose";

const aboutSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  aboutImage: { type: String, required: true },
});

const aboutmodal = mongoose.model("aboutus", aboutSchema);
export default aboutmodal;
