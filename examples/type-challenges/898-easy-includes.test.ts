/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/898-easy-includes/README.md
 * - https://github.com/type-challenges/type-challenges/issues/913
 */

import { Includes } from "./898-easy-includes"
import { Test } from "ts-toolbelt"
const { checks, check } = Test

checks([
    check<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false, Test.Pass>(),
    check<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Wamuu'>, true, Test.Pass>(),
])