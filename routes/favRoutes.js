// routes/favourites.js
const express = require("express");
const {
  getAllFavorites,
  addToFavorites,
  removeFromFavorites,
} = require("../controllers/favController");

const app = express.Router();
const requireAuth = require("../middlewares/requireAuth");
app.use(requireAuth);

// Route that requires authentication

app.route("/").get(getAllFavorites).post(addToFavorites);
app.route("/:favId").delete(removeFromFavorites);

module.exports = app;
