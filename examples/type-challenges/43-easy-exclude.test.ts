/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/43-easy-exclude/README.md
 * - https://github.com/type-challenges/type-challenges/issues/939
 */

import { MyExclude } from "./43-easy-exclude"
import { Test } from "ts-toolbelt"
const { checks, check } = Test


checks([
    check<MyExclude<"a" | "b" | "c", "a">, "b" | "c", Test.Pass>(),
])

