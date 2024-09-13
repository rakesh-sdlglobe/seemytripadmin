const sequelize = require('../utils/database');
const User = require('./user');
const Station = require('./station');
const Train = require('./train');
const Route = require('./route');
const Seat = require('./seat');
const Booking = require('./booking');
const Payment = require('./payment');

const syncModels = async () => {
  await sequelize.sync({ force: true });
  console.log("All models were synchronized successfully.");
};

module.exports = {
  User,
  Station,
  Train,
  Route,
  Seat,
  Booking,
  Payment,
  syncModels
};
