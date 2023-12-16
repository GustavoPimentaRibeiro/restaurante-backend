import { DataTypes } from "sequelize";
import db from "@/database/db";

const Restaurant = db.define(
  "restaurants",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    business_hours: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
);

export default Restaurant;
