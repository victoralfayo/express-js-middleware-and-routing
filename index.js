// run `node index.js` in the terminal

console.log(`Hello Node.js`, process);

const express = require('express');
const app = express()
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;

const hello = function (req, res, next) {
  //res.send("<p>Yashamwagika hayazoleki haya ooh</p>")
  console.log("Wasalam")
  next();
}

const hello2 = function (req, res, next) {
  //res.send("<p>Mpenzi unaenda nilikuenzi vinoma noma</p>")
  console.log("Aleikum")
  next()
}

app.use(express.static(path.join(__dirname,'public')));

app.get('/shukran', [hello, hello2], (req, res, next) => {
  
  res.send("<h1>Mpenzi unaenda nenda lote mama</h1>")
  console.log("Amani na Uhuru");

},(req, res) => {
  console.log("Raha tupate na ustawi");
})

app.get('/nenda', (req, res) => {
  res.render('sauti');
})

app.listen(port, () => {
  console.log("Ingwe yabaho");
})
