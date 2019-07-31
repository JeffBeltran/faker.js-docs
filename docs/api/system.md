# system

## fileName

generates a file name with extension or optional type

```js
faker.system.fileName(); // benchmark_connect_synthesize.kpxx
```

## commonFileName([ext])

generates a file name with extension or optional type

::: tip
| Param | Type   |            Default             |
| ----- | ------ | :----------------------------: |
| ext   | string | `faker.system.commonFileExt()` |
:::

```js
faker.system.commonFileName(); // small_frozen_pants_circuit.pdf 
faker.system.commonFileName('bob'); // rwanda_franc_back_up.bob
```

## mimeType

generates a random mime type

```js
faker.system.mimeType(); // application/vnd.kde.kontour
```

## commonFileType

returns a commonly used file type

```js
faker.system.commonFileType(); // image
```

## commonFileExt

returns a commonly used file extension

```js
faker.system.commonFileExt(); // pdf
```

## fileType

returns any file type available as mime-type

```js
faker.system.fileType(); // text
```

## fileExt([mimeType])

returns a file extension

::: tip
| Param    | Type   |          Default          |
| -------- | ------ | :-----------------------: |
| mimeType | string | `faker.system.mimeType()` |
:::

```js
faker.system.fileExt(); // msi
faker.system.fileExt('image/jpeg'); // jpg
```

## directoryPath

:::danger
Not yet implemented
:::

## filePath

:::danger
Not yet implemented
:::

## semver

returns a random [semantic version](https://semver.org/)

```js
faker.system.semver(); // 7.0.2
```