import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    testimonialImage: { type: String, required: true },
  },
  { timestamps: true }
);

const testimonialmodal = mongoose.model("testimonial", testimonialSchema);
export default testimonialmodal;
