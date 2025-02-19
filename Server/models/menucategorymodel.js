import mongoose, { SchemaType } from "mongoose";

const menucategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref }],
});
const menucategorymodel = mongoose.model("menucategory", menucategorySchema);
export default menucategorymodel;
