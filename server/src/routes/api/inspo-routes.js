// routes/api/inspo-routes.js
import { Router } from 'express';
import { Inspiration } from '../../models/index.js';

const router = Router();

// GET all inspiration cards
router.get('/inspo-cards', async (req, res) => {
  try {
    const cards = await Inspiration.findAll();
    res.json(cards);
  } catch (error) {
    console.error('Error fetching inspo cards:', error);
    res.status(500).send('Server error');
  }
});

// GET inspo cards for a specific category
router.get('/inspo-cards/:category', async (req, res) => {
  const { category } = req.params;
  try {
    const cards = await Inspiration.findAll({ where: { category } });
    res.json(cards);
  } catch (error) {
    console.error('Error fetching inspo cards for category:', error);
    res.status(500).send('Server error');
  }
});

export { router as inspoRouter };
