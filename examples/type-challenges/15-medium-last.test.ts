/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/15-medium-last/README.md
 * - https://github.com/type-challenges/type-challenges/issues/921
 */

import { Test } from "ts-toolbelt"
import { Last } from "./15-medium-last"
const { checks, check } = Test

checks([
    check<Last<[() => 123, { a: string }]>, { a: string }, Test.Pass>(),
])