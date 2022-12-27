"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DaftarAset extends Model {
    static associate(models) {
      DaftarAset.hasMany(models.Aset, { foreignKey: "daftar_aset_id" });
    }
  }
  DaftarAset.init(
    {
      daftar_aset_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nama_aset: DataTypes.STRING,
      harga: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "DaftarAset",
      tableName: "daftar_aset",
      timestamps: false,
    }
  );
  return DaftarAset;
};
