import mysql from "mysql2"
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Root",
    database: "blog_db"
})