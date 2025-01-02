import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slogan: { type: String, required: true },
    description: { type: String, required: true },
    sliderimage: { type: String, required: true },
  },
  { timestamps: true }
);

const slidermodal = mongoose.model("Slider", sliderSchema);
export default slidermodal;
