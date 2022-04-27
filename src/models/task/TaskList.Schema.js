import mongoose from "mongoose";
const TaskSchema = new mongoose.schema({
  task: {
    type: String,
    required: true,
    minLength: 3,
  },
  hr: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Task", TaskSchema); //tasks
