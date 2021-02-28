/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/2-medium-return-type/README.md
 * - https://github.com/type-challenges/type-challenges/issues/915
 */


import { Test } from "ts-toolbelt"
import { MyReturnType } from "./2-medium-return-type";
const { checks, check } = Test

const fn = (v: boolean) => {
    if (v)
        return 1
    else
        return 2
}

type a = MyReturnType<typeof fn> // should be "1 | 2"

checks([
    check<a, 1 | 2, Test.Pass>(),
])