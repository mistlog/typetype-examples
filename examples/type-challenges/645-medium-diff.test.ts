/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/645-medium-diff/README.md
 * - https://github.com/type-challenges/type-challenges/issues/832
 */

import { Test } from "ts-toolbelt"
import { Diff } from "./645-medium-diff"
const { checks, check } = Test

type Foo = {
    name: string
    age: string
  }
  type Bar = {
    name: string
    age: string
    gender: number
  }

checks([
    check<Diff<Foo, Bar>, { gender: number }, Test.Pass>(),
])