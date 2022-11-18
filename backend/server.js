import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.json({ msg: "welcome" });
});

// listen for requests
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
