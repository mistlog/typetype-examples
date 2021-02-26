/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/14-easy-first/README.md
 * - https://github.com/type-challenges/type-challenges/issues/907
 */

import { First } from "./14-easy-first"
import { Test } from "ts-toolbelt"
const { checks, check } = Test

checks([
    check<First<[3, 2, 1]>, 3, Test.Pass>(),
    check<First<[() => 123, { a: string }]>, () => 123, Test.Pass>(),
    check<First<[]>, never, Test.Pass>(),
    check<First<[undefined]>, undefined, Test.Pass>(),
])