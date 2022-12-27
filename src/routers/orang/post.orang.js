const express = require("express");
const router = express.Router();

const { Anggota, HubunganKeluarga } = require("../../../models");

const addNewMember = async (req, res, next) => {
  try {
    const { nama, jenis_kelamin, orangtua_id } = req.body;

    if (!(jenis_kelamin == "laki-laki" || jenis_kelamin == "perempuan")) {
      return res
        .status(400)
        .send({ message: "jenis kelamin harus laki-laki / perempuan" });
    }

    const resGetOrtu = await Anggota.findOne({
      where: { anggota_id: orangtua_id },
    });

    const addNewMember = await Anggota.create({
      nama,
      jenis_kelamin,
    });

    if (!addNewMember.dataValues)
      return res.status(500).send({ message: "Gagal menambahkan member baru" });

    const addRelation = await HubunganKeluarga.create({
      anggota_id: addNewMember.dataValues.anggota_id,
      anggota_terkait_id: resGetOrtu.dataValues.anggota_id,
    });

    res.status(200).send({
      message: "Success menambahkan member baru",
      data: addNewMember.dataValues,
    });
  } catch (error) {
    return res.status(500).send("something went wrong");
  }
};

router.post("/", addNewMember);

module.exports = router;
