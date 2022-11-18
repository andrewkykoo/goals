require("dotenv").config();
const express = require("express");
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

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
