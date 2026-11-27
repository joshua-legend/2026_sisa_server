import http from "node:http";

const menu = [
  { name: "김밥", price: 4500 },
  { name: "우동", price: 6500 },
  { name: "라면", price: 5500 },
];

http
  .createServer((req, res) => {
    const { method } = req;

    if (method == "GET") {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(JSON.stringify(menu));
    } else if (method == "POST") {
      menu.push({ name: "김밥", price: 5000 });
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.end(`메뉴 갯수: ${menu.length}`);
    } else if (method == "DELETE") {
      menu.shift();
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.end(`메뉴 갯수: ${menu.length}`);
    } else {
      res.end("ㅗ");
    }
  })
  .listen(3000, () => {
    console.log("따까리 on");
  });
