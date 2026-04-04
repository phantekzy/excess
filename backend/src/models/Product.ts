import { DataTypes } from "sequelize";
import sequelize from "../config/database";

export const Product = sequelize.define("product", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  sku: { type: DataTypes.STRING, unique: true },
  name: { type: DataTypes.STRING, allowNull: false },
  quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
  price: { type: DataTypes.DECIMAL(10, 2), defaultValue: 0.00 },
});
