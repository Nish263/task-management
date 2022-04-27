import mongoose from "mongoose";
import TaskListSchema from "./TaskList.Schema.js";

// new entry
export const insertTask = (obj) => {
  return TaskListSchema(obj).save();
};

// read all data

export const getAllTask = () => {
  return TaskListSchema.find();
};

// delete data
export const deleteTask = (_id) => {
  return TaskListSchema.findByIdAndDelete(_id);
};

// find single Task
export const getTask = (_id) => {
  return TaskListSchema.findById(_id);
};

// update specific task
// export const updateTask = ({ _id, task }) => {
//   return TaskListSchema.findByIdAndUpdate(_id, { task });
// };
