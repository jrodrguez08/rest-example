const User = require('../models/userModel');
const databaseService = require('./helpers/databaseService');

module.exports.createUser = (user) => {
  return databaseService.createEntity(User, user);
};