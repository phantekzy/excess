import { where } from "sequelize";
import { Product } from "../models/Product";

export const fetchAllProducts = async () => {
  return await Product.findAll();
};

export const adjustStock = async (id: string, quantity: number) => {
  const [affectedCount, updatedProducts] = await Product.update(
    { quantity },
    {
      where: { id },
      returning: true,
    },
  );
  return updatedProducts[0];
};
