"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Aset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Aset.hasMany(models.DaftarAset, { foreignKey: "daftar_aset_id" });
    }
  }
  Aset.init(
    {
      aset_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      orang_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "orangs",
          key: "orang_id",
        },
      },
      daftar_aset_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "daftarasets",
          key: "daftar_aset_id",
        },
      },
    },
    {
      sequelize,
      modelName: "Aset",
    }
  );
  return Aset;
};
