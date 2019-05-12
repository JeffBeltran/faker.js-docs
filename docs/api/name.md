# name

## firstName([gender])

Generates random first name

::: tip
| Param  | Type   | Default |
| ------ | ------ | :-----: |
| gender | number | `null`  |

**NOTE**: If locale dataset supports gender names, passing in `0` will give you male names and any other number will give you female names... I think lol
:::

```js
faker.name.firstName(); // Joshuah
```

## lastName([gender])

Generates random last name

::: tip
| Param  | Type   | Default |
| ------ | ------ | :-----: |
| gender | number | `null`  |

**NOTE**: If locale dataset supports gender names, passing in `0` will give you male names and any other number will give you female names... I think
:::

```js
faker.name.lastName(); // Ortiz
```

## findName([firstName[, lastName[, gender]]])

Generates random full name with optional random suffix/prefix

::: tip
| Param     | Type   |         Default          |
| --------- | ------ | :----------------------: |
| firstName | string | `faker.name.firstName()` |
| lastName  | string | `faker.name.lastName()`  |
| gender    | number |        `0` or `1`        |

**NOTE**: If locale dataset supports gender names, passing in `0` will give you male names and any other number will give you female names... I think
:::

```js
faker.name.findName(); // Jamey Thiel
faker.name.findName('Bob'); // Bob Grant III
faker.name.findName('Bob', 'Smith'); // Bob Smith
faker.name.findName(null, 'Smith'); // Miracle Smith
```

## jobTitle

Generates random job title

```js
faker.name.jobTitle(); // Senior Data Facilitator
```

## prefix([gender])

Generates random prefix

::: tip
| Param  | Type   |  Default   |
| ------ | ------ | :--------: |
| gender | number | `0` or `1` |

**NOTE**: If locale dataset supports gender names, passing in `0` will give you male names and any other number will give you female names... I think
:::

```js
faker.name.prefix(); // Mr.
faker.name.prefix(1); // Ms.
```

## suffix

Generates random suffix

```js
faker.name.suffix(); // MD
```

## title

Generates random title

```js
faker.name.title(); // Forward Accountability Executive
```

## jobDescriptor

Generates random job descriptor

```js
faker.name.jobDescriptor(); // Future
```

## jobArea

Generates random job area

```js
faker.name.jobArea(); // Factors
```

## jobType

Generates random job type

```js
faker.name.jobType(); // Coordinator
```