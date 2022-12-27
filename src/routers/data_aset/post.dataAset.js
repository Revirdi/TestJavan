const express = require("express");
const router = express.Router();

const { Aset, DaftarAset } = require("../../../models");

const addNewMemberAset = async (req, res) => {
  try {
    const { anggota_id, nama_aset } = req.body;

    const resGetAset = await DaftarAset.findOne({
      where: { nama_aset },
    });

    if (!resGetAset)
      return res.status(404).send({ message: "nama aset tidak ditemukan" });

    const createNewMemberAset = await Aset.create({
      anggota_id,
      daftar_aset_id: resGetAset.dataValues.daftar_aset_id,
    });

    res.send({
      message: "Success menambahkan aset",
      data: createNewMemberAset,
    });
  } catch (error) {
    return res.send({ message: "Something went wrong" });
  }
};

router.post("/", addNewMemberAset);

module.exports = router;
