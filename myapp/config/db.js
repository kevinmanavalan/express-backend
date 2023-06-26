const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hotel-booking",
});

connection.connect((err) => {
  if (err) {
    console.log("Some error occured while connecting to the database:", err);
    return;
  }
  console.log("Connected to the database!");
});

module.exports = connection;
