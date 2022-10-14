require("dotenv").config();

const cors = require("cors");
const express = require("express");
const app = express();
const apiRouter = require("./routes");
const mongoose = require("mongoose");

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);

app.all("/*", (_, __, next) => {
  next({ status: 404, msg: "Route not found" });
});

module.exports = app;
