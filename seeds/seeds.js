const { User } = require("../models");

const sequelize = require("../config/connection");

const userData = [
  {
    username: "echo",
    email: "echo@coolguy.org",
    password: "tutor",
  },
  {
    username: "cday",
    email: "cday@notcoolguy.org",
    password: "student",
  },
];

const seedData = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userData, { individualHooks: true });
  process.exit(0);
};

seedData();
