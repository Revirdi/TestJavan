const express = require("express");
const router = express.Router();

const getPrice = require("../../services/aset.service");
const { Aset } = require("../../../models");

const addNewAset = async (req, res, next) => {
  try {
    const { nama } = req.body;
    const harga = getPrice(nama);
    const addAset = Aset.create({ nama, harga });

    if (!addAset.dataValues)
      res.status(500).send({ message: "Gagal menambahkan aset baru" });

    res.status(200).send({ message: "Success menambahkan aset baru" });
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};

router.post("/", addNewAset);

module.exports = router;
