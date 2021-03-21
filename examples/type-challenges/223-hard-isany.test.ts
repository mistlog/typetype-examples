/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/223-hard-isany/README.md
 * - https://stackoverflow.com/questions/49927523/disallow-call-with-any/49928360#49928360
 */

import { Test } from "ts-toolbelt"
import { IsAny } from "./223-hard-isany"
const { checks, check } = Test

checks([
    check<IsAny<any>, true, Test.Pass>(),
    check<IsAny<undefined>, false, Test.Pass>(),
])