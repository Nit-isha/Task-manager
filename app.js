const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
require("dotenv").config();

//middleware: pre-built
app.use(express.static("./public"));
app.use(express.json()); //if we don't use then we will not have any data in req.body

//routes

app.use("/api/v1/tasks", tasks);
app.use(notFound); //for any route other than /api/v1/tasks
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000; //PORT 3000

const start = async () => {
  try {
    await connectDB(process.env.mongo_url);
    app.listen(port, console.log(`Server is listening on port ${port}..`));
  } catch (error) {
    console.log(error);
  }
};

start();
