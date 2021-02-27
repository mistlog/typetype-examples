/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/533-easy-concat/README.md
 * - https://github.com/type-challenges/type-challenges/issues/943
 */

import { Concat } from "./533-easy-concat"
import { Test } from "ts-toolbelt"
const { checks, check } = Test


checks([
    check<Concat<[], []>, [], Test.Pass>(),
    check<Concat<[], [1]>, [1], Test.Pass>(),
    check<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4], Test.Pass>(),
    check<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4'], Test.Pass>(),
])