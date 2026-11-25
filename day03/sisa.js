import http from "node:http";
import mysql from "mysql2/promise";
import { fakerKO } from "@faker-js/faker";

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "gukbi",
  password: "1234",
});

const server = http.createServer(async (req, res) => {
  const { url } = req;
  res.setHeader("content-type", "text/plain; charset=utf-8");
  if (url == "/random") {
    const std100 = Array(10000)
      .fill(0)
      .map((v, i) => ({ name: fakerKO.person.fullName(), gender: i % 2 ? "남" : "여" }));

    const rows = std100.map((v) => [v.name, v.gender]);
    await pool.query("insert into students (name,gender) values ?", [rows]);
    res.end(JSON.stringify(rows));
  } else {
    res.end("ㅅㄱ");
  }
});

server.listen(3000, () => {
  console.log("on");
});
