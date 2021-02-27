/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/268-easy-if/README.md
 * - https://github.com/type-challenges/type-challenges/issues/942
 */

import { If } from "./268-easy-if"
import { Test } from "ts-toolbelt"
const { checks, check } = Test


checks([
    check<If<true, 'a', 'b'>, 'a', Test.Pass>(),
    check<If<false, 'a', 2>, 2, Test.Pass>(),
])