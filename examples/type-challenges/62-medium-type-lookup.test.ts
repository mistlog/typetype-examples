/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/62-medium-type-lookup/README.md
 * - https://github.com/type-challenges/type-challenges/issues/888
 */

import { Test } from "ts-toolbelt"
import { LookUp } from "./62-medium-type-lookup"
const { checks, check } = Test

interface Cat {
    type: 'cat'
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
  }
  
  interface Dog {
    type: 'dog'
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
    color: 'brown' | 'white' | 'black'
  }
  
  type Animal = Cat | Dog

checks([
    check<LookUp<Animal, 'dog'>, Dog, Test.Pass>(),
    check<LookUp<Animal, 'cat'>, Cat, Test.Pass>()
])