"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("keluargas", "orang_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "orangs",
        key: "orang_id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("keluargas", "orang_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "orangs",
        key: "orang_id",
      },
    });
  },
};
