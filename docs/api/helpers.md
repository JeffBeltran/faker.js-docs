# helpers

## randomize

## slugify

## replaceSymbolWithNumber

## replaceSymbols(format)

Parses string for symbols (numbers or letters) and replaces them appropriately.

- `#` will be replaced with number,
- `?` with letter
- `*` will be replaced with number or letter

```js
faker.address.replaceSymbols("#####"); // 98101
faker.address.replaceSymbols("???"); // ABC
faker.address.replaceSymbols("****"); // R2D2
```

## shuffle

## mustache

## createCard

## contextualCard

## userCard

## createTransaction
