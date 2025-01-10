require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize, InspoCard } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/inspo-cards', async (req, res) => {
  try {
    const inspoCards = await InspoCard.findAll(); 
    res.json(inspoCards);
  } catch (err) {
    console.error('Error fetching inspo cards:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

sequelize.sync({ force: false })
  .then(() => {
    console.log('Connected to database successfully.');
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
  });

