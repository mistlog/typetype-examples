/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/7-easy-readonly/README.md
 * - https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types
 */

import { MyReadonly } from "./7-easy-readonly"

import { A, Test } from "ts-toolbelt"
const { checks, check } = Test

interface Todo {
    title: string
    description: string
}

const todo: A.Compute<MyReadonly<Todo>> = {
    title: "Hey",
    description: "foobar"
}


checks([
    check<typeof todo, Readonly<Todo>, Test.Pass>(),
])