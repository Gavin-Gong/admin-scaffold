import { ref } from "@vue/reactivity"
import { onMounted } from "@vue/runtime-core"
import { queryTable, QueryTablePayload } from "../../api/table"
import { useTableColumns,  } from "./useTableColumns"
export function useTable() {
  const { columns } = useTableColumns()
  let dataSource = ref<any[]>([])
  const getTableData = async (data: QueryTablePayload) => {
    let res = await queryTable(data)
    dataSource.value = res.data.data.map(v => ({
      ...v,
      key:v.id
    }))
  }
  onMounted(() => {
    getTableData({})
  })
  return {
    columns,
    dataSource,
    getTableData
  }
}