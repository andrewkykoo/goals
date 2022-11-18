require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT;
const topicRoutes = require("./routes/topics");

const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/topics", topicRoutes);

// connect to db
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // listen for requests
    app.listen(port, () => {
      console.log(`connected to db. listening on port ${port}`);
    });
  })
  .catch((error) => console.log(error));
