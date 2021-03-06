/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/612-medium-kebabcase/README.md
 * - https://github.com/type-challenges/type-challenges/issues/824
 */

import { Test } from "ts-toolbelt"
import { KebabCase } from "./612-medium-kebabcase"
const { checks, check } = Test

checks([
    check<KebabCase<'FooBarBaz'>, 'foo-bar-baz', Test.Pass>(),
    check<KebabCase<'fooBarBaz'>, 'foo-bar-baz', Test.Pass>(),
])