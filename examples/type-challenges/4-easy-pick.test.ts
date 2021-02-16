/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/4-easy-pick/README.md
 * - https://github.com/type-challenges/type-challenges/issues/844
 */

import { MyPick } from "./4-easy-pick";

interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}