/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/119-medium-replaceAllall/README.md
 * - https://github.com/type-challenges/type-challenges/issues/928
 */

import { Test } from "ts-toolbelt"
import { ReplaceAll } from "./119-medium-replaceall"
const { checks, check } = Test

checks([
    check<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo', Test.Pass>(),
    check<ReplaceAll<'barfoo', 'foo', 'bar'>, 'barbar', Test.Pass>(),
    check<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo', Test.Pass>(),
    check<ReplaceAll<'t y p e s', ' ', ''>, 'types', Test.Pass>(),
    check<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar', Test.Pass>(),
    check<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar', Test.Pass>(),
    check<ReplaceAll<'', '', ''>, '', Test.Pass>(),
])