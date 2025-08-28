import mongoose from "mongoose";

const ourTeamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    work: { type: String, required: true },
    teamImage: { type: String, required: true },
  },
  { timestamps: true }
);

const ourteammodal = mongoose.model("ourteam", ourTeamSchema);
export default ourteammodal;
