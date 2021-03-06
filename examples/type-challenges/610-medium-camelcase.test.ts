/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/610-medium-camelcase/README.md
 * - https://github.com/type-challenges/type-challenges/issues/823
 */

import { Test } from "ts-toolbelt"
import { CamelCase } from "./610-medium-camelcase"
const { checks, check } = Test

checks([
    check<CamelCase<'foo-bar-baz'>, 'fooBarBaz', Test.Pass>(),
    check<CamelCase<'foo-Bar-Baz'>, 'foo-Bar-Baz', Test.Pass>(),
])