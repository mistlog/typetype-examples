export type OptionType<dataType, methodType, computedType> = {
  data?: () => dataType;
  computed?: (computedType & ThisType<(dataType & methodType)>);
  methods?: (methodType & ThisType<(dataType & methodType & { [key in keyof computedType]: computedType[key] extends (...args: any[]) => any ? ReturnType<computedType[key]> : never })>);
};