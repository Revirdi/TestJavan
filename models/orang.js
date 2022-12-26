"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Orang.hasMany(models.Keluarga, {
        foreignKey: "orang_id",
        onDelete: "CASCADE",
        hooks: true,
      });
      Orang.hasMany(models.Aset, {
        foreignKey: "orang_id",
      });
    }
  }
  Orang.init(
    {
      orang_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nama: DataTypes.STRING,
      jenis_kelamin: DataTypes.ENUM("pria", "wanita"),
    },
    {
      sequelize,
      modelName: "Orang",
    }
  );
  return Orang;
};
