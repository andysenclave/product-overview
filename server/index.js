const express = require('express');

const app = express();

app.get('/ok', (req, res) => {
  res.write('server works fine');
  res.end();
});

app.get('/api/products', (req, res) => {
  const products = [
    {
      "tags": [
        "elit",
        "ut",
        "laborum",
        "aliquip",
        "anim"
      ],
      "registered": "Tuesday, February 6, 2018 8:16 PM",
      "about": "Sint commodo ea quis exercitation do ex officia ea esse.",
      "quantity": 31,
      "imageUri": "http://placehold.it/32x32?text=CORPORANA",
      "price": "$1,003.85",
      "isAvailable": false,
      "name": "CORPORANA",
      "_id": "5ac0f8e3c3516665c1083099"
    },
    {
      "tags": [
        "nulla",
        "veniam",
        "incididunt",
        "eiusmod",
        "tempor"
      ],
      "registered": "Saturday, January 21, 2017 6:41 AM",
      "about": "Sint cillum occaecat dolore velit veniam incididunt duis do nostrud amet cupidatat aute.",
      "quantity": 34,
      "imageUri": "http://placehold.it/32x32?text=HOMELUX",
      "price": "$1,925.40",
      "isAvailable": true,
      "name": "HOMELUX",
      "_id": "5ac0f8e3f13c9fb10d2c2b42"
    },
    {
      "tags": [
        "est",
        "ad",
        "proident",
        "exercitation",
        "reprehenderit"
      ],
      "registered": "Monday, May 15, 2017 6:31 PM",
      "about": "Deserunt in non proident voluptate.",
      "quantity": 29,
      "imageUri": "http://placehold.it/32x32?text=NIKUDA",
      "price": "$2,151.61",
      "isAvailable": false,
      "name": "NIKUDA",
      "_id": "5ac0f8e372fc5eb0528ba733"
    },
    {
      "tags": [
        "non",
        "magna",
        "quis",
        "cillum",
        "Lorem"
      ],
      "registered": "Monday, August 7, 2017 8:34 AM",
      "about": "Laborum culpa deserunt nulla sit ullamco dolore.",
      "quantity": 27,
      "imageUri": "http://placehold.it/32x32?text=PEARLESSA",
      "price": "$2,285.04",
      "isAvailable": true,
      "name": "PEARLESSA",
      "_id": "5ac0f8e305a1c5be2a6e1240"
    },
    {
      "tags": [
        "non",
        "tempor",
        "exercitation",
        "incididunt",
        "cillum"
      ],
      "registered": "Saturday, November 7, 2015 5:18 PM",
      "about": "Cupidatat magna est sit in voluptate do.",
      "quantity": 21,
      "imageUri": "http://placehold.it/32x32?text=EXTREMO",
      "price": "$3,613.22",
      "isAvailable": false,
      "name": "EXTREMO",
      "_id": "5ac0f8e4fd2ef209c82fa86a"
    },
    {
      "tags": [
        "officia",
        "cillum",
        "exercitation",
        "incididunt",
        "incididunt"
      ],
      "registered": "Saturday, August 9, 2014 10:09 PM",
      "about": "Laboris anim id officia do.",
      "quantity": 32,
      "imageUri": "http://placehold.it/32x32?text=CHILLIUM",
      "price": "$3,708.36",
      "isAvailable": true,
      "name": "CHILLIUM",
      "_id": "5ac0f8e42831577c219cdc2e"
    }
  ];

  res.json(products);
});

const port = process.env.PORT || 4000;

app.listen(port, () => `Server running on port ${port}`);