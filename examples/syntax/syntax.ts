import { Temp } from "./to-import";
type keywordTypes = [string, number, boolean, never, any, bigint, object];
type literals = ["abc", true, false, 0, 1, 2, string[][], `name: ${string}`, {
  readonly a?: 1;
  b: "abc";
  c: {
    a: boolean;
  };
}];
type f1 = () => void;
type f2 = (a: number, b: string) => number;
type f3 = () => (a: number, b: string) => void;
type u1 = (0 | 1 | 2);
type u2 = (0 | 1 | 2);
type u3 = ((() => 1) | (() => "1"));
type i1 = ({
  a: 1;
} & {
  b: 2;
});
type i2 = ({
  a: 1;
} & {
  b: 2;
});
type Person = {
  age: number;
  name: string;
  alive: boolean;
};
type Age = Person["age"];
type Point = {
  x: number;
  y: number;
};
type P = keyof Point;
type typeofNumber1 = 1 extends string ? "string" : "number";
export type Foo<T> = T extends {
  a: infer U;
  b: infer U;
} ? U : never;
type Keys = ("Name" | "Age");
type mapped1 = { [K in Keys]: boolean };
type mapped2 = { [K in Keys as `get${K}`]: () => string };