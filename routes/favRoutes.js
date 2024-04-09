const express = require("express");
const requireAuth = require("../middlewares/requireAuth");

const { getAllFavourites, addFav } = require("../controllers/favController");

const router = express.Router();

router.use(requireAuth);
router.route("/").get(getAllFavourites);
router.route("/").post(addFav);

module.exports = router;
