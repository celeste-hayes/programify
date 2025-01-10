const express = require('express');
const { InspoCard } = require('./models');

const app = express();

app.get('/api/inspo-cards', async (req, res) => {
  try {
    const cards = await InspoCard.findAll();
    res.json(cards);
  } catch (error) {
    console.error('Error fetching inspo cards:', error);
    res.status(500).send('Server error');
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
