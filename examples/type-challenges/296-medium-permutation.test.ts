/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/296-medium-permutation/README.md
 * - https://github.com/type-challenges/type-challenges/issues/614
 * - https://github.com/type-challenges/type-challenges/issues/548
 */

import { Test } from "ts-toolbelt"
import { Permutation } from "./296-medium-permutation"
const { checks, check } = Test


checks([
    check<Permutation<never>, [], Test.Pass>(),
    check<Permutation<'A'>, ['A'], Test.Pass>(),
    check<Permutation<'A' | 'B' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A'], Test.Pass>(),
    check<Permutation<'B' | 'A' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A'], Test.Pass>(),
])

// type loopUnion<Union extends string, UnionCopy = Union> = UnionCopy extends infer Item ? ["loop", Item] : never;
// type result = loopUnion<"A" | "B" | "C">; // ["loop", "A"] | ["loop", "B"] | ["loop", "C"]

// type temp = never extends never ? 1 : 0
// type a = Exclude<"A", "A">

