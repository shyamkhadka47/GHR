import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    serviceImage: { type: String, required: true },
  },
  { timestamps: true }
);

const servicemodal = mongoose.model("service", serviceSchema);
export default servicemodal;
