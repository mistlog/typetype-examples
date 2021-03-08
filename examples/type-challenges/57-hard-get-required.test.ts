/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/57-hard-get-required/README.md
 * - https://github.com/type-challenges/type-challenges/issues/285
 * - 
 */

import { Test } from "ts-toolbelt"
import { GetRequired } from "./57-hard-get-required"
const { checks, check } = Test

checks([
    check<GetRequired<{ foo: number, bar?: string }>, { foo: number }, Test.Pass>(),
    check<GetRequired<{ foo: undefined, bar?: undefined }>, { foo: undefined }, Test.Pass>(),
])