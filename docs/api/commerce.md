# commerce

## color

Return random color name

```js
faker.commerce.color(); // fuchsia
```

## department

Return random department name

```js
faker.commerce.department(); // Grocery
```

## productName

Return random product name

```js
faker.commerce.productName(); // Rustic Granite Shirt
```

## price([min, max, dec, symbol])

Generates random price

::: tip
| Param  | Type   | Default |
| ------ | ------ | :-----: |
| min    | number |   `1`   |
| max    | number | `1000`  |
| dec    | number |   `2`   |
| symbol | string |   ``    |
:::

```js
faker.commerce.price(); // 4.00
faker.commerce.price(2, 22, 1, '$'); // $7.0
```

## productAdjective

Return random product adjective

```js
faker.commerce.productAdjective(); // Handmade
```

## productMaterial

Return random product material

```js
faker.commerce.productMaterial(); // Steel
```

## product

Return random product

```js
faker.commerce.product(); // Gloves
```