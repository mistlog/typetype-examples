/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/55-hard-union-to-intersection/README.md
 * - https://github.com/type-challenges/type-challenges/issues/775
 * - https://stackoverflow.com/questions/50374908/transform-union-type-to-intersection-type
 * - https://fettblog.eu/typescript-union-to-intersection/
 * - https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types
 */

import { Test } from "ts-toolbelt"
import { UnionToIntersection } from "./55-hard-union-to-intersection"
const { checks, check } = Test


checks([
    check<UnionToIntersection<'foo' | 42 | true>, 'foo' & 42 & true, Test.Pass>(),
    check<UnionToIntersection<(() => 'foo') | ((i: 42) => true)>, (() => 'foo') & ((i: 42) => true), Test.Pass>(),
])