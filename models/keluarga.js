"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HubunganKeluarga extends Model {
    static associate(models) {
      HubunganKeluarga.belongsTo(models.Anggota, { foreignKey: "anggota_id" });
    }
  }
  HubunganKeluarga.init(
    {
      hub_keluarga_id: {
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
      anggota_terkait_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "anggota",
          key: "anggota_id",
        },
      },
    },
    {
      sequelize,
      modelName: "HubunganKeluarga",
      tableName: "hubungan_keluarga",
      timestamps: false,
    }
  );
  return HubunganKeluarga;
};
