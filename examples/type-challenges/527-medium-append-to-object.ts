export type AppendToObject<T, Key extends PropertyKey, Value> = { [key in (keyof T | Key)]: key extends keyof T ? T[key] : Value };