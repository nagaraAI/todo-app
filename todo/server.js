// index.html を配信するだけの簡易サーバー
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 5173;

http.createServer((req, res) => {
  fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("読み込みに失敗しました");
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(data);
  });
// 127.0.0.1 に限定し、この PC 以外からは接続できないようにする
}).listen(PORT, "127.0.0.1", () => console.log(`http://localhost:${PORT}`));
