import mongoose from "mongoose";
import TaskListSchema from "./TaskList.Schema.js";

// new entry
export const insertTask = (obj) => {
  return TaskListSchema(obj).save();
};

// read all data

// delete data
