import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    caption: { type: String, required: true },
    galleryImage: { type: String, required: true },
  },
  { timestamps: true }
);

const gallerymodal = mongoose.model("gallery", gallerySchema);

export default gallerymodal;
