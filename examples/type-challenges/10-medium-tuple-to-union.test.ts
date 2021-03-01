/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/10-medium-tuple-to-union/README.md
 * - https://github.com/type-challenges/type-challenges/issues/919
 */

import { Test } from "ts-toolbelt"
import { TupleToUnion } from "./10-medium-tuple-to-union"
const { checks, check } = Test

checks([
    check<TupleToUnion<[123, '456', true]>, 123 | '456' | true, Test.Pass>(),
])