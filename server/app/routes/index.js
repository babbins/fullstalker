'use strict';
const express = require('express');
const router = express.Router();
module.exports = router;
const people = [
  {name: 'Ali Mahmoud', imgUrl: '/media/1610S/ali.png'},
  {name: 'Jisoo Ryu'},
  {name: 'Tessa Park', imgUrl: '/media/1610S/tessa.png'},
  {name: 'Sophia Chen', imgUrl: '/media/1701J/sophia.png'},
  {name: 'Milad Nazeri', imgUrl: '/media/1610S/milad.png'},
  {name: 'Joshua Maas-Howard', imgUrl: '/media/1610S/ali.png'},
  {name: 'Kayla Fuchs', imgUrl: '/media/1610S/kayla.png'},
  {name: 'Jeff Bruemmer', imgUrl: '/media/1610S/jeff_b.png'},
  {name: 'Eliot Szwajkowski', imgUrl: '/media/1610S/eliot.png'},
  {name: 'Emily Brown', imgUrl: '/media/1610S/emily.png'},
  {name: 'Galen Corey', imgUrl: '/media/1610S/galen.png'},
  {name: 'Lisa Veras', imgUrl: '/media/1610S/lisa.png'},
  {name: 'Ally Cody', imgUrl: '/media/1701J/ally.png'},
  {name: 'Andrew Gionfriddo', imgUrl: '/media/1701J/andrew.png'},
  {name: 'Cara Weber', imgUrl: '/media/1701J/cara.png'},
  {name: 'Dillion Powers', imgUrl: '/media/1701J/dillion.png'},
  {name: 'Freda Ding', imgUrl: '/media/1701J/freda.png'},
  {name: 'Kathryn Guthrie', imgUrl: '/media/1701J/kat.png'},
  {name: 'Mithun Selvaratnam', imgUrl: '/media/1701J/mithun.png'},
  // {name: 'Nisreen Al-basha', imgUrl: '/media/1701J/'},
  {name: 'Scout O\'Keefe', imgUrl: '/media/1701J/scout.png'},
  {name: 'Stephanie Manwaring', imgUrl: '/media/1701J/stephanie.png'}
  // {name: 'Tatiana Sutherland'},
];

router.get('/people', function (req, res, next) {
  //give all people
  res.send(people);
});
