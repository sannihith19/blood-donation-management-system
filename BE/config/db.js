import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "oooHcoM@0812",
  database: "blood_donation"
});

export default db;
