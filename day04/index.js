import mysql from "mysql2/promise";
import http from "node:http";

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "company",
  password: "1234",
});

http
  .createServer(async (req, res) => {
    const { url } = req;
    res.setHeader("content-type", "text/plain; charset=utf-8");
    if (url == "/employees") {
      const [data] = await pool.execute("select * from employees");
      res.end(JSON.stringify(data));
    } else {
      res.end("시사 회사");
    }
  })
  .listen(3000, () => {
    console.log("따까리 on");
  });
