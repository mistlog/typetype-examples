import { Object, List } from "ts-toolbelt"

declare global {
    // add type guard
    type object$assign<a, b> = a extends object ?
        b extends List.List<object> ? Object.Assign<a, b>
        : never : never
}