// back/server/routes/wishlist.js
import express from 'express';
import Product from '../models/Product.js'; // Модуль має бути імпортований з .js розширенням

const router = express.Router();

// Тимчасовий маршрут, щоб уникнути помилки
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Wishlist route' });
});

// Отримати всі продукти
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Створити новий продукт
router.post('/products', async (req, res) => {
  const { name, price } = req.body;
  try {
    const newProduct = new Product({ name, price });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
// Після створення маршруту /api/wishlist/products, ви можете виконати запити POST і GET на цей маршрут, щоб створити нові продукти та отримати всі продукти з бази даних.