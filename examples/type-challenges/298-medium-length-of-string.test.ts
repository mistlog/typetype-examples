/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/298-medium-length-of-string/README.md
 * - https://github.com/type-challenges/type-challenges/issues/948
 */

import { Test } from "ts-toolbelt"
import { LengthOfString } from "./298-medium-length-of-string"
const { checks, check } = Test

checks([
    check<LengthOfString<''>, 0, Test.Pass>(),
    check<LengthOfString<'abc'>, 3, Test.Pass>(),
    check<LengthOfString<'a bc'>, 4, Test.Pass>(),
])