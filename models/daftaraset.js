"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DaftarAset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DaftarAset.belongsTo(models.Aset, { foreignKey: "daftar_aset_id" });
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
      nama: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "DaftarAset",
    }
  );
  return DaftarAset;
};
