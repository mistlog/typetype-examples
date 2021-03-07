/**
 * ref:
 * - https://github.com/type-challenges/type-challenges/blob/master/questions/6-hard-simple-vue/README.md
 * - https://github.com/type-challenges/type-challenges/issues/707
 */

import { Test } from "ts-toolbelt"
import { OptionType } from "./6-hard-simple-vue";
const { checks, check } = Test

declare function SimpleVue<D, M, C>(options: OptionType<D, M, C>): D & M & C

declare function alert(a: any): void;

SimpleVue({
    data() {
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
            checks([
                check<typeof fullname, string, Test.Pass>(),
            ])
        },
    },
})