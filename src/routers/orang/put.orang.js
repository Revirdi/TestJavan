const express = require("express");
const router = express.Router();

const { Anggota } = require("../../../models");

const editMember = async (req, res, next) => {
  try {
    const { anggota_id, nama, jenis_kelamin } = req.body;

    const resUpdateMember = await Anggota.update(
      {
        nama,
        jenis_kelamin,
      },
      {
        where: { anggota_id },
      }
    );

    if (!resUpdateMember.length)
      return res.status(400).send("Gagal mengumbah data member");

    res.send({ message: "Success mengubah data" });
  } catch (error) {
    return res.status(500).send("Something went wrong");
  }
};

router.put("/", editMember);

module.exports = router;
