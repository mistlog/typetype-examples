/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/114-hard-camelcase/README.md
 * - https://github.com/type-challenges/type-challenges/issues/496
 */

import { Test } from "ts-toolbelt"
import { CamelCase } from "./114-hard-camelcase"
const { checks, check } = Test

checks([
    check<CamelCase<'foobar'>, 'foobar', Test.Pass>(),
    check<CamelCase<'FOOBAR'>, 'foobar', Test.Pass>(),
    check<CamelCase<'foo_bar'>, 'fooBar', Test.Pass>(),
    check<CamelCase<'foo_bar_hello_world'>, 'fooBarHelloWorld', Test.Pass>(),
    check<CamelCase<'HELLO_WORLD_WITH_TYPES'>, 'helloWorldWithTypes', Test.Pass>(),
])