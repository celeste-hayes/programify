import { Router } from 'express';
import bcrypt from 'bcrypt'; // Ensure bcrypt is imported
import jwt from 'jsonwebtoken';
import { User } from '../../models/index.js'; // Ensure the correct path to your User model

console.log('bcrypt imported:', bcrypt);

const router = Router();

// User signup route
export const register = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    console.log('Request body:', req.body);

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    console.log('No existing user found. Proceeding to hash password.');

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log('Password hashed. Creating new user.');

    const newUser = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName
    });

    console.log('New user created:', newUser);

    // Generate a token for the user
    const token = jwt.sign(
      { email: newUser.email, firstName: newUser.firstName, lastName: newUser.lastName },
      process.env.JWT_SECRET_KEY || 'SECRET_KEY',
      { expiresIn: '1h' }
    );

    return res.status(201).json({
      message: 'User created successfully',
      user: { email: newUser.email, firstName: newUser.firstName, lastName: newUser.lastName },
      token, // Include token in the response
    });

  } catch (error) {
    console.error('Error during signup:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

// POST - Register a new user
router.post('/signup', register);

export { router as authRouter };