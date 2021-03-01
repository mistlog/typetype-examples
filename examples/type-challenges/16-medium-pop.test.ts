/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/16-medium-pop/README.md
 * - https://github.com/type-challenges/type-challenges/issues/922
 */

import { Test } from "ts-toolbelt"
import { Pop } from "./16-medium-pop"
const { checks, check } = Test

type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]

checks([
    check<re1, ['a', 'b', 'c'], Test.Pass>(),
    check<re2, [3, 2], Test.Pass>(),
])