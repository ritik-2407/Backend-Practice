import { Product } from "../types/product.types";

let products: Product[] = [
  { id: 1, name: "Laptop", price: 54999 },
  { id: 2, name: "Smartphone", price: 24999 },
  { id: 3, name: "Headphones", price: 2999 },
  { id: 4, name: "Keyboard", price: 1499 },
  { id: 5, name: "Mouse", price: 799 },
  { id: 6, name: "Monitor", price: 12999 },
  { id: 7, name: "Tablet", price: 18999 },
  { id: 8, name: "Smartwatch", price: 4999 },
  { id: 9, name: "Speaker", price: 3499 },
  { id: 10, name: "Power Bank", price: 1199 },
];

let id = 10;


export const getAllProductsArray = () => {
  return products;
};

export const getSpecificProductById = (id: number) => {
  return products.find((p) => p.id === id);
};

export const createProduct = (data: Product) => {
  const { name, price } = data;

  const temp = {
    id: ++id,
    name: name,
    price: price,
  };

  products.push(temp);

  return temp;
};

export const editProduct = (id: number, data: Product) => {
  const { name, price } = data;

  const product = products.find((p) => p.id === id);

  if (product) {
    product.name = name;
    product.price = price;
  }

  return product;
};

export const deleteProductById = (idx: number) => {
  const product = products.find((p) => p.id === idx);
  const index = products.findIndex((p) => p.id === idx);

  if (index !== -1) {
    products.splice(index, 1);
  }

  return product;
};
