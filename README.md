# MySQL

## installing MySQL

      sudo apt update
      sudo apt install mysql-server

      sudo msql

        -->mysql>
        ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'rootroot';
        quit or exit

      sudo mysql_secure_installation

## Loading database

      mkdir northwindSetup (user/northwindSetup)

        northwind.sql
        northwind-data.sql

      sudo mysql -p
        -->mysql>
        SHOW DATABASES;
        CREATE DATABASE northwind;
        SHOW DATABASES;
        USE northwind;
        SOURCE northwind.sql
        SHOW -TABLES;`
        SELECT * FROM customers; (empty)
        SOURCE northwind-data.sql
        SELECT * FROM customers;
        SELECT company,last_name,first_name FROM customers;

## creating secure webuser

        SELECT User FROM mysql.user;
        CREATE USER webuser@localhost IDENTIFIED BY 'passpass';
        revoke all privileges on *.* from webuser@localhost;
        GRANT SELECT on *.* TO webuser@localhost
        ALTER USER webuser@localhost IDENTIFIED WITH mysql_native_password BY 'passpass';
        SELECT User FROM mysql.user;

## access with webuser@localhost

        mysql -u webuser -p
        SHOW DATABASES;
        use northwind;
        SHOW TABLES;
        SELECT \* FROM products;
        DESCRIBE products;
        SELECT id,product_name FROM products;
        INSERT INTO products (product_name) VALUES ("Product 888");

## creating SQL DATABASE

- Free SQL Database[https://www.freesqldatabase.com/]

# Backend With Expressand MySQL

        import express from "express";
        import mysql from "mysql";



        const app = express();
        const port = 3044;

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
