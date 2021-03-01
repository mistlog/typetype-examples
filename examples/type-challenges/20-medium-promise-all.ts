export type PromiseAllType = <T extends any[]>(values: readonly [...T]) => Promise<{ [key in keyof T]: Awaited<T[key]> }>;
type Awaited<T> = T extends Promise<infer R> ? Awaited<R> : T;