const express = require("express");
const requireAuth = require("../middlewares/requireAuth");

const { getAllPosts, createPost } = require("../controllers/postControllers");

const router = express.Router();

router.use(requireAuth);
router.route("/").get(getAllPosts);
router.route("/").post(createPost);

module.exports = router;
