/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/110-medium-capitalize/README.md
 * - https://github.com/type-challenges/type-challenges/issues/759
 */

import { Test } from "ts-toolbelt"
import { Capitalize } from "./110-medium-capitalize"
const { checks, check } = Test

checks([
    check<Capitalize<'foobar'>, 'Foobar', Test.Pass>(),
    check<Capitalize<'FOOBAR'>, 'FOOBAR', Test.Pass>(),
    check<Capitalize<'foo bar'>, 'Foo bar', Test.Pass>(),
    check<Capitalize<''>, '', Test.Pass>(),
])