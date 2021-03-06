# TypeType Examples

This repository contains examples of using [typetype](https://github.com/mistlog/typetype) to create typescript types.

```ts
foreach example-set in this repo:
    input = examples/<example-set>/<example-name>.type
    output = examples/<example-set>/<example-name>.ts
    test = examples/<example-set>/<example-name>.test.ts
```

## Outline

* syntax: the grammar of typetype
* url-parser
    * url-parser: simple url parser, parse individual part of url
    * url-parser-2: parse url as a whole
* type-challenges
    * solutions of [type-challenges](https://github.com/type-challenges/type-challenges) in typetype



## Local setup

```bash
> npm install
> npm run build // generate output
```

## License

This project is [MIT licensed](https://github.com/mistlog/typetype-examples/blob/main/LICENSE).