import http from "node:http";

const laterServer = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
  res.end("쥬씨코인 이민욱 윤끼리");
});

laterServer.listen(3000, () => {
  console.log("지각 따가리 on.");
});
