const express = require("express");
const app = express();
const port: number = 3000;

app.get("/user", (req, res) => {
  // res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.send("Hello World! user wu");
});

app.get("/post", (req, res) => {
  res.send("hello post wuwu");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
