const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use('/', (req, res, next) => {
  console.log('1st Middleware')
  next();
});

app.get('/add-product', (req, res, next) => {
  res.send(`
    <form method="POST" action="/product">
    <input name="title">
    <button type="Submit">Send</button>
    </form>
  `)
});

app.post('/product', (req, res,next) => {
  console.log(req.body);
  res.redirect('/');
})

app.use('/', (req, res, next) => {
  res.send('<h1>Main Text</h1>')
});

app.listen(3000)