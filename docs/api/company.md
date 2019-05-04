# company

## suffixes

Return array of company suffixes

```js
faker.company.suffixes(); // ["Inc", "and Sons", "LLC", "Group"]
```

## companyName([formatIndex])

Return random company name. Using one of the following format options
::: v-pre
- `{{name.lastName}} {{company.companySuffix}}`
- `{{name.lastName}} - {{name.lastName}}`
- `{{name.lastName}}, {{name.lastName}} and {{name.lastName}}`
:::

::: tip
| Param       | Type   | Default |
| ----------- | ------ | :-----: |
| formatIndex | number |  `0-2`  |
:::

```js
faker.company.companyName(); // Zboncak and Sons 
faker.company.companyName(0); // Nikolaus Group
faker.company.companyName(1); // Keeling - Lind 
faker.company.companyName(2); // Swaniawski, Howe and Leffler 
```

## companySuffix

Return random company suffix

```js
faker.company.companySuffix(); // and Sons
```

## catchPhrase

Return random company catch phrase

```js
faker.company.catchPhrase(); // Team-oriented context-sensitive conglomeration
```

## bs

Return random company bs

```js
faker.company.bs(); // ubiquitous empower e-business
```

## catchPhraseAdjective

Return random catch phrase adjective

```js
faker.company.catchPhraseAdjective(); // Down-sized 
```

## catchPhraseDescriptor

Return random catch phrase descriptor

```js
faker.company.catchPhraseDescriptor(); // bi-directional 
```

## catchPhraseNoun

Return random catch phrase noun

```js
faker.company.catchPhraseNoun(); // complexity
```

## bsAdjective

Return random company bs adjective

```js
faker.company.bsAdjective(); // granular
```

## bsBuzz

Return random company bs buzz word

```js
faker.company.bsBuzz(); // facilitate
```

## bsNoun

Return random company bs noun

```js
faker.company.bsNoun(); // models
```