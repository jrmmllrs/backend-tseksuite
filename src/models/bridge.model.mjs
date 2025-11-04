import { DataTypes } from "sequelize";

export default (sequelize) =>
  sequelize.define(
    "Bridge",
    {
      bridge_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      examiner_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "examiners",
          key: "examiner_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      quiz_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "quizzes",
          key: "quiz_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      result_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "results",
          key: "result_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    },
    {
      tableName: "bridges",
      timestamps: false,
    }
  );
