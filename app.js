const express = require('express');
const path = require('path');
const rootDir = require('./utils/rootDir');
const bodyParser = require('body-parser');

// Routes
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// const expressHandlebars = require('express-handlebars');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(rootDir, 'public')))

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use('/admin', adminData.routes);
app.use(shopRoutes);

// 404
app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: "404 | Page not Found"})
})


app.listen(3000)