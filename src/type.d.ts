// TODO: reexport exist type
declare module 'axios/lib/adapters/xhr' {
  function AxiosAdapter(...args: any[]): any
  export = AxiosAdapter
}