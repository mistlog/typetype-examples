/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/949-medium-anyof/README.md
 * - https://github.com/type-challenges/type-challenges/issues/954
 */

import { Test } from "ts-toolbelt"
import { AnyOf } from "./949-medium-anyof"
const { checks, check } = Test

checks([
    check<AnyOf<[0, '', false, [], {name: 'test'}]>, true, Test.Pass>(),
    check<AnyOf<[0, '', false, [], {}]>, false, Test.Pass>(),
    check<AnyOf<[1, '', false, [], {}]>, true, Test.Pass>(),
])