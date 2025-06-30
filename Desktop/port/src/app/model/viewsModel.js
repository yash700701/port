import mongoose from "mongoose";

const viewsSchema = new mongoose.Schema({
  viewsCount: {
    type: Number,
    default: 0
  }
});

const Count = mongoose.models.count || mongoose.model("count", viewsSchema);
export default Count;
