import user from "./user"
import table from "./table"

export default {
  ...user,
  ...table
} as {
  [x: string]: () => {}
}