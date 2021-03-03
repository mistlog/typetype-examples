/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/116-medium-replace/README.md
 * - https://github.com/type-challenges/type-challenges/issues/914
 */

import { Test } from "ts-toolbelt"
import { Replace } from "./116-medium-replace"
const { checks, check } = Test

checks([
    check<Replace<'foobar', 'bar', 'foo'>, 'foofoo', Test.Pass>(),
    check<Replace<'foobar', 'foo', 'bar'>, 'barbar', Test.Pass>(),
    check<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar', Test.Pass>(),
    check<Replace<'foobarbar', '', 'foo'>, 'foobarbar', Test.Pass>(),
    check<Replace<'', '', ''>, '', Test.Pass>(),
])