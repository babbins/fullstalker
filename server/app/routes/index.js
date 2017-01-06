'use strict';
const express = require('express');
const router = express.Router();
module.exports = router;
const faker = require('faker');
const people = [
  {name: 'Ali Mahmoud', imgUrl: '/media/1610S/ali.png', address: faker.fake('{{address.streetAddress}}'), email: faker.fake('{{internet.email}}'), worth: faker.fake('{{finance.currencySymbol}} {{finance.amount}}')},
  {name: 'Jisoo Ryu', imgUrl: '/media/1701J/jisoo.png', address: faker.fake('{{address.streetAddress}}'), email: faker.fake('{{internet.email}}'), worth: faker.fake('{{finance.currencySymbol}} {{finance.amount}}')},
  {name: 'Tessa Park', imgUrl: '/media/1610S/tessa.png', address: faker.fake('{{address.streetAddress}}'), email: faker.fake('{{internet.email}}'), worth: faker.fake('{{finance.currencySymbol}} {{finance.amount}}')},
  {name: 'Sophia Chen', imgUrl: '/media/1701J/sophia.png', address: faker.fake('{{address.streetAddress}}'), email: faker.fake('{{internet.email}}'), worth: faker.fake('{{finance.currencySymbol}} {{finance.amount}}')},
  {name: 'Milad Nazeri', imgUrl: '/media/1610S/milad.png', address: faker.fake('{{address.streetAddress}}'), email: faker.fake('{{internet.email}}'), worth: faker.fake('{{finance.currencySymbol}} {{finance.amount}}')},
  {name: 'Joshua Maas-Howard', imgUrl: '/media/1610S/josh.png', address: faker.fake('{{address.streetAddress}}'), email: faker.fake('{{internet.email}}'), worth: faker.fake('{{finance.currencySymbol}} {{finance.amount}}')},
  {name: 'Kayla Fuchs', imgUrl: '/media/1610S/kayla.png', address: faker.fake('{{address.streetAddress}}'), email: faker.fake('{{internet.email}}'), worth: faker.fake('{{finance.currencySymbol}} {{finance.amount}}')},
  {name: 'Jeff Bruemmer', imgUrl: '/media/1610S/jeff_b.png', address: faker.fake('{{address.streetAddress}}'), email: faker.fake('{{internet.email}}'), worth: faker.fake('{{finance.currencySymbol}} {{finance.amount}}')},
  {name: 'Eliot Szwajkowski', imgUrl: '/media/1610S/eliot.png', address: faker.fake('{{address.streetAddress}}'), email: faker.fake('{{internet.email}}'), worth: faker.fake('{{finance.currencySymbol}} {{finance.amount}}')},
  {name: 'Emily Brown', imgUrl: '/media/1610S/emily.png', address: faker.fake('{{address.streetAddress}}'), email: faker.fake('{{internet.email}}'), worth: faker.fake('{{finance.currencySymbol}} {{finance.amount}}')},
  {name: 'Galen Corey', imgUrl: '/media/1610S/galen.png', address: faker.fake('{{address.streetAddress}}'), email: faker.fake('{{internet.email}}'), worth: faker.fake('{{finance.currencySymbol}} {{finance.amount}}')},
  {name: 'Lisa Veras', imgUrl: '/media/1610S/lisa.png', address: faker.fake('{{address.streetAddress}}'), email: faker.fake('{{internet.email}}'), worth: faker.fake('{{finance.currencySymbol}} {{finance.amount}}')},
  {name: 'Ally Cody', imgUrl: '/media/1701J/ally.png', address: faker.fake('{{address.streetAddress}}'), email: faker.fake('{{internet.email}}'), worth: faker.fake('{{finance.currencySymbol}} {{finance.amount}}')},
  {name: 'Andrew Gionfriddo', imgUrl: '/media/1701J/andrew.png', address: faker.fake('{{address.streetAddress}}'), email: faker.fake('{{internet.email}}'), worth: faker.fake('{{finance.currencySymbol}} {{finance.amount}}')},
  // {name: 'Cara Weber', imgUrl: '/media/1701J/cara.png', address: faker.fake('{{address.streetAddress}}'), email: faker.fake('{{internet.email}}'), worth: faker.fake('{{finance.currencySymbol}} {{finance.amount}}')},
  {name: 'Dillon Powers', imgUrl: '/media/1701J/dillon.png', address: faker.fake('{{address.streetAddress}}'), email: faker.fake('{{internet.email}}'), worth: faker.fake('{{finance.currencySymbol}} {{finance.amount}}')},
  {name: 'Freda Ding', imgUrl: '/media/1701J/freda.png', address: faker.fake('{{address.streetAddress}}'), email: faker.fake('{{internet.email}}'), worth: faker.fake('{{finance.currencySymbol}} {{finance.amount}}')},
  {name: 'Kathryn Guthrie', imgUrl: '/media/1701J/kat.png', address: faker.fake('{{address.streetAddress}}'), email: faker.fake('{{internet.email}}'), worth: faker.fake('{{finance.currencySymbol}} {{finance.amount}}')},
  {name: 'Mithun Selvaratnam', imgUrl: '/media/1701J/mithun.png', address: faker.fake('{{address.streetAddress}}'), email: faker.fake('{{internet.email}}'), worth: faker.fake('{{finance.currencySymbol}} {{finance.amount}}')},
  // {name: 'Nisreen Al-basha', imgUrl: '/media/1701J/' address: faker.fake('{{address.streetAddress}}'), email: faker.fake('{{internet.email}}'), worth: faker.fake('{{finance.currencySymbol}} {{finance.amount}}')},
  {name: 'Scout O\'Keefe', imgUrl: '/media/1701J/scout.png', address: faker.fake('{{address.streetAddress}}'), email: faker.fake('{{internet.email}}'), worth: faker.fake('{{finance.currencySymbol}} {{finance.amount}}')},
  {name: 'Stephanie Manwaring', imgUrl: '/media/1701J/stephanie.png', address: faker.fake('{{address.streetAddress}}'), email: faker.fake('{{internet.email}}'), worth: faker.fake('{{finance.currencySymbol}} {{finance.amount}}')},
  // {name: 'Tatiana Sutherland' address: faker.fake('{{address.streetAddress}}'), email: faker.fake('{{internet.email}}'), worth: faker.fake('{{finance.currencySymbol}}, {{finance.amount}}')},
  {name: 'Griffin G Telljohann', imgUrl: '/media/staff/griffin.png', address: '50 Riverside DR #APT 11B, New York, NY 10024', email: 'g.telljohann@gmail.com', worth: "🐦"}
];

router.get('/people', function (req, res, next) {
  //give all people
  res.send(people);
});
