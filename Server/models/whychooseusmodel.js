import mongoose from "mongoose";

const whychooseusschema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    photos: [],
  },
  { timestamps: true }
);
const whychooseusmodel = mongoose.model("whychooseus", whychooseusschema);
export default whychooseusmodel;
