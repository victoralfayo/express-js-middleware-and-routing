// run `node index.js` in the terminal

console.log(`Hello Node.js`, process);

const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

const hello = function (req, res, next)  {
  console.log("Wasalam")
  next();
}

const hello2 = function (req, res, next) {
  console.log("Aleikum")
  next()
}

app.get('/shukran', [hello, hello2], (req, res, next) => {
  console.log("Amani na Uhuru");
},(req, res) => {
  console.log("Raha tupate na ustawi");
})
