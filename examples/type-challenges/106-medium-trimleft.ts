export type TrimLeft<str extends string> = str extends `${whitespace}${infer rest}` ? TrimLeft<rest> : str;
type whitespace = (" " | "\n" | "\t");