export type Permutation<Union, UnionCopy = Union> = IsNever<Union> extends true ? [] : UnionCopy extends infer Item ? PermuteItem<Union, Item> : never;
type IsNever<T> = [T] extends [never] ? true : false;
type PermuteItem<Union, Item, Rest = Exclude<Union, Item>> = IsNever<Rest> extends true ? [Item] : [Item, ...Permutation<Rest>];