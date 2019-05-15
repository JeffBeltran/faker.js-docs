# phone

## phoneNumber([format])

Generates random phone number

::: tip
| Param  | Type   |           Default            |
| ------ | ------ | :--------------------------: |
| format | string | `faker.phone.phoneFormats()` |

**NOTE**: format is passed to [faker.helpers.replaceSymbolWithNumber()](/api/helpers.html#replacesymbolwithnumber-string-symbol)
:::

```js
faker.phone.phoneNumber(); // 1-730-333-7081 x32099
faker.phone.phoneNumber('(###) ###-####'); // (250) 588-2438
```

## phoneNumberFormat([index])

Generates random phone number format

::: tip
| Param | Type   | Default |
| ----- | ------ | :-----: |
| index | number |   `0`   |

**NOTE**: index value is based on the locales definition 
:::

```js
faker.phone.phoneNumberFormat(); // 127-631-6723
faker.phone.phoneNumberFormat(5); // (214) 291-8333 
```

## phoneFormats

Generates random phone formats

```js
faker.phone.phoneFormats(); // ###.###.#### x#### 
```