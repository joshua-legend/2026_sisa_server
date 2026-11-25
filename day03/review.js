import http from "node:http";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "gukbi",
  password: "1234",
});

const dbserver = http.createServer(async (req, res) => {
  res.setHeader("content-type", "text/plain; charset=utf-8");
  const [rows] = await pool.execute("select * from students");
  res.end(JSON.stringify(rows));
});

dbserver.listen(3000, () => {
  console.log("서버 온");
});
