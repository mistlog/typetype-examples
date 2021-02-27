/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/18-easy-tuple-length/README.md
 * - https://github.com/type-challenges/type-challenges/issues/939
 */

import { Length } from "./18-easy-tuple-length"
import { Test } from "ts-toolbelt"
const { checks, check } = Test

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

checks([
    check<Length<typeof tesla>, 4, Test.Pass>(),
    check<Length<typeof spaceX>, 5, Test.Pass>(),
])