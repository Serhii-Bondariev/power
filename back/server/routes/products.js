import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// Отримати всі продукти
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Створити новий продукт
router.post('/', async (req, res) => {
  const { name, price, description, image, category, brand } = req.body;
  try {
    const newProduct = new Product({ name, price, description, image, category, brand });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;  // Експортуємо за замовчуванням
