# address

## zipCode([format])

Generates random zipcode. If format is not specified, the locale's zip format is used. Use formats that are supported with [replaceSymbols](/api/helpers.html#replacesymbols-format)

::: tip
| Param  | Type   |   Default   |
| ------ | ------ | :---------: |
| format | string | `undefined` |
:::

```js
faker.address.zipCode(); // 98101-1234
faker.address.zipCode("#####"); // 98101
```

## zipCodeByState <Badge text="5.0.0+" type="tip" vertical="middle"/>

Generates random zipcode from state abbreviation. If state abbreviation is not specified, a random zip code is generated according to the locale's zip format. Only works for locales with `postcode_by_state` definition. If a locale does not have a `postcode_by_state` definition, a random zip code is generated according to the locale's zip format.

```js
faker.address.zipCodeByState(); // 12302
faker.address.zipCodeByState("wa"); // 98101
```

## city

::: v-pre
Generates a random localized city name. The format string can contain any method provided by faker wrapped in `{{}}`, e.g. `{{name.firstName}}` in order to build the city name.

::: tip
If no format string is provided one of the following is randomly used:

- `{{address.cityPrefix}} {{name.firstName}}{{address.citySuffix}}`
- `{{address.cityPrefix}} {{name.firstName}}`
- `{{name.firstName}}{{address.citySuffix}}`
- `{{name.lastName}}{{address.citySuffix}}`
  :::

```js
faker.address.city() // Lake Raoulfort
faker.address.city({{name.lastName}}{{address.citySuffix}}) // Powlowski port
```

## cityPrefix

Return a random localized city prefix

```js
faker.address.cityPrefix(); // South
```

## citySuffix

Return a random localized city suffix

```js
faker.address.citySuffix(); //burgh
```

## streetName

Returns a random localized street name

```js
faker.address.streetName(); // Rowe Coves
```

## streetAddress([useFullAddress])

Returns a random localized street address. Pass in optional object boolean to get a full address.

::: tip
| Param          | Type    | Default |
| -------------- | ------- | :-----: |
| useFullAddress | boolean | `false` |
:::

```js
faker.address.streetAddress(); // 294 White Parkways
faker.address.streetAddress(true); // 294 White Parkways Apt. 506
```

## streetSuffix

Returns a random localized street suffix.

```js
faker.address.streetSuffix(); // Garden
```

## streetPrefix

Returns a random localized street prefix.

```js
faker.address.streetPrefix(); // c
```

## secondaryAddress

Returns a random Secondary Address

```js
faker.address.secondaryAddress(); // Suite 123
```

## county

Returns a random county

```js
faker.address.county(); // Cambridgeshire
```

## country

Returns a random country

```js
faker.address.country(); // Papua New Guinea
```

## countryCode

Returns a random country code

```js
faker.address.countryCode(); // SN
```

## state

Returns a random state

```js
faker.address.state(); // Montana
```

## stateAbbr

Returns a random state abbreviation

```js
faker.address.stateAbbr(); // WV
```

## latitude([max, min])

Returns a random latitude.

::: warning Params Available <Badge text="5.0.0+" type="tip" vertical="middle"/>
| Param | Type   | Default |
| ----- | ------ | :-----: |
| max   | number |  `90`   |
| min   | number |  `-90`  |
:::

```js
faker.address.latitude(); // 78.9197
faker.address.latitude(70, 10); // 40.1239
```

## longitude([max, min])

Returns a random longitude.

::: warning Params Available <Badge text="5.0.0+" type="tip" vertical="middle"/>
| Param | Type   | Default |
| ----- | ------ | :-----: |
| max   | number |  `180`  |
| min   | number | `-180`  |
:::

```js
faker.address.longitude(); // 78.9197
faker.address.longitude(70, 10); // 40.1239
```
