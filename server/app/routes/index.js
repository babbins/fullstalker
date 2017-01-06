'use strict';
const express = require('express');
const router = express.Router();
module.exports = router;
const people = [
  {name: 'Ali Mahmoud'},
  {name: 'Jisoo Ryu'},
  {name: 'Tessa Park'},
  {name: 'Sophia Chen'},
  {name: 'Milad Nazeri'},
  {name: 'Joshua Maas-Howard'},
  {name: 'Kayla Fuchs'},
  {name: 'Jeff Bruemmer'},
  {name: 'Eliot Szwajkowski'},
  {name: 'Emily Brown'},
  {name: 'Galen Corey'},
  {name: 'Lisa Veras'},
  {name: 'Ally Cody'},
  {name: 'Andrew Gionfriddo'},
  {name: 'Cara Weber'},
  {name: 'Dillion Powers'},
  {name: 'Freda Ding'},
  {name: 'Jeff Petriello'},
  {name: 'Kathryn Guthrie'},
  {name: 'Mithun Selvaratnam'},
  {name: 'Nisreen Al-basha'},
  {name: 'Scout O\'Keefe'},
  {name: 'Stephanie Manwaring'},
  {name: 'Tatiana Sutherland'},
];

router.get('/people', function (req, res, next) {
  //give all people
  res.send(people);
});
