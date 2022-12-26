"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Asets", {
      aset_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orang_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "orangs",
          key: "orang_id",
        },
      },
      daftar_aset_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "daftarasets",
          key: "daftar_aset_id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Asets");
  },
};
