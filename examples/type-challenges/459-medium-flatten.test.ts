/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/459-medium-flatten/README.md
 * - https://github.com/type-challenges/type-challenges/issues/765
 */

import { Test } from "ts-toolbelt"
import { Flatten } from "./459-medium-flatten"
const { checks, check } = Test

checks([
    check<Flatten<[]>, [], Test.Pass>(),
    check<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4], Test.Pass>(),
    check<Flatten<[1, [2]]>, [1, 2], Test.Pass>(),
    check<Flatten<[[2], 1]>, [2, 1], Test.Pass>(),
    check<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5], Test.Pass>(),
    check<Flatten<[{foo: 'bar'; 2: 10}, 'foobar']>, [{foo: 'bar'; 2: 10}, 'foobar'], Test.Pass>(),
])