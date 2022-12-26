const express = require("express");
const router = express.Router();
const { QueryTypes } = require("sequelize");
const getPrice = require("../../services/aset.service");

const { Orang, Keluarga, Aset, sequelize } = require("../../../models");

const addNewMember = async (req, res, next) => {
  try {
    const { nama, jenis_kelamin, orangtua_id } = req.body;

    const resGetOrtu = await Orang.findOne({
      where: { orang_id: orangtua_id },
      include: { all: true, nested: true },
    });
    // let farid = await getPrice("Iphone X");
    // console.log(farid);

    // const test = await sequelize.query(
    //   `select orangs.nama as nama, daftarasets.nama as nama_aset, count(daftarasets.nama) as total_aset from orangs join asets using(orang_id) join daftarasets using(daftar_aset_id) group by nama`,
    //   {
    //     type: QueryTypes.SELECT,
    //   }
    // );

    // console.log(test);

    const addNewMember = await Orang.create({
      nama,
      jenis_kelamin,
    });

    if (!addNewMember.dataValues)
      res.status(500).send({ message: "Gagal menambahkan member baru" });

    const addRelation = await Keluarga.create({
      orang_id: addNewMember.dataValues.orang_id,
      orang_terkait_id: resGetOrtu.dataValues.orang_id,
      hubungan_keluarga: "anak",
    });

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
