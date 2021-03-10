export type ParsePrintFormat<str extends string, result extends string[] = []> = str extends `${infer head}%${infer formatChar}${infer rest}` ? formatChar extends keyof ControlsMap ? ParsePrintFormat<rest, [...result, ControlsMap[formatChar]]> : ParsePrintFormat<rest, result> : result;
type ControlsMap = {
  c: "char";
  s: "string";
  d: "dec";
  o: "oct";
  h: "hex";
  f: "float";
  p: "pointer";
};