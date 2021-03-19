import { reactive } from "vue"
export function useTableColumns() {
  const columns = reactive([
    {
      title: "id",
      key: "id",
      dataIndex: "id"
    },
    {
      title: "title",
      key: "title",
      dataIndex: "title"
    },
    {
      title: "desc",
      key: "desc",
      dataIndex: "desc"
    },
    {
      title: "createdAt",
      key: "createdAt",
      dataIndex: "createdAt"
    },
    {
      title: "name",
      key: "name",
      dataIndex: "name"
    },
    {
      title: "age",
      key: "age",
      dataIndex: "age"
    },
  ])
  return {
    columns
  }
}