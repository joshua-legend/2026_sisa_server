import http from "node:http";

const menus = [
  { name: "김밥", price: 4500 },
  { name: "우동", price: 6500 },
  { name: "라면", price: 5500 },
];

http
  .createServer((req, res) => {
    const { method } = req;
    res.setHeader("Content-Type", "application/json; charset=utf-8");

    if (method == "GET") {
      res.end(JSON.stringify(menus));
    } else if (method == "POST") {
      res.end("ㅗ");
    } else if (method == "DELETE") {
      res.end("ㅗ");
    } else {
      res.end("ㅗ");
    }
  })
  .listen(3000, () => {});
