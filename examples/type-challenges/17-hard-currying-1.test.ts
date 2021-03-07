/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/17-hard-currying-1/README.md
 * - https://github.com/type-challenges/type-challenges/issues/1034
 */

import { Test } from "ts-toolbelt"
import { Curry } from "./17-hard-currying-1"
const { checks, check } = Test

declare function Currying<F>(fn: F): Curry<F>

const curried1 = Currying((a: string, b: number, c: boolean) => true)
const curried2 = Currying((a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true)

checks([
    check<typeof curried1, (a: string) => (b: number) => (c: boolean) => true, Test.Pass>(),
    check<typeof curried2, (a: string) => (b: number) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true, Test.Pass>(),
])