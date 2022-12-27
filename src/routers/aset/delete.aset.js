const express = require("express");
const router = express.Router();
const { DaftarAset } = require("../../../models");

const deleteAset = async (req, res) => {
  try {
    const { daftar_aset_id } = req.params;
    const resGetAset = await DaftarAset.findOne({
      where: { daftar_aset_id },
    });

    if (!resGetAset)
      return res.status(404).send({ message: "aset tidak ditemukan" });

    const resDeleteAset = await resGetAset.destroy();

    if (!resDeleteAset)
      return res.status(400).send({ message: "Gagal menghapus aset" });

    res.status(200).send({ message: "Success menghapus data aset" });
  } catch (error) {
    return res.send({ message: "Something went wrong" });
  }
};

router.delete("/:daftar_aset_id", deleteAset);

module.exports = router;
