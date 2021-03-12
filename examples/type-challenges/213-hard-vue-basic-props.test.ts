/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/213-hard-vue-basic-props/README.md
 * - https://github.com/type-challenges/type-challenges/issues/986
 * - https://github.com/type-challenges/type-challenges/issues/441
 */

import { Test } from "ts-toolbelt"
import { OptionType } from "./213-hard-vue-basic-props"
const { checks, check } = Test

declare function VueBasicProps<D, M, C, P>(options: OptionType<D, M, C, P>): any

//
class ClassA { }

VueBasicProps({
    props: {
        propA: {},
        propB: { type: String },
        propC: { type: Boolean },
        propD: { type: ClassA },
        propE: { type: [String, Number] },
        propF: RegExp,
    },
    data(this) {
        type Debug<T> = { [K in keyof T]: T[K]; }
        type IsAny<T> = 0 extends 1 & T ? true : false
        type PropsType = Debug<typeof this>

        checks([
            check<IsAny<PropsType['propA']>, true, Test.Pass>(),
            check<PropsType['propB'], string, Test.Pass>(),
            check<PropsType['propC'], boolean, Test.Pass>(),
            check<PropsType['propD'], ClassA, Test.Pass>(),
            check<PropsType['propE'], string | number, Test.Pass>(),
            check<PropsType['propF'], RegExp, Test.Pass>(),
        ])

        // @ts-expect-error
        this.firstname
        // @ts-expect-error
        this.getRandom()
        // @ts-expect-error
        this.data()

        return {
            firstname: 'Type',
            lastname: 'Challenges',
            amount: 10,
        }
    },
    computed: {
        fullname() {
            return `${this.firstname} ${this.lastname}`
        },
    },
    methods: {
        getRandom() {
            return Math.random()
        },
        hi() {
            alert(this.fullname.toLowerCase())
            alert(this.getRandom())
        },
        test() {
            const fullname = this.fullname
            const propE = this.propE
            checks([
                check<typeof fullname, string, Test.Pass>(),
                check<typeof propE, string | number, Test.Pass>(),
            ])
        },
    },
})