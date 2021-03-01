export type Chainable<Props = {}> = {
  option: OptionType<Props>;
  get: () => Props;
};
type OptionType<Props = {}> = <Key extends string, Value>(key: Key, value: Value) => Chainable<Props & toObjectType<Key, Value>>;
type toObjectType<Keys extends string, value> = { [key in Keys]: value };