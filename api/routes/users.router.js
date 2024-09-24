const express = require('express');
const {faker} = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const {limit, offset} = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  }else {
    res.send('No hay parametros');
  }
});

router.get('/:personID', (req, res) => {
  const {personID} = req.params;
  res.json({
    personID,
    name: 'Diego',
    secondName: 'Martin',
    lastName: 'Sanchez',
    country: 'Argentina',
    town : 'Coronel Baigorria'
  });
})

module.exports = router;
