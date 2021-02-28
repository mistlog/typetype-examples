/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/3-medium-omit/README.md
 * - https://github.com/type-challenges/type-challenges/issues/825
 */

import { Test } from "ts-toolbelt"
import { MyOmit } from "./3-medium-omit";
const { checks, check } = Test

interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
    completed: false,
}

checks([
    check<TodoPreview, typeof todo, Test.Pass>(),
])