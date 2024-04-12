// run `node index.js` in the terminal

console.log(`Hello Node.js`, process);

const express = require('express');
const app = express()
const path = require('path')

const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');
//read static files like HTML, CSS files
app.use(express.static(path.join(__dirname,'/src/public')));

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



app.get('/shukran', [hello, hello2], (req, res, next) => {
  
  res.send("<h1>Mpenzi unaenda nenda lote mama</h1>")
  console.log("Amani na Uhuru");
  next()

},(req, res) => {
  console.log("Raha tupate na ustawi");
})

app.get('/nenda', (req, res) => {
  res.render('sauti');
})

app.get('/siri', (req, res) => {
  res.sendFile(path.join(__dirname,'src','public','mbonyi.html'));
})
app.listen(port, () => {
  console.log("Ingwe yabaho");
})
