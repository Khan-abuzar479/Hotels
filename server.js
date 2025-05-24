const { log } = require('console');
const express = require('express');
const app = express();
const PORT=process.env.PORT||3000

app.get('/', (req, res) => {
  res.send("hello world")
})

app.get('/Home', (req, res) => {
  res.send("Hello Abuzar khan kase ho ")
})
// this is our first programe in or life
app.listen(PORT, () => {
  console.log("Servre is runninng");
  
})