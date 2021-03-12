export type OptionType<dataType, methodType, computedType, propsType> = {
  data?: (this: transformProps<propsType>) => dataType;
  computed?: (computedType & ThisType<(dataType & methodType)>);
  methods?: (methodType & ThisType<(dataType & methodType & transformComputed<computedType> & transformProps<propsType>)>);
  props?: propsType;
};
type transformComputed<computed> = { [key in keyof computed]: computed[key] extends (...args: any) => any ? ReturnType<computed[key]> : never };
type transformProps<props> = { [key in keyof props]: transformProp<props[key]> };
type transformProp<prop> = prop extends {
  type: infer propType;
} ? propType extends Array<infer EachProp> ? transformFunction<EachProp> : transformFunction<propType> : {} extends prop ? any : transformFunction<prop>;
type transformFunction<T> = T extends (...args: any) => any ? ReturnType<T> : T extends new (...args: any) => any ? InstanceType<T> : never;