/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/599-medium-merge/README.md
 * - https://github.com/type-challenges/type-challenges/issues/887
 */

import { Test } from "ts-toolbelt"
import { Merge } from "./599-medium-merge";
const { checks, check } = Test

type Foo = {
    a: number;
    b: string;
};

type Bar = {
    b: number;
};

checks([
    check<Merge<Foo, Bar>, {
        a: number;
        b: number;
    }, Test.Pass>(),
])