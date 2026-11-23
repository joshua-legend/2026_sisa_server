import http from "node:http";

const server = http.createServer((request, response) => {
  response.end("hello my name is server");
});

server.listen(3000, () => {
  console.log("서버 대기 완료!");
});
