const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const jwt = require('jsonwebtoken');

const app = express();
const cors = require('cors');
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tekweb_db" // sesuaikan dengan konfigurasi database Anda
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.stack);
    return;
  }
  console.log("Connected successfully to MySql server");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware autentikasi
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const authToken = token.split(' ')[1];
  try {
    const decoded = jwt.verify(authToken, 'yourSecretKey');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Please enter Username and Password!');
  }

  connection.query('SELECT * FROM login WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (err) {
      console.error('Error executing login query:', err);
      return res.status(500).send('Internal Server Error');
    }

    if (results.length > 0) {
      const user = results[0];
      const token = jwt.sign({ username: user.username }, 'yourSecretKey', { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).send('Incorrect Username or Password!');
    }
  });
});

app.get("/", authMiddleware, (req, res) => {
  res.send("Login Success");
});

app.post("/register", (req, res) => {
  const { username, password, name, email } = req.body;

  if (!username || !password || !name || !email) {
    return res.status(400).send("Please enter Username, Password, Name, and Email!");
  }

  connection.query(
    'INSERT INTO login (username, password, name, email) VALUES (?, ?, ?, ?)',
    [username, password, name, email],
    (err, results) => {
      if (err) {
        console.error('Error registering user:', err);
        return res.status(500).send("Failed to register. Please try again.");
      }
      res.status(200).send("Registration successful!");
    }
  );
});

app.post('/comments', authMiddleware, (req, res) => {
  const { comment } = req.body;
  
  if (!comment) {
    return res.status(400).send('Comment cannot be empty');
  }

  connection.query(
    'INSERT INTO comments (comment) VALUES (?)',
    [comment],
    (err, results) => {
      if (err) {
        console.error('Error saving comment:', err);
        return res.status(500).send('Error saving comment');
      }
      res.status(200).send('Comment saved');
    }
  );
});

app.listen(8080, () => {
  console.log("Server started on PORT 8080");
});
