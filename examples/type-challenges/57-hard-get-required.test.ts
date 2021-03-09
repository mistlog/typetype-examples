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

{
    type obj = { foo: number, bar?: string }

    type foo = Pick<obj, "foo">; // { foo: number }
    type bar = Pick<obj, "bar">; // { bar?: string | undefined }

    type foo2 = Record<"foo", obj["foo"]>; // { foo: number }
    type bar2 = Record<"bar", obj["bar"]>; // { bar: string | undefined }

    type result1 = foo extends foo2 ? true : false; // true
    type result2 = bar extends bar2 ? true : false; // false
}