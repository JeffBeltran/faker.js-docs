# lorem

## word

return random lorem word

```js
faker.lorem.word(); // maiores
```

## words([num])

Generates random lorem words

::: tip
| Param | Type   | Default |
| ----- | ------ | :-----: |
| num   | number |   `3`   |
:::

```js
faker.lorem.words(); // et reiciendis enim 
faker.lorem.words(6); // ipsam aut aut aut quasi reprehenderit
```

## sentence([wordCount[, range]])

Generates random lorem sentence

::: tip
| Param     | Type   | Default |
| --------- | ------ | :-----: |
| wordCount | number | `3-10`  |
| range     | number |   `7`   |

**NOTE**: Seems range is disabled at this time
:::

```js
faker.lorem.sentence(); // In est sint rerum dolorum illo totam nesciunt sint.  
faker.lorem.sentence(3); // Est neque qui.
```

## slug([wordCount])

Generates random lorem sentence

::: tip
| Param     | Type   | Default |
| --------- | ------ | :-----: |
| wordCount | number |   `3`   |

:::

```js
faker.lorem.slug(); // repudiandae-magnam-voluptatem
faker.lorem.slug(4); // sed-quo-labore-aliquid
```

## sentences([sentenceCount[, separator]])

Generates random lorem sentences

::: tip
| Param         | Type   | Default |
| ------------- | ------ | :-----: |
| sentenceCount | number |  `2-6`  |
| separator     | string |  `' '`  |

:::

```js
faker.lorem.sentences(); 
// Aliquid doloribus quam. Qui quod et aut qui facere commodi voluptatem. Nihil deserunt est quo tenetur quis. Occaecati consectetur dolore qui eligendi et ea nulla praesentium. 
faker.lorem.sentences(1); 
// Autem explicabo omnis voluptatem aut velit. 
faker.lorem.sentences(2, '='); 
// Et voluptates velit tenetur vero laboriosam.=Eligendi quis omnis ipsum nesciunt. 
```

## paragraph([sentenceCount])

Generates random lorem sentence

::: tip
| Param         | Type   | Default |
| ------------- | ------ | :-----: |
| sentenceCount | number |   `3`   |
:::

```js
faker.lorem.paragraph(); 
// Numquam saepe aperiam tenetur qui similique quos. Consequuntur sint eum magnam iusto facere qui et perspiciatis qui. Dolorem quidem fugit facilis rerum rerum. Porro fugit rerum quo nesciunt eligendi praesentium et omnis animi. Nesciunt distinctio iure sunt rem non qui commodi. Eligendi qui libero aut in qui.  
faker.lorem.paragraph(5); 
// Aut ducimus vel est corrupti possimus. Qui odio suscipit nam et nihil dolore consectetur expedita dignissimos. Qui et id deserunt vel inventore quae amet sed. Rerum qui cupiditate in. Aut dolore sint. Laboriosam vero et. Qui laborum excepturi similique aut ipsum facere nobis tempora sunt. 
```

## paragraphs([paragraphCount[, separator]])

Generates random lorem sentence

::: tip
| Param          | Type   |  Default  |
| -------------- | ------ | :-------: |
| paragraphCount | number |    `3`    |
| separator      | number | `'\n \r'` |
:::

```js
faker.lorem.paragraphs(); 
/**
Nihil nisi itaque excepturi itaque necessitatibus alias voluptatibus cupiditate. Nisi voluptates inventore unde voluptatem et magnam nostrum ut qui. Assumenda eius sunt neque maiores quia dolorem ut id quis. Sequi est illo amet iste pariatur provident commodi repellendus deleniti.
 
Aspernatur doloribus ex atque ad eos quas. Omnis at quasi quis pariatur dolore omnis illo enim quo. Maxime id consequatur et vitae eius dolores et provident.
 
Libero occaecati officiis beatae ab voluptatem possimus. Dignissimos repellat exercitationem animi qui autem ut. Et magni et. 
*/
faker.lorem.paragraphs(5); 
/**
Nihil tenetur ad mollitia eaque quo. Illum explicabo totam aut et. Asperiores harum ut modi facere sed dolores assumenda.
 
Id possimus qui omnis enim. Et autem qui. Est magnam ullam.
 
Aut magni sit aut. Et voluptate impedit sint molestiae ullam. Voluptas exercitationem molestiae in ab beatae sint.
 
Explicabo aliquid dolorem. Ea voluptatibus suscipit quis sed. Fugit facere vero modi dolores sit consequatur numquam consequatur facere. Et voluptatum earum nostrum modi at. Architecto eius corporis.
 
Est minima vel ut sint possimus velit autem quia veniam. Eum velit ut et voluptatibus voluptatem consequuntur deserunt ut. Exercitationem iusto unde quae maxime velit autem modi aliquam. Sequi ab voluptas ad quaerat quis et a. Et veniam aperiam commodi veritatis officia sunt atque dolorum. 
*/
faker.lorem.paragraphs(2, '=>'); 
/**
 Vitae cumque molestias sit porro alias aut hic nisi eveniet. Quia mollitia possimus exercitationem illo voluptas similique. Accusamus placeat qui corrupti porro ratione quidem.=>Totam illum ad. Sequi provident voluptatem provident est corrupti et. Soluta velit dolor necessitatibus consequuntur saepe quae. Ut nisi qui et distinctio id magnam minima cumque. Veritatis aut esse. 
*/
```

## text

Returns random text based on a random lorem method

```js
faker.lorem.text();
/**
 Nam et voluptatem. Sed esse quo dolor accusamus. Rerum vitae voluptates vero sunt temporibus. Eaque magni ab assumenda consequuntur voluptate eos voluptate. Eum rerum ut aliquid qui dolores temporibus qui ea. Quae quam tenetur ut. 
 */
```

## lines([lineCount])

Returns lines of lorem separated by `'\n'`

::: tip
| Param     | Type   | Default |
| --------- | ------ | :-----: |
| lineCount | number |  `1-5`  |
:::

```js
faker.lorem.lines();
/**
Dolorem fugiat illum debitis occaecati nemo aliquid molestias iure aut.
Consequatur atque quibusdam voluptatem voluptatem id doloribus eius. 
 */
faker.lorem.lines(5);
/**
Architecto autem at eveniet.
Natus ut quia dignissimos repudiandae architecto omnis quia sunt.
Eius consequatur veritatis nesciunt est est nobis velit.
Non dolorem laboriosam error et sit mollitia.
Odit iste rem officia atque. 
 */
```