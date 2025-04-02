// back/server/routes/orders.js
import express from 'express';
import Order from '../models/Order.js'; // Модуль має бути імпортований з .js розширенням

const router = express.Router();

// Отримати всі замовлення
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Створити нове замовлення
router.post('/', async (req, res) => {
  const { productId, quantity, userId } = req.body;
  try {
    const newOrder = new Order({ productId, quantity, userId });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
