export type LookUp<U, T> = U extends {
  type: T;
} ? U : never;