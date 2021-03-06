export type AnyOf<T extends any[]> = T[number] extends FalsyType ? false : true;
type EmptyObject = { [key in string]: never };
type FalsyType = (0 | "" | false | [] | EmptyObject);