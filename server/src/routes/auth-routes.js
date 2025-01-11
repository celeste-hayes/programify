import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.js';
import bcrypt from 'bcrypt';

const router = Router();

// User login route
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ where: { email } });

    // Check if user exists
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check if the password is valid using bcrypt
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your_secret_key'; // Default for dev
    const token = jwt.sign(
      { email: user.email, firstName: user.firstName, lastName: user.lastName },
      SECRET_KEY,
      { expiresIn: '1h' }
    );

    // Return the token to the client
    return res.json({ token });

  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
};

// User signup route
export const register = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user with hashed password
    const newUser = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName
    });

    // Send success response
    return res.status(201).json({
      message: 'User created successfully',
      user: { email: newUser.email, firstName: newUser.firstName, lastName: newUser.lastName }
    });

  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
};

// POST - Login existing user
router.post('/login', login);

// POST - Register a new user
router.post('/signup', register);

export default router;  // Default export