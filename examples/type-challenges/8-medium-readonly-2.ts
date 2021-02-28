export type MyReadonly2<obj, readonlyKeys = any> = obj & { readonly [key in keyof obj as key extends readonlyKeys ? key : never]: obj[key] };