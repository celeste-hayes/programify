const express = require('express');
const jwt = require('jsonwebtoken');
const { User } = require('../../models/User');
const { SECRET_KEY } = process.env;

const router = express.Router();

// User signup route
router.post('/signup', async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    const newUser = await User.create({
      email,
      password, 
      firstName,
      lastName,
    });

    const token = jwt.sign(
      { email: newUser.email, id: newUser.id },
      SECRET_KEY,
      { expiresIn: '1h' }
    );

    res.status(201).json({ token });
  } catch (error) {
    console.error('Error signing up user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// User login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    if (password !== user.password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { email: user.email, firstName: user.firstName, lastName: user.lastName },
      SECRET_KEY,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
