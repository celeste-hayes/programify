const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const SECRET_KEY = "OneTesterUp"; // Use a more secure secret key in production
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "signupnow",
  password: "MyNameElmo123",
  port: 5432,
});

app.post("/api/signup", async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const client = await pool.connect();
    const insertQuery = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id';
    const result = await client.query(insertQuery, [email, password]);
    client.release();

    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    console.error("Error saving user to the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const client = await pool.connect();
    const selectQuery = 'SELECT * FROM users WHERE email = $1 AND password = $2';
    const result = await client.query(selectQuery, [email, password]); // Corrected query
    client.release();

    if (result.rowCount > 0) {
      const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
      res.json({ token });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 5175;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
