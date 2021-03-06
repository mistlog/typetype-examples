export type Trim<str extends string> = str extends `${whitespace}${infer rest}` ? Trim<rest> : str extends `${infer rest}${whitespace}` ? Trim<rest> : str;
type whitespace = (" " | "\n" | "\t");