const mongoose = require("mongoose");

const FavSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  stock: {
    name: { type: String, required: true },
    ticker: { type: String, required: true },
  },
});

module.exports = mongoose.model("Favorite", FavSchema);
