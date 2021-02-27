/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/189-easy-awaited/README.md
 * - https://github.com/type-challenges/type-challenges/issues/941
 */

import { Awaited } from "./189-easy-awaited"
import { Test } from "ts-toolbelt"
const { checks, check } = Test

type X = Promise<string>
type Y = Promise<{ field: number }>

checks([
    check<Awaited<X>, string, Test.Pass>(),
    check<Awaited<Y>, { field: number }, Test.Pass>(),
])