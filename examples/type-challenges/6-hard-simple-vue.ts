export type OptionType<dataType, methodType, computedType> = {
  data?: () => dataType;
  computed?: (computedType & ThisType<(dataType & methodType)>);
  methods?: (methodType & ThisType<(dataType & methodType & ProcessedComputedType<computedType>)>);
};
type ProcessedComputedType<T> = { [key in keyof T]: T[key] extends (...args: any[]) => infer returnType ? returnType : never };