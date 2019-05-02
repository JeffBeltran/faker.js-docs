---
home: false
---


![Faker.js](https://raw.githubusercontent.com/Marak/faker.js/master/logo.png)
### generate massive amounts of fake data in the browser and node.js

[![Build Status](https://travis-ci.org/Marak/faker.js.svg?branch=master)](https://travis-ci.org/Marak/faker.js) [![Coverage Status](https://coveralls.io/repos/github/Marak/faker.js/badge.svg?branch=master)](https://coveralls.io/github/Marak/faker.js?branch=master) [![npm version](https://badge.fury.io/js/faker.svg)](http://badge.fury.io/js/faker) [![OpenCollective](https://opencollective.com/fakerjs/backers/badge.svg)](#backers) [![OpenCollective](https://opencollective.com/fakerjs/sponsors/badge.svg)](#sponsors)

## Browser Demo

[https://rawgit.com/Marak/faker.js/master/examples/browser/index.html](https://rawgit.com/Marak/faker.js/master/examples/browser/index.html)

## Hosted API Microservice

[http://faker.hook.io](http://faker.hook.io/)
 - Supports all Faker API Methods
 - Full-Featured Microservice
 - Hosted by [hook.io](http://hook.io)

```bash
curl http://faker.hook.io?property=name.findName&locale=de
```

## Usage

### Browser
```html
<script src = "faker.js" type = "text/javascript"></script>
<script>
    var randomName = faker.name.findName(); // Caitlyn Kerluke
    var randomEmail = faker.internet.email(); // Rusty@arne.info
    var randomCard = faker.helpers.createCard(); // random contact card containing many properties
</script>
```
### Node.js
```javascript
var faker = require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties
```
