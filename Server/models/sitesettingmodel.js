import mongoose from "mongoose";

const sitesettingschema = new mongoose.Schema(
  {
    businessname: { type: String, required: true },
    phonenumber: { type: String, required: true },
    email: { type: String, required: true },
    fblink: { type: String, required: true },
    twitterlink: { type: String, required: true },
    linkedlink: { type: String, required: true },
    youtubelink: { type: String, required: true },
    shortdescriptionaboutbusiness: { type: String, required: true },
    businesslogo: { type: String },
  },
  { timestamps: true }
);
const sitesettingmodal = mongoose.model("SiteSetting", sitesettingschema);
export default sitesettingmodal;
