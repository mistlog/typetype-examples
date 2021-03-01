/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/9-medium-deep-readonly/README.md
 * - https://github.com/type-challenges/type-challenges/issues/918
 */

import { Test } from "ts-toolbelt"
import { DeepReadonly } from "./9-medium-deep-readonly";
const { checks, check } = Test

type X = {
    a: () => 22
    b: string
    c: {
        d: boolean
        e: {
            g: {
                h: {
                    i: true
                    j: 'string'
                }
                k: 'hello'
            }
        }
    }
}

type Expected = {
    readonly a: () => 22
    readonly b: string
    readonly c: {
        readonly d: boolean
        readonly e: {
            readonly g: {
                readonly h: {
                    readonly i: true
                    readonly j: 'string'
                }
                readonly k: 'hello'
            }
        }
    }
}

checks([
    check<DeepReadonly<X>, Expected, Test.Pass>(),
])