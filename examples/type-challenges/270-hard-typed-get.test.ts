/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/270-hard-typed-get/README.md
 * - https://github.com/type-challenges/type-challenges/issues/444
 */

import { Test } from "ts-toolbelt"
import { Get } from "./270-hard-typed-get"
const { checks, check } = Test

type Data = {
    foo: {
        bar: {
            value: 'foobar',
            count: 6,
        },
        included: true,
    },
    hello: 'world'
}

checks([
    check<Get<Data, 'hello'>, 'world', Test.Pass>(),
    check<Get<Data, 'foo.bar.count'>, 6, Test.Pass>(),
    check<Get<Data, 'no.existed'>, never, Test.Pass>(),
])