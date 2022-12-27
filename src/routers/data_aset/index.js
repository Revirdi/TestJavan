const express = require("express");
const router = express.Router();

const postDataAsetRouter = require("./post.dataAset");
const deleteDataAsetRouter = require("./delete.dataAset");
const getDataAsetRouter = require("./get.dataAset");

router.use(postDataAsetRouter);
router.use(deleteDataAsetRouter);
router.use(getDataAsetRouter);

module.exports = router;
