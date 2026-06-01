import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  company: String,
  role: String,
  status: {
    type: String,
    default: "Applied"
  }
});

export default mongoose.model("Job", jobSchema);