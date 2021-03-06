export type parseURL<text> = parseProtocol<text> extends [infer protocol, infer rest] ? {
  protocol: protocol;
  rest: rest;
} : never;
type parseProtocol<text> = text extends `${infer protocol}://${infer rest}` ? [{
  protocol: protocol;
}, rest] : never;
type parseUserInfo<text> = text extends `${infer username}:${infer password}` ? {
  username: username;
  password: password;
} : {
  username: text;
};
export type parseAuthority<text> = text extends `${infer authority}@${infer rest}` ? {
  authority: parseUserInfo<authority>;
  rest: rest;
} : {
  authority: null;
  rest: text;
};
export type parseHost<text> = text extends `${infer name}:${infer port}` ? parsePort<port> extends never ? never : {
  name: name;
  port: port;
} : {
  name: text;
};
type parsePort<text> = isNumberString<text> extends true ? text : never;
type isNumberString<text> = text extends "" ? never : _isNumberString<text>;
type _isNumberString<text> = text extends "" ? true : text extends `${infer digit}${infer rest}` ? digit extends Digit ? _isNumberString<rest> : false : false;
type Digit = ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9");