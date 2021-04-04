# TypeType Examples

This repository contains examples of using [typetype](https://github.com/mistlog/typetype) to create typescript types, typetype is designed to generate complex typescript type with ease.

For example, to implement `StringToUnion` in [531-medium-string-to-union](https://github.com/type-challenges/type-challenges/blob/master/questions/531-medium-string-to-union/README.md):

```ts
export type function StringToUnion = (T extends string) => ^{
    if(T extends `${infer char}${infer rest}`) {
        return union [char, StringToUnion<rest>]
    } else {
        return never
    }
}
```

The output will be:

```ts
export type StringToUnion<T extends string> = T extends `${infer char}${infer rest}` ? (char | StringToUnion<rest>) : never;
```

See it in action!

* https://mistlog.github.io/typetype-playground/

## Outline

```ts
foreach example-set in this repo:
    input = examples/<example-set>/<example-name>.type
    output = examples/<example-set>/<example-name>.ts
    test = examples/<example-set>/<example-name>.test.ts
```

* syntax: the grammar of typetype
* url-parser
    * url-parser: simple url parser, parse individual part of url
    * url-parser-2: parse url as a whole
* type-challenges
    * solutions of [type-challenges](https://github.com/type-challenges/type-challenges) in typetype



## Local setup

```bash
> npm install
> npm run dev
```

## License

This project is [MIT licensed](https://github.com/mistlog/typetype-examples/blob/main/LICENSE).