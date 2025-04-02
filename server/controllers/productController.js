import { ProductModel } from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;

    const productId = await ProductModel.createProduct(name, description, price, stock);
    
    res.json({ message: "Product created successfully", productId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { product_id } = req.params;
    const { name, description, price, stock } = req.body;

    await ProductModel.updateProduct(product_id, name, description, price, stock);

    res.json({ message: "Product updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { product_id } = req.params;
    
    await ProductModel.deleteProduct(product_id);

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
