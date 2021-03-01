/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/12-medium-chainable-options/README.md
 * - https://github.com/type-challenges/type-challenges/issues/750
 */

import { Test, A } from "ts-toolbelt"
import { Chainable } from "./12-medium-chainable-options";
const { checks, check } = Test

declare const a: Chainable

const result = a
    .option('foo', 123)
    .option('bar', { value: 'Hello World' })
    .option('name', 'type-challenges')
    .get()

type Expected = {
    foo: number
    bar: {
        value: string
    }
    name: string
}

type resultType = A.Compute<typeof result>;

checks([
    check<resultType, Expected, Test.Pass>(),
])