import { GetRequired } from "./57-hard-get-required";
export type GetOptional<T> = Omit<T, keyof GetRequired<T>>;