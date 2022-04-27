import express from "express";
const app = express();
const PORT = 8000;

app.use(express.json());

// mongo connection
import mongoClient from "./src/config/db.js";
mongoClient();

// root url
app.get("/", (req, res) => {
  const person = {
    fn: "nisha",
    ln: "pandey",
  };
  res.json(person);
});

// load router
import taskRouter from "./src/routers/taskRouter.js";
app.use("/api/v1/task", taskRouter);

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }

  console.log(`Your server is running at http://localhost:${PORT}`);
});
