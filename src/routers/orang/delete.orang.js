const express = require("express");
const router = express.Router();

const { Orang, Keluarga } = require("../../../models");

const deleteMember = async (req, res, next) => {
  try {
    const { orang_id } = req.params;

    // const resGetMember = await Orang.destroy({
    //   where: { orang_id },
    // });

    const resGetMember = await Orang.findOne({
      where: { orang_id },
    });

    let resDeleteMember = await resGetMember.destroy();

    if (!resDeleteMember.dataValues)
      res.status(400).send("Gagal menghapus data keluarga");

    res.status(200).send({ message: "Success menghapus data keluarga" });
  } catch (error) {
    res.status(500).send("Something Went Wrong");
  }
};

router.delete("/:orang_id", deleteMember);

module.exports = router;
