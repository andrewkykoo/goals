require("dotenv").config();
const express = require("express");
const port = process.env.PORT;

const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.json({ msg: "working" });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
