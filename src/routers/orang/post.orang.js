const express = require("express");
const router = express.Router();

const { Orang, Keluarga } = require("../../../models");

const addNewMember = async (req, res, next) => {
  try {
    const { nama, jenis_kelamin, orangtua_id } = req.body;

    const resGetOrtu = await Orang.findOne({
      where: { orang_id: orangtua_id },
    });

    const addNewMember = await Orang.create({
      nama,
      jenis_kelamin,
    });

    const addRelation = await Keluarga.create({
      orang_id: addNewMember.dataValues.orang_id,
      orang_terkait_id: resGetOrtu.dataValues.orang_id,
      hubungan_keluarga: "anak",
    });

    if (!addRelation.dataValues)
      res.status(500).send({ message: "Gagal menambahkan member baru" });

    res.status(200).send({
      message: "Success menambahkan member baru",
      data: addNewMember.dataValues,
    });
  } catch (error) {
    res.status(500).send("something went wrong");
  }
};

router.post("/", addNewMember);

module.exports = router;
