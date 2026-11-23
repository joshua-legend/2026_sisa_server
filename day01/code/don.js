import fs from "node:fs/promises";
import http from "node:http";

// fs.readFile("txt/don.txt", "utf-8");
const server = http.createServer(async (req, res) => {
  const menu = await fs.readFile("txt/don.txt", "utf-8");
  res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
  res.end(menu);
});
server.listen(3000, () => {
  console.log("돈치킨치킨");
});
