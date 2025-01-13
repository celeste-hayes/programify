import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
    //Auth header from request
  const authHeader = req.headers.authorization;
  if (authHeader) {
    // Extract token from auth header
    const token = authHeader.split(' ')[1];
    // Secret key from env var.
    const secretKey = process.env.JWT_SECRET_KEY || '';
    // Verify token
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      return next();
    });
  } else {
    res.sendStatus(401); // Send unauth status if no auth header is present
  }
};