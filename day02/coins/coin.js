import http from "node:http";
import fs from "node:fs/promises";

const coin = http.createServer(async (req, res) => {
  const { url } = req;
  res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
  if (url == "/good") {
    const good = await fs.readFile("good.txt", "utf-8");
    res.end(good);
  } else if (url == "/bad") {
    const bad = await fs.readFile("bad.txt", "utf-8");
    res.end(bad);
  } else {
    res.end("ㅗ");
  }
});

coin.listen(3000, () => {
  console.log("코인 오픈");
});
