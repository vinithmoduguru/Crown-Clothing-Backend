import { Request, Response } from "express";
import Product, { IProduct } from "../models/productModel";

export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await Product.find(
      { isActive: true },
      { title: 1, description: 1, price: 1, imageUrl: 1, categoryId: 1 }
    ).populate("categoryId", "title");
    // Add Category title to each product
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { title, description, price, imageUrl, categoryId }: Partial<IProduct> = req.body;
  try {
    const newProduct = await Product.create({
      title,
      description,
      price,
      imageUrl,
      categoryId,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};