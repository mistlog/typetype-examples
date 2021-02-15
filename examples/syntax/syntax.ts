type a = never;
type b = number;
type c = string;
type value = 1;
type str = "abc";
type bool = true;
type tuple = [1, 2, 3];
type obj = {
  a: 1;
  b: "abc";
};
type template = `value is: ${value}`;
type conditional = 1 extends string ? "string" : "number";
type conditional2 = 1 extends string ? "string" : 1 extends 1 ? "is 1" : "not 1";
export type Foo<T> = T extends {
  a: infer U;
  b: infer U;
} ? U : never;