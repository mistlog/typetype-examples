/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/112-hard-capitalizewords/README.md
 * - https://github.com/type-challenges/type-challenges/issues/376
 * - https://github.com/type-challenges/type-challenges/issues/493
 * - https://github.com/type-challenges/type-challenges/issues/981
 */

import { Test } from "ts-toolbelt"
import { CapitalizeWords } from "./112-hard-capitalizewords"
const { checks, check } = Test

checks([
    check<CapitalizeWords<'foobar'>, 'Foobar', Test.Pass>(),
    check<CapitalizeWords<'  FOOBAR'>, '  FOOBAR', Test.Pass>(),
    check<CapitalizeWords<'  bar'>, '  Bar', Test.Pass>(),
    check<CapitalizeWords<'foo bar'>, 'Foo Bar', Test.Pass>(),
    check<CapitalizeWords<'foo bar.hello,world'>, 'Foo Bar.Hello,World', Test.Pass>(),
    check<CapitalizeWords<''>, '', Test.Pass>(),
    check<CapitalizeWords<'foo bar,hello.world'>, 'Foo Bar,Hello.World', Test.Pass>(),
    check<CapitalizeWords<'foo.bar.com,hello.world'>, 'Foo.Bar.Com,Hello.World', Test.Pass>(),
    check<CapitalizeWords<'fo ob,ar.ba.zh,el lo wo.rl,d'>, 'Fo Ob,Ar.Ba.Zh,El Lo Wo.Rl,D', Test.Pass>(),
])
