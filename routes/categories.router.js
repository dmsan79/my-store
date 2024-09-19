
const express = require('express');
const {faker} = require('@faker-js/faker');

const router = express.Router();

router.get('/:categoryID/products/:productID', (req, res) => {
  const {categoryID, productID} = req.params;
  res.json({
    categoryID,
    productID,
  });
})

module.exports = router;
