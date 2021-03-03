/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/191-medium-append-argument/README.md
 * - https://github.com/type-challenges/type-challenges/issues/931
 */

import { Test } from "ts-toolbelt"
import { AppendArgument } from "./191-medium-append-argument"
const { checks, check } = Test

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
type Result1 = (a: number, b: string, x: boolean) => number

type Case2 = AppendArgument<() => void, undefined>
type Result2 = (x: undefined) => void

checks([
    check<Case1, Result1, Test.Pass>(),
    check<Case2, Result2, Test.Pass>(),
])