"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Keluarga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Keluarga.belongsTo(models.Orang, { foreignKey: "orang_id" });
    }
  }
  Keluarga.init(
    {
      keluarga_id: {
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
      orang_terkait_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "orangs",
          key: "orang_id",
        },
      },
      hubungan_keluarga: {
        type: DataTypes.ENUM("orang_tua", "anak"),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Keluarga",
    }
  );
  return Keluarga;
};
