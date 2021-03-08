type isRequired<T, K extends keyof T> = Pick<T, K> extends Record<K, T[K]> ? true : false;
export type GetRequired<T> = { [K in keyof T as isRequired<T, K> extends true ? K : never]: T[K] };