const express = require("express");
const router = express.Router();
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../../models");

const getTotalAset = async (req, res) => {
  const test = await sequelize.query(
    `select 
    anggota.nama as nama, 
    ifnull(sum(daftar_aset.harga), 0) as total_aset 
    from anggota 
    left join data_aset using(anggota_id) 
    left join daftar_aset using(daftar_aset_id) 
    group by anggota_id`,
    {
      type: QueryTypes.SELECT,
    }
  );
  res.status(200).send(test);
};

router.get("/", getTotalAset);

module.exports = router;
