const express = require("express");
const router = express.Router();

const postOrangRouter = require("./post.orang");
const putOrangRouter = require("./put.orang");
const deleteOrangRouter = require("./delete.orang");

router.use(postOrangRouter);
router.use(putOrangRouter);
router.use(deleteOrangRouter);

module.exports = router;
