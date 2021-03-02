/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/106-medium-trimleft/README.md
 * - https://github.com/type-challenges/type-challenges/issues/346
 */

import { Test } from "ts-toolbelt"
import { TrimLeft } from "./106-medium-trimleft"
const { checks, check } = Test


checks([
    check<TrimLeft<'str'>, 'str', Test.Pass>(),
    check<TrimLeft<' str'>, 'str', Test.Pass>(),
    check<TrimLeft<'      str'>, 'str', Test.Pass>(),
    check<TrimLeft<'      str       '>, 'str       ', Test.Pass>(),
    check<TrimLeft<'   \n\t foo bar '>, 'foo bar ', Test.Pass>(),
])