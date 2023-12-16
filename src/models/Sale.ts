import { DataTypes } from "sequelize";
import db from "@/database/db";
import Product from "@/models/Product";

const Sale = db.define(
  "sales",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    promotional_price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    valid_days: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: Product,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  },
);

export default Sale;
