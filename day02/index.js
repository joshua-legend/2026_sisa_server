import http from "node:http";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "juicy",
  password: "1234",
});

const dbServer = http.createServer(async (req, res) => {
  res.setHeader("content-type", "text/plain; charset=utf-8");

  const { url } = req;
  if (url == "/menus") {
    const [rows] = await pool.execute("select * from menus");
    res.end(JSON.stringify(rows));
  } else if (url == "/parttimers") {
    const [rows] = await pool.execute("select * from parttimers");
    res.end(JSON.stringify(rows));
  } else {
    res.end("웰컴 쥬시");
  }
});

dbServer.listen(3000, () => {
  console.log("웰컴 쥬시");
});
