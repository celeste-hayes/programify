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

// Get by id inspo cards
router.get('/inspo-cards/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const card = await Inspiration.findByPk(id);
    if (!card) {
      return res.status(404).json({ error: 'Inspiration card not found' });
    }
    res.json(card);
  } catch (error) {
    console.error('Error fetching inspo card by id:', error);
    res.status(500).send('Server error');
  }
});

// GET inspo cards for a specific category
router.get('/inspo-cards/category/:category', async (req, res) => {
  const { category } = req.params;
  try {
    const cards = await Inspiration.findAll({ where: { category } });
    res.json(cards);
  } catch (error) {
    console.error('Error fetching inspo cards for category:', error);
    res.status(500).send('Server error');
  }
});

// POST a new inspiration card
router.post('/inspo-cards', async (req, res) => {
  const { title, description, category, text } = req.body;
  try {
    const newCard = await Inspiration.create({ title, description, category });
    res.status(201).json(newCard);
  } catch (error) {
    console.error('Error creating new inspo card:', error);
    res.status(500).send('Server error');
  }
});

export { router as inspoRouter };
