# random

## number([options])

Generates random number

::: tip
| Param   | Type  |               Default                |
| ------- | ----- | :----------------------------------: |
| options | mixed | `{min: 0, max: 99999, precision: 1}` |

**NOTE**: passing a number as the param will set the `max` value to that number and use the `min` and `precision` defaults
:::

```js
faker.random.number(); // 58199
faker.random.number(55); // 11
faker.random.number({min:10}); // 86801
faker.random.number({min: 10, max: 100}); // 53
faker.random.number({min: 10, max: 100, precision: .25}); // 33.5
```

## arrayElement([array])

Takes an array and returns a random element of the array

::: tip
| Param | Type  |      Default      |
| ----- | ----- | :---------------: |
| array | array | `["a", "b", "c"]` |
:::

```js
faker.random.arrayElement(); // b
faker.random.arrayElement(['bob', 'was', 22]); // 22
```

## objectElement([object[, field]])

Takes an object and returns a random element of the array

::: tip
| Param  | Type   |             Default              |
| ------ | ------ | :------------------------------: |
| object | object | `{ "foo": "bar", "too": "car" }` |
| field  | mixed  |           `undefined`            |
:::

```js
faker.random.objectElement(); // car
faker.random.objectElement({ name:'bob', color: 'blue', age: 22}); // bob
faker.random.objectElement({ name:'bob', color: 'blue', age: 22}, 'key'); // name
```

## uuid

Returns random UUID

```js
faker.random.uuid(); // 202e301c-1a22-4ed9-8f86-88e5520a76c6 
```

## boolean

Returns random boolean

```js
faker.random.boolean(); // true 
```

## word

Returns random word from faker methods that can generate words

```js
faker.random.word(); // compress 
```

## words([count])

return random number of words from `faker.random.word`

::: tip
| Param | Type   |      Default      |
| ----- | ------ | :---------------: |
| count | number | `1` or `2` or `3` |
:::

```js
faker.random.words(); // eco-centric
faker.random.words(4); // neural wireless Borders invoice
```

## image

alias to [faker.image.image()](/api/image.html#image-width-height-randomize)

```js
faker.random.image() // http://lorempixel.com/640/480/city
```

## locale

Return random locale. See [Localization](/localization.html#localization) for more info

```js
faker.random.locale() // nl
```

## alphaNumeric

return a random alpha numeric

::: tip
| Param | Type   | Default |
| ----- | ------ | :-----: |
| count | number |   `1`   |
:::

```js
faker.random.alphaNumeric(); // p
faker.random.alphaNumeric(4); // 81bh
```