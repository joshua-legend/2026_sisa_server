import http from "node:http";
import fs from "fs/promises";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "company",
  password: "1234",
});

http
  .createServer(async (req, res) => {
    if (req.url == "/") {
      const [rows] = await pool.query("select name, department from employees");
      const items = rows.map((v) => `<li>${v.name} - ${v.department}</li>`).join("");
      const html = await fs.readFile("yesterday.html", "utf8");
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(html.replace("{{list}}", items));
    } else if (req.url == "/style.css") {
      res.setHeader("Content-Type", "text/css");
      res.end(await fs.readFile("yesterday.css"));
    } else {
      res.statusCode = 404;
      res.end("ㅗ");
    }
  })
  .listen(3001, () => {
    console.log("윤끼리 on");
  });
