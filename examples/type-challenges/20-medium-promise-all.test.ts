/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/20-medium-promise-all/README.md
 * - https://github.com/type-challenges/type-challenges/issues/508
 */

import { Test } from "ts-toolbelt"
import { PromiseAllType } from "./20-medium-promise-all";
const { checks, check } = Test

declare const PromiseAll: PromiseAllType;

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])

checks([
    check<typeof promiseAllTest1, Promise<[1, 2, 3]>, Test.Pass>(),
    check<typeof promiseAllTest2, Promise<[1, 2, number]>, Test.Pass>(),
    check<typeof promiseAllTest3, Promise<[number, number, number]>, Test.Pass>(),
])