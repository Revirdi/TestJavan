const express = require("express");
const router = express.Router();
const { Aset } = require("../../../models");

const deleteDataAset = async (req, res) => {
  try {
    const { data_aset_id } = req.params;

    const deleteDataAset = await Aset.destroy({ where: { data_aset_id } });

    if (!deleteDataAset)
      return res.status(400).send({ message: "gagal menghapus data aset" });

    res.status(200).send({ message: "Success menghapus data aset" });
  } catch (error) {
    return res.send({ message: "Something went wrong" });
  }
};

router.delete("/:data_aset_id", deleteDataAset);

module.exports = router;
