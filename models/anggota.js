"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Anggota extends Model {
    static associate(models) {
      Anggota.hasMany(models.HubunganKeluarga, {
        foreignKey: "anggota_id",
        onDelete: "CASCADE",
        hooks: true,
      });
      Anggota.hasMany(models.Aset, {
        foreignKey: "anggota_id",
      });
    }
  }
  Anggota.init(
    {
      anggota_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jenis_kelamin: DataTypes.ENUM("laki-laki", "perempuan"),
    },
    {
      sequelize,
      modelName: "Anggota",
      tableName: "anggota",
      timestamps: false,
    }
  );
  return Anggota;
};
