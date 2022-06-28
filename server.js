import express from "express";
import mysql from "mysql";

const app = express();
const port = 3044;

app.get("/", (req, res) => {
  res.send("<h1>Customer API</h1>");
});

app.get("/customers", (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "webuser",
    password: "passpass",
    database: "northwind",
  });
  connection.connect((err) => {
    if (err) throw err;
    const sql = "SELECT first_name, last_name, company FROM customers";
    connection.query(sql, (err, records) => {
      if (err) throw err;
      res.send(records);
    });
  });
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
