"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Aset extends Model {
    static associate(models) {
      Aset.hasMany(models.DaftarAset, {
        foreignKey: "daftar_aset_id",
        onDelete: "CASCADE",
        hooks: true,
      });
      Aset.belongsTo(models.Anggota, { foreignKey: "anggota_id" });
    }
  }
  Aset.init(
    {
      data_aset_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      anggota_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "anggota",
          key: "anggota_id",
        },
      },
      daftar_aset_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "daftar_aset",
          key: "daftar_aset_id",
        },
      },
    },
    {
      sequelize,
      modelName: "Aset",
      tableName: "data_aset",
      timestamps: false,
    }
  );
  return Aset;
};
