# internet

## avatar

return random avatar url

```js
faker.internet.avatar(); 
// https://s3.amazonaws.com/uifaces/faces/twitter/dnezkumar/128.jpg
```

## email([firstName[, lastName[, provider]]])

::: danger
This uses real domains so it is likely to create a "real" email address. Use `exampleEmail()` to be safe.
:::

Generates random email address

::: tip
| Param     | Type   |                Default                |
| --------- | ------ | :-----------------------------------: |
| firstName | string |       `faker.name.firstName()`        |
| lastName  | string |        `faker.name.lastName()`        |
| provider  | string | `gmail.com` `yahoo.com` `hotmail.com` |
:::

```js
faker.internet.email(); // Ottis_Cremin16@yahoo.com
faker.internet.email('bob'); // bob_jon@example.com 
faker.internet.email('bob', 'jon'); // bob_jon73@hotmail.com 
faker.internet.email('bob', 'jon', 'somedomain.com'); // bob_jon@somedomain.com 
```

## exampleEmail

Generates random email address from [safe domains](https://en.wikipedia.org/wiki/Example.com)

::: tip
| Param     | Type   |         Default          |
| --------- | ------ | :----------------------: |
| firstName | string | `faker.name.firstName()` |
| lastName  | string | `faker.name.lastName()`  |
:::

```js
faker.internet.exampleEmail(); // Rhiannon_Von81@example.com
faker.internet.exampleEmail('bob'); // bob26@example.net 
faker.internet.exampleEmail('bob', 'jon'); // bob_jon@example.com
```

## userName([firstName[, lastName]])

Generates a username based on one of several patterns.

The pattern is chosen randomly from one of the following: `firstname#` `firstname.lastname` `firstname.lastname#` `firstnamelastname` `firstnamelastname#`

::: tip
| Param     | Type   |         Default          |
| --------- | ------ | :----------------------: |
| firstName | string | `faker.name.firstName()` |
| lastName  | string | `faker.name.lastName()`  |
:::

```js
faker.internet.userName(); // Maci12
faker.internet.userName('bob')); // bob_Considine30
faker.internet.userName('bob', 'jon')); // bob.jon61 
```

## protocol

Randomly generates http or https

```js
faker.internet.protocol(); // https
```

## url

Generates a random URL. The URL could be secure or insecure.

```js
faker.internet.url(); // http://chloe.net
```

## domainName

Generates a random domain name.

```js
faker.internet.domainName(); // hailie.biz 
```

## domainSuffix

Generates a random domain suffix.

```js
faker.internet.domainSuffix(); // org
```

## domainWord

Generates a random domain word.

```js
faker.internet.domainWord(); // mattie
```

## ip

Generates a random IP.

```js
faker.internet.ip(); // 165.20.179.86 
```

## ipv6

Generates a random IPv6 address.

```js
faker.internet.ipv6(); // 0e1a:48d6:8da6:b933:be58:442d:71db:42d7 
```

## userAgent

Generates a random user agent.

```js
faker.internet.userAgent(); 
// Mozilla/5.0 (Windows NT 6.1; rv:6.0) Gecko/20100101 Firefox/6.0.0 
```

## color([baseRed255[, baseGreen255[, baseBlue255]]])

Generates a random hexadecimal color based on [this awesome response](http://stackoverflow.com/questions/43044/algorithm-to-randomly-generate-an-aesthetically-pleasing-color-palette)

::: tip
| Param        | Type   | Default |
| ------------ | ------ | :-----: |
| baseRed255   | number |   `0`   |
| baseGreen255 | number |   `0`   |
| baseBlue255  | number |   `0`   |
:::

```js
faker.internet.color(); // #630c7b
faker.internet.color(128); // #910145
faker.internet.color(122, 148); // #a06a09
faker.internet.color(42, 22, 11); // #48166d 
```

## mac

Generates a random mac address.

```js
faker.internet.mac(); // 00:87:14:24:31:ba
```

## password([len[, memorable[, pattern[, prefix]]]])

Generates a random password. 

::: tip
| Param     | Type    | Default |
| --------- | ------- | :-----: |
| len       | number  |  `15`   |
| memorable | boolean | `false` |
| pattern   | regex   | `/\w/`  |
| prefix    | string  |  `''`   |

**Note:** `pattern` param is ignored if memorable is set to `true`
:::

```js
faker.internet.password(); // 0ViHvR3Qp7AAsir
faker.internet.password(8); // m9Qw6dzR
faker.internet.password(8, true); // qecuquha
faker.internet.password(8, false, /^[A-Z]*$/); // PQGGVATB 
faker.internet.password(8, false, /^[A-Z]*$/, 'bob'); // bobTXMPD 
```