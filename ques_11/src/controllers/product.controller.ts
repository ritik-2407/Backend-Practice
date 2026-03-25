import { NextFunction, Request, Response } from "express";
import {
  createProduct,
  deleteProductById,
  editProduct,
  getAllProductsArray,
  getSpecificProductById,
} from "../services/product.services.";

export const getAllProducts = (req: Request, res: Response) => {
  const result = getAllProductsArray();
  res.status(200).json(result);
};

export const getSpecificProduct = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = getSpecificProductById(id);
  res.status(200).json(result);
};

export const addProduct = (req: Request, res: Response) => {
  const data = req.body;
  const result = createProduct(data);

  res.status(200).json(result);
};

export const updateProduct = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = req.body;
  const result = editProduct(id, data);

  res.status(200).json(result);
};

export const deleteProduct = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = deleteProductById(id);

  res.status(200).send("deleted").json(result);
};
