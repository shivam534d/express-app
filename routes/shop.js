const express = require('express');
const adminData = require('./admin');
const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {pageTitle: "Shop", path: "/", prods: products, hasProducts: products.length > 0, activeShop: true})
});

module.exports = router;