type a = never;
type b = number;
type c = string;
type value = 1;
type bool = true;
type tuple = [1, 2, 3];
type array = string[][];
type str = "abc";
type template = `value is: ${value}`;
type obj = {
  a: 1;
  b: "abc";
  c: [1, 2];
};
type valueDeep = obj["c"][1];
type keys = keyof {
  readonly a?: 1;
  b: 2;
};
type u1 = (0 | 1 | 2);
type u2 = (0 | 1 | 2);
type f1 = () => void;
type f2 = (a: number, b: string) => number;
type f3 = () => (a: number, b: string) => void;
type conditional = 1 extends string ? "string" : "number";
type conditional2 = 1 extends string ? "string" : 1 extends 1 ? "is 1" : "not 1";
export type Foo<T> = T extends {
  a: infer U;
  b: infer U;
} ? U : never;
type Keys = ("Name" | "Age");
type mapped1 = { [K in Keys]: boolean };
type mapped2 = { [K in Keys as `get${K}`]: () => string };