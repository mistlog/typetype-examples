/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/59-hard-get-optional/README.md
 * - https://github.com/type-challenges/type-challenges/issues/104
 * - 
 */

import { Test } from "ts-toolbelt"
import { GetOptional } from "./59-hard-get-optional"
const { checks, check } = Test

checks([
    check<GetOptional<{ foo: number, bar?: string }>, { bar?: string }, Test.Pass>(),
    check<GetOptional<{ foo: undefined, bar?: undefined }>, { bar?: undefined }, Test.Pass>(),
])