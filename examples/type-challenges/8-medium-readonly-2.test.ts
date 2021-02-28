/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/8-medium-readonly-2/README.md
 * - https://github.com/type-challenges/type-challenges/issues/965
 */

import { Test, A } from "ts-toolbelt"
import { MyReadonly2 } from "./8-medium-readonly-2";
const { checks, check } = Test

interface Todo {
    title: string
    description: string
    completed: boolean
}

type Expected = {
    readonly title: string
    readonly description: string
    completed: boolean
}

checks([
    check<A.Compute<MyReadonly2<Todo, 'title' | 'description'>>, Expected, Test.Pass>(),
    check<A.Compute<MyReadonly2<Todo>>, Readonly<Todo>, Test.Pass>(),
])