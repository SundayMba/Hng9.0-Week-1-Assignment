const express = require("express")

const app = express();
const port  = 3000;

app.get("/", (req, res) => {
  res.send({
    "slackUsername" :"Sunday Mba",
    "backend":true,
    "age":25,
    "bio":"I love programming, i'm from Nigeria. everyday, i always try to work on a programming challenge"
  })
})

app.listen(port, () => {
  console.log("app listening at port 3000");
})