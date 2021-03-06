/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/527-medium-append-to-object/README.md
 * - https://github.com/type-challenges/type-challenges/issues/766
 */

import { Test } from "ts-toolbelt"
import { AppendToObject } from "./527-medium-append-to-object"
const { checks, check } = Test

type test1 = {
    key: 'cat'
    value: 'green'
}

type testExpect1 = {
    key: 'cat'
    value: 'green'
    home: boolean
}

type test2 = {
    key: 'dog' | undefined
    value: 'white'
    sun: true
}

type testExpect2 = {
    key: 'dog' | undefined
    value: 'white'
    sun: true
    home: 1
}

type test3 = {
    key: 'cow'
    value: 'yellow'
    sun: false
}

type testExpect3 = {
    key: 'cow'
    value: 'yellow'
    sun: false
    isMotherRussia: false | undefined
}

type a  = keyof (test1 | 'home')
checks([
    check<AppendToObject<test1, 'home', boolean>, testExpect1, Test.Pass>(),
    check<AppendToObject<test2, 'home', 1>, testExpect2, Test.Pass>(),
    check<AppendToObject<test3, 'isMotherRussia', false | undefined>, testExpect3, Test.Pass>(),
])