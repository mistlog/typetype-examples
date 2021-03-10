export type CamelCase<str extends string> = str extends `${infer word}_${infer char}${infer rest}` ? `${Lowercase<word>}${Capitalize<char>}${CamelCase<rest>}` : Lowercase<str>;