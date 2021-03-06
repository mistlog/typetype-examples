/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/531-medium-string-to-union/README.md
 * - https://github.com/type-challenges/type-challenges/issues/968
 */

import { Test } from "ts-toolbelt"
import { StringToUnion } from "./531-medium-string-to-union"
const { checks, check } = Test

checks([
    check<StringToUnion<"hello">, "h" | "e" | "l" | "l" | "o", Test.Pass>(),
])