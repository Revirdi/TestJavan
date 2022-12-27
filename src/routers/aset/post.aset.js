const express = require("express");
const router = express.Router();

const getPrice = require("../../services/aset.service");
const { DaftarAset } = require("../../../models");

const addNewAset = async (req, res, next) => {
  try {
    const { nama_aset } = req.body;
    const harga = await getPrice(nama_aset);
    if (!harga)
      return res.status(403).send({ message: "Data aset tidak valid" });

    const addAset = await DaftarAset.create({ nama_aset, harga });

    if (!addAset.dataValues)
      return res.status(500).send({ message: "Gagal menambahkan aset baru" });

    res.status(200).send({ message: "Success menambahkan aset baru" });
  } catch (error) {
    return res.status(500).send("Something went wrong");
  }
};

const addNewMemberAset = async (req, res) => {
  const { anggota_id, daftar_aset_id } = req.body;
};

router.post("/", addNewAset);
router.post("/member", addNewMemberAset);

module.exports = router;
