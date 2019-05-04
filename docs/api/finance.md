# finance

## account([length])

Return random account number

::: tip
| Param  | Type   | Default |
| ------ | ------ | :-----: |
| length | number |   `8`   |
:::

```js
faker.finance.account(); // 30764440
faker.finance.account(12); // 194294967472
```

## accountName

Return random account name

```js
faker.finance.accountName(); // Investment Account 
```

## routingNumber <Badge text="5.0.0+" type="tip" vertical="middle"/>

Return random routing number

```js
faker.finance.routingNumber();
```

## mask([length, parens, ellipsis])

Return random mask

::: tip
| Param    | Type    | Default |
| -------- | ------- | :-----: |
| length   | number  |   `4`   |
| parens   | boolean | `false` |
| ellipsis | boolean | `false` |
:::

```js
faker.finance.mask(); // 8493
faker.finance.mask(5, true); // (17126) 
faker.finance.mask(5, true, true); // (...17126)
faker.finance.mask(5, false, true); // ...17126
```

## amount([min, max, dec, symbol])

Return random amount

::: tip
| Param  | Type   | Default |
| ------ | ------ | :-----: |
| min    | number |   `0`   |
| max    | number | `1000`  |
| dec    | number |   `2`   |
| symbol | string |  `''`   |
:::

```js
faker.finance.amount(); // 466.98 
faker.finance.amount(42); // 197.40  
faker.finance.amount(42, 43); // 42.24
faker.finance.amount(42, 43, 10); // 42.1601538648 
faker.finance.amount(42, 43, 2, '$'); // $42.89
```

## transactionType

Return random transaction type

```js
faker.finance.transactionType(); // withdrawal
```

## currencyCode

Return random currency code

```js
faker.finance.currencyCode(); // HTG USD
```

## currencyName

Return random currency name

```js
faker.finance.currencyName(); // Hryvnia
```

## currencySymbol

Return random currency symbol

```js
faker.finance.currencySymbol(); // £
```

## bitcoinAddress

Return random bitcoin address

```js
faker.finance.bitcoinAddress(); // 3FINQD7C6JW7XPF4NMNHOJYAXLKLP
```

## creditCardNumber([provider]) <Badge text="5.0.0+" type="tip" vertical="middle"/>

Return random credit card number

::: tip
| Param    | Type   | Default |
| -------- | ------ | :-----: |
| provider | string |  `''`   |
:::

```js
faker.finance.creditCardNumber();
```

## creditCardCVV <Badge text="5.0.0+" type="tip" vertical="middle"/>

Return random credit card CVV

```js
faker.finance.creditCardCVV();
```

## ethereumAddress <Badge text="5.0.0+" type="tip" vertical="middle"/>

Return random ethereum address

```js
faker.finance.ethereumAddress();
```

## iban([formated])

Return random iban

::: tip
| Param    | Type    | Default |
| -------- | ------- | :-----: |
| formated | boolean | `false` |
:::

```js
faker.finance.iban(); // BE56302102061244
faker.finance.iban(true); // GI29 MRCH LR1V 0284 KE24 6K8
```

## bic

Return random bic

```js
faker.finance.bic(); // OUAIDGK1
```