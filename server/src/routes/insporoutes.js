const express = require('express');
const { InspoCard } = require('../models/Inspiration');

const router = express.Router();

// Route to fetch all inspiration cards
router.get('/inspo-cards', async (req, res) => {
  try {
    const cards = await InspoCard.findAll();
    res.json(cards);  // Send the retrieved cards as JSON
  } catch (error) {
    console.error('Error fetching inspo cards:', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
