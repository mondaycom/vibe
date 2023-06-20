declare module 'babel-plugin-tester' {
  function tester(args: unknown): unknown
  export = tester
}

declare module 'babel-log' {
  function log(args: unknown): unknown
  export = log
}
