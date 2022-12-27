const express = require("express");
const router = express.Router();
const { DaftarAset } = require("../../../models");

const editAset = async (req, res) => {
  const { daftar_aset_id, nama_aset, harga } = req.body;

  const resEditAset = await DaftarAset.update(
    {
      nama_aset,
      harga,
    },
    {
      where: { daftar_aset_id },
    }
  );

  if (!resEditAset.length)
    return res.status(400).send("Gagal mengumbah data aset");

  res.send({ message: "Success mengubah data asett" });
};

router.put("/", editAset);

module.exports = router;
