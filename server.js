import express from "express";

const app = express();
const port = 3044;

app.get("/", (req, res) => {
  res.send("<h1>Customer API</h1>");
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
