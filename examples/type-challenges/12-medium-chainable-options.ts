export type Chainable<Props = {}> = {
  option: OptionType<Props>;
  get: () => Props;
};
type OptionType<Props = {}> = <Key extends string, Value>(key: Key, value: Value) => Chainable<(Props & Record<Key, Value>)>;