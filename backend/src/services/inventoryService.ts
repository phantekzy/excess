import { Product } from "../models/Product";

export const fetchAllProducts = async () => {
  return await Product.findAll();
};

export const adjustStock = async (id: string, quantity: number) => {
  return await Product.update({ quantity }, { where: { id } });
};

// REDO THIS AND UNDERSTAND IT
