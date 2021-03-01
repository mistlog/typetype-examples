/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/11-easy-tuple-to-object/README.md
 * - https://github.com/type-challenges/type-challenges/issues/945
 */

import { TupleToObject } from "./11-easy-tuple-to-object";
import { Test } from "ts-toolbelt"
const { checks, check } = Test

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple>;

checks([
    check<result, {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
    }, Test.Pass>(),
])