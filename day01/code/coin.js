import fs from "node:fs/promises";
import http from "node:http";

const goodServer = http.createServer(async (req, res) => {
  const good = await fs.readFile("txt/goodcoin.txt", "utf-8");
  res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
  res.end(good);
});
const badServer = http.createServer(async (req, res) => {
  const bad = await fs.readFile("txt/badcoin.txt", "utf-8");
  res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
  res.end(bad);
});
goodServer.listen(3000, () => {
  console.log("굿 서버");
});
badServer.listen(3001, () => {
  console.log("배드 서버");
});
