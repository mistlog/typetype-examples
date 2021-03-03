/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/108-medium-trim/README.md
 * - https://github.com/type-challenges/type-challenges/issues/758
 */

import { Test } from "ts-toolbelt"
import { Trim } from "./108-medium-trim"
const { checks, check } = Test

checks([
    check<Trim<'str'>, 'str', Test.Pass>(),
    check<Trim<' str'>, 'str', Test.Pass>(),
    check<Trim<'      str'>, 'str', Test.Pass>(),
    check<Trim<'      str       '>, 'str', Test.Pass>(),
    check<Trim<'   \n\t foo bar '>, 'foo bar', Test.Pass>(),
])