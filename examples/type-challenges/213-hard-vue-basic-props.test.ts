/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/213-hard-vue-basic-props/README.md
 * - https://github.com/type-challenges/type-challenges/issues/986
 */

import { Test } from "ts-toolbelt"
const { checks, check } = Test

//
type GetComputed<C> = {
    [P in keyof C]: C[P] extends (...args: any[]) => infer R ? R : never
}
type CtorToType<T> = T extends () => infer RE
    ? RE
    : T extends new (...args: any) => infer R ? R : never

type GetProps<T> = {
    [P in keyof T]: T[P] extends { type: infer R }
    ? R extends (infer A)[] ? CtorToType<A> : CtorToType<R>
    : T[P] extends { [key: string]: never } ? any : CtorToType<T[P]>
}


type Vm<P, D, C, M> = {
    props: P
    data: (this: GetProps<P>) => D
    computed: C & ThisType<D & M & GetComputed<C>>
    methods: M & ThisType<D & GetComputed<C> & M & GetProps<P>>
}

declare function VueBasicProps<P, D, C, M>(options: Vm<P, D, C, M>): any


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