const express = require("express");
const router = express.Router();

const postAsetRouter = require("./post.aset");
const putAsetRouter = require("./put.aset");
const deleteAsetRouter = require("./delete.aset");

router.use(postAsetRouter);
router.use(putAsetRouter);
router.use(deleteAsetRouter);

module.exports = router;
