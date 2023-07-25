const Sequelize = require("sequelize");
const sequelize = new Sequelize("booking_app", "root", "yash@7890", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;

