const db = require('../database/database');

class UserModel {
  // Fetch all users
  static getAll(callback) {
    db.all('SELECT id, username FROM users', [], callback);
  }

  // Create a new user
  static create(username, password, callback) {
    db.run(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, password],
      callback
    );
  }

  // Find a user by username and password
  static findByUsernameAndPassword(username, password, callback) {
    db.get(
      'SELECT id, username FROM users WHERE username = ? AND password = ?',
      [username, password],
      callback
    );
  }
}

module.exports = UserModel;
