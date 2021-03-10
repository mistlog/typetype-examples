/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/147-hard-c-printf-parser/README.md
 * - https://github.com/type-challenges/type-challenges/issues/983
 */

import { Test } from "ts-toolbelt"
import { ParsePrintFormat } from "./147-hard-c-printf-parser"
const { checks, check } = Test

checks([
    check<ParsePrintFormat<'Any string.'>, [], Test.Pass>(),
    check<ParsePrintFormat<'The result is %d.'>, ['dec'], Test.Pass>(),
    check<ParsePrintFormat<'The result is %%d.'>, [], Test.Pass>(),
    check<ParsePrintFormat<'Hello %s: score is %d.'>, ['string', 'dec'], Test.Pass>(),
])