const UserModel = require('../model/userModel');

// Fetch all users
exports.getAllUsers = (req, res) => {
  UserModel.getAll((err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
};

// Register a new user
exports.createUser = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  UserModel.create(username, password, (err) => {
    if (err) {
      if (err.message.includes('UNIQUE constraint failed')) {
        res.status(400).json({ message: 'Username already exists.' });
      } else {
        res.status(500).json({ error: err.message });
      }
    } else {
      res.status(201).json({ message: 'User registered successfully.' });
    }
  });
};

// Validate user (Login)
exports.validateUser = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  UserModel.findByUsernameAndPassword(username, password, (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (row) {
      res.json({ message: 'Login successful.', user: row });
    } else {
      res.status(401).json({ message: 'Invalid username or password.' });
    }
  });
};
