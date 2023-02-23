const express = require('express');
const path = require('path');
const rootDir = require('./utils/rootDir');
const bodyParser = require('body-parser');

// Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(rootDir, 'public')))


app.use('/admin', adminRoutes);
app.use(shopRoutes);

// 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})


app.listen(3000)