const express = require("express");
const router = express.Router();

const postAsetRouter = require("./post.aset");

router.use(postAsetRouter);

module.exports = router;
