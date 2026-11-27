import http from "node:http";
import fs from "node:fs/promises";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "class",
  password: "1234",
});

http
  .createServer(async (req, res) => {
    const [rows] = await pool.query("select name, age from laters");
    const students = rows.map((v) => `<li>${v.name} - ${v.age}</li>`).join("");
    const html = await fs.readFile("later.html", "utf8");
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(html.replace("{{list}}", students));
  })
  .listen(3000, () => {
    console.log("웹페이지 따가리 on");
  });
