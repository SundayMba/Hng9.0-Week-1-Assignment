const express = require("express")

const app = express();
const port  = 3000;

app.get("/", (req, res) => {
  res.send({
    "slackUsername" :"Sunday Mba",
    "backend":true,
    "age":25,
    "bio":"male"
  })
})

app.listen(port, () => {
  console.log("app listening at port 3000");
})