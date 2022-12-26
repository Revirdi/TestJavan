const express = require("express");
const router = express.Router();

const { Orang, Keluarga } = require("../../../models");

const editMember = async (req, res, next) => {
  try {
    const { orang_id, nama, jenis_kelamin } = req.body;

    const resUpdateMember = await Orang.update(
      {
        nama,
        jenis_kelamin,
      },
      {
        where: { orang_id },
      }
    );
    if (!resUpdateMember.length)
      res.status(400).send("Gagal mengumbah data member");

    res.send({ message: "Success mengubah data" });
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};

router.put("/", editMember);

module.exports = router;
