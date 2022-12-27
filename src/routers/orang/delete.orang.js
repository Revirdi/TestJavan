const express = require("express");
const router = express.Router();

const { Anggota } = require("../../../models");

const deleteMember = async (req, res, next) => {
  try {
    const { anggota_id } = req.params;

    const resGetMember = await Anggota.findOne({
      where: { anggota_id },
    });

    let resDeleteMember = await resGetMember.destroy();

    if (!resDeleteMember)
      return res.status(400).send("Gagal menghapus data keluarga");

    res.status(200).send({ message: "Success menghapus data keluarga" });
  } catch (error) {
    return res.status(500).send("Something Went Wrong");
  }
};

router.delete("/:anggota_id", deleteMember);

module.exports = router;
