import user from "./user"


export default {
  ...user
} as {
  [x: string]: () => {}
}