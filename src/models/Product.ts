import { DataTypes } from "sequelize";
import db from "@/database/db";
import Restaurant from "@/models/Restaurant";

const Product = db.define(
  "products",
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
    category: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    photo: DataTypes.STRING(255),
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    restaurant_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: Restaurant,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  },
);

export default Product;
