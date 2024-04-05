const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./dbinit");
const userRoutes = require("./routes/userRoutes");
const favRoutes = require("./routes/favRoutes");

const PORT = process.env.PORT || 8090;

app.use(cors());
app.use(express.json());
app.use("/user", userRoutes);
app.use("/favourites", favRoutes);

app.use((req, res, next) => {
  console.log("Request to : ", req.path, ",", req.method);
  next();
});

connectDB();

app.get("/", (req, res) => {
  res.json("Welcome to my API");
});

app.listen(PORT, () => {
  console.log(`Listen on Port ${PORT}`);
});
