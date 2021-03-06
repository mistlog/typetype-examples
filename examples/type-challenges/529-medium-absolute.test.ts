/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/529-medium-absolute/README.md
 * - https://github.com/type-challenges/type-challenges/issues/766
 */

import { Test } from "ts-toolbelt"
import { Absolute } from "./529-medium-absolute"
const { checks, check } = Test

checks([
    check<Absolute<-5>, '5', Test.Pass>(),
    check<Absolute<-1_000_000n>, '1000000', Test.Pass>(),
])